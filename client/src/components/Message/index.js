import React, {useEffect, useRef} from 'react';
import app from "../../firebase";

//Style
import MessageStyle from './MessageStyle';

const Message = ({message, date, username, senderId}) => {

  const user = app.auth().currentUser
  const msgDiv = useRef(null);

  useEffect(() => {
    if(user.displayName !== username){
      msgDiv.current.style.background = '#e7eff8'
    } else {
      msgDiv.current.style.background = '#dcd5ed'
    }
  }, []);
  
  return (
    <MessageStyle ref={msgDiv}>
      <p className="msg">{message}</p>
    </MessageStyle>
  );
};

export default Message;
