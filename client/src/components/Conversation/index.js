import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
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
  socket.on('msg:getNew', () => {
    setGetNewMsg(true);
  });

  const recipientName = localStorage.getItem('recipientName');

  const [pending, setPending] = useState(true);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [getNewMsg, setGetNewMsg] = useState(false);
  const [roomName, setRoomName] = useState(null);
  const msgContainer = useRef(null);

  // Init state composant
  useEffect(() => {
      setMessages([]);
      const chatID = localStorage.getItem('roomName');
      db.collection('conversations').doc(chatID).collection('messages').get()
      .then((querySnapshot) => {
        if(querySnapshot) {
          querySnapshot.forEach((doc) => {
            setMessages(prevState => [...prevState, doc.data()]);
          });
          setPending(false);
          setRoomName(chatID);
          msgContainer.current.scrollTop = msgContainer.current.scrollHeight;
        }
      })
  }, [recipientId]);
  
  // Socket listener for fetch new message
  useEffect(() => {
    if(getNewMsg) {
      fetchLastMessage(roomName);
    }
  }, [getNewMsg]);

  
  //Function fetch last message
  const fetchLastMessage = async (roomName) => {
    await db.collection('conversations').doc(roomName).collection('messages').orderBy("RenderKey", "desc")
    .limit(1).get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setMessages(prevState => [...prevState, doc.data()]);
        msgContainer.current.scrollTop = msgContainer.current.scrollHeight;
      });
    })
    setGetNewMsg(false);
  }

  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const timeArr = Moment().format('x');

    db.collection('conversations').doc(roomName).collection('messages').doc().set({
      message: newMessage,
      username: currentUser.displayName,
      date: Moment(Date.now()).locale('fr').format("dddd, Do/MM/YYYY, h:mm"),
      RenderKey: timeArr,
    }).then(function() {
      console.log("Document successfully written!");
      setNewMessage('');
      socket.emit('msg:post', {});
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
  };

  return (
    <ConversationStyle >
      {pending && (
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
            {messages.sort((a, b) => a.RenderKey - b.RenderKey).map((msg) => (
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
