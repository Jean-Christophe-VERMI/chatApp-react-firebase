import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import * as firebase from 'firebase/app';
import app, { db, storage } from "../../firebase";
import Moment from 'moment';
import 'moment/locale/fr';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

//Component
import Message from '../Message';
import Loading from '../Loading';

//Style
import ConversationStyle from './ConversationStyle';

let socket;
const Conversation = ({ currentUser, recipientId }) => {
  const ENDPOINT = 'localhost:5000';
  socket = io(ENDPOINT);

  const [pending, setPending] = useState(true);
  const [conversationName, setConversationName] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [getNewMsg, setGetNewMsg] = useState(false);

  const recipientName = localStorage.getItem('recipientName');
  const firstId = localStorage.getItem('name1');
  const secondId = localStorage.getItem('name2');

  useEffect(() => {
    socket.on('msg:getNew', () => {
      setGetNewMsg(true);
    });

    if(getNewMsg) {
      console.log('fetch new msg to storage');
      const conversationRef = db.collection('conversations').doc(firstId);
      conversationRef.get().then(function(doc) {
        if (doc.exists) {
          console.log("new message is fetch with firstId!");
          setMessages(doc.data().messages);
          setGetNewMsg(false);
        } else {
          console.log("No such document with this firstId!");
          // fetch new messages with secondId
          const conversationRef = db.collection('conversations').doc(secondId);
          conversationRef.get().then(function(doc) {
            if (doc.exists) {
              console.log("new message is fetch with secondId!");
              setMessages(doc.data().messages);
              setGetNewMsg(false);
            } 
          })
          .catch(function(error) {
            console.log("Error getting document:", error);
          })
        }
      })
    } else {

    }
  }, [getNewMsg]);

  useEffect(() => {
    /* if(firstId === null && secondId === null) {
      
    } else {
      fetchConversation(firstId, secondId);
    } */
    if(recipientId) {
     const conversationRef = db.collection('conversations');
     conversationRef.where("recipientId", "==", recipientId).get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
          });
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
     setMessages(messages);
     setPending(false);
    }
  }, [recipientId]);
 
  const fetchConversation = (firstId, secondId) => {
    const conversationRef = db.collection('conversations').doc(firstId);
    conversationRef.get().then(function(doc) {
      if (doc.exists) {
        console.log("document is fetch with firstId !");
        setMessages(doc.data().messages);
        setConversationName(firstId);
        setPending(false);
      } else {
        console.log("No such document with firstId!");
        // fetch conversation with secondId
          const conversationRef = db.collection('conversations').doc(secondId);
          conversationRef.get().then(function(doc) {
            if (doc.exists) {
              console.log("document is fetch with secondId!");
              setMessages(doc.data().messages);
              setConversationName(secondId);
              setPending(false);
            } else {
              console.log("No such document with this secondId!");
              db.collection('conversations').doc(firstId).set({
                messages: {
                  recipientId : recipientId,
                  conversation : [],
                }
              })
              .then(function() {
                console.log("Document successfully written with firstId!");
                setConversationName(firstId);
                setPending(false);
              })
              .catch(function(error) {
                  console.error("Error writing document: ", error);
              });
            }
          })
          .catch(function(error) {
            console.log("Error getting document:", error);
          })
      }
    })
  }

  const msgContainer = useRef(null);

  useEffect(() => {
    if(!pending) {
      msgContainer.current.scrollTop = msgContainer.current.scrollHeight;
    }
  }, [messages]);

  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const timeArr = Moment().format('x');

    const newMsg = {
      usersInfos : {
        senderId: currentUser.uid,
        recipientId: recipientId,
      },
      messageInfos : {
        message: newMessage,
        username: currentUser.displayName,
        date: Moment(Date.now()).locale('fr').format("dddd, Do/MM/YYYY, h:mm"),
        RenderKey: timeArr,
      },
    }

    db.collection('conversations').doc(conversationName).update({
      messages : firebase.firestore.FieldValue.arrayUnion(newMsg)
    })
    .then(function() {
      console.log("Document successfully written!");
      setNewMessage('');
      const conversationRef = db.collection('conversations').doc(conversationName);
      conversationRef.get().then(function(doc) {
        if (doc.exists) {
          console.log("messages list is update!");
          setMessages(doc.data().messages)
          socket.emit('msg:post', {});
        }
      })
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
  };

  return (
    <ConversationStyle >
      {firstId === null && secondId === null && (
        <div className="select-conv">
          <p>Cliquez sur un contact pour démarrer une conversation</p>
        </div>
      )}
      {pending && recipientName !== null && (
        <Loading />
      )}
      {!pending && (
        <div className="messages-container">
          <div className="conversation-infos">
            <p>Conversation avec <span className="username">{recipientName}</span></p>
          </div>
          {messages.length === 0 && (
            <div className="messages">
              <p className="start-msg">Démarrer une conversation avec <span className="username">{recipientName}</span></p>
            </div>
          )}
            <div ref={msgContainer} className="messages">
              {messages.map((msg) => (
                <Message key={msg.RenderKey} {...msg} />
              ))}
            </div>
          <div className="sender-box">
            <form className="input-message" onSubmit={handleSubmit} noValidate autoComplete="off">
              <TextField onChange={handleChange} value={newMessage} className="text" id="outlined-basic" label="message" variant="outlined" />
              <Button className="button" type="submit" variant="contained" color="primary">
                <SendIcon />
              </Button>
            </form>
          </div>
        </div>
      )}
    </ConversationStyle>
  );
};
  
export default Conversation;