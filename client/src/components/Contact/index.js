import React, {useEffect, useState} from 'react';
import { storage } from "../../firebase";
import sha256 from 'crypto-js/sha256';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

//Style
import ContactStyle from './ContactStyle';

//Component
import Notification from '../Notification';

const Contact = ({ displayName, uid, setRecipientId, setRoomName, currentUser }) => {

  // get image profil storage by uid
  const [urlSource, setUrlSource] = useState(null);

  useEffect(() => {
    const fetchUrl = async () => {
      const pathReference = storage.ref(`images/profil/${uid}`);
      try {
        const url = await pathReference.getDownloadURL()
        setUrlSource(url);
      } catch (error) {
        console.log(error)
      };
    };
    fetchUrl()
  }, []);


  const handleConversation = () => {
    setRecipientId(uid);
    localStorage.setItem('recipientName', displayName);
    const user1 = sha256(currentUser.uid);
    const user2 = sha256(uid);
    const chatID = 'chat_'+(user1<user2 ? user1+'_'+user2 : user2+'_'+user1);
    localStorage.setItem('roomName', chatID);
    setRoomName(chatID);
  };

  return (
    <ContactStyle>
      {urlSource === null && (
        <div>
          <AccountCircleIcon color="action" style={{ fontSize: 50 }} className="avatar" />
        </div>
      )}
      {urlSource !== null && (
        <div>
          <img className='avatar' src={urlSource} alt='profile' />
        </div>
      )}
      <div className='username'>
        <Link
          className="user-link"
          onClick={handleConversation}
          to={`/messenger/${displayName}`}
        >
          {displayName}
        </Link>
      </div>
      <Notification />
    </ContactStyle>
  );
};

export default Contact;
