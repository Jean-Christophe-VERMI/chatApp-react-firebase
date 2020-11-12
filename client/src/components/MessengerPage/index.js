import React, { useEffect } from 'react';
import axios from 'axios';
import app from "../../firebase";

//Container
import Logout from '../../containers/Logout';
import Profile from '../../containers/Profile';
import Messenger from '../../containers/Messenger';
import UserLists from '../../containers/UserLists';

//Style
import MessengerPageStyle from './MessengerPageStyle';

const MessengerPage = ({saveUsersFromFirebase, saveCurrentUser}) => {

  useEffect(() => {
    const fetchUsersFromFirebase = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getAllUsers');
        const users = response.data;
        saveUsersFromFirebase(users);
      } catch (e) {
        console.error(e);
      }
    };
    fetchUsersFromFirebase();
    
    const getCurrentUser = async () => {
      const user = await app.auth().currentUser
      saveCurrentUser(user);
    }
    getCurrentUser();
  }, []);
  
  return (
    <MessengerPageStyle>
      <div className="user-header">
        <Profile />
        <Logout />
      </div>
      <div className="main-container">
        <div className="user-list">
          <UserLists />
        </div>
        <div className="messenger-box">
            <Messenger />
        </div>
      </div>
    </MessengerPageStyle>
  );
};

export default MessengerPage;
