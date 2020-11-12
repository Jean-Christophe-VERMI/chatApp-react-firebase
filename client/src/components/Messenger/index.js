import React, { useEffect } from 'react';

//Component
import Conversation from '../../containers/Conversation';

//Style
import MessengerStyle from './MessengerStyle';

const Messenger = () => {
  const roomName = localStorage.getItem('roomName');
  
  return (
    <MessengerStyle>
      {roomName === null &&(
        <div className="select-conv">
          <p>Cliquez sur un contact pour démarrer une conversation</p>
        </div>
      )}
      {roomName !== null &&(
        <Conversation />
      )}
    </MessengerStyle>
  );
};

export default Messenger;
