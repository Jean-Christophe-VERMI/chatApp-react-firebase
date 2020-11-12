import React, {useEffect, useState} from 'react';
import app from "../../firebase";
//import io from 'socket.io-client';

//Components
//import OnlineUser from '../OnlineUser';
import Loading from '../Loading';

//Containers
import Contact from '../../containers/Contact';

//Style
import UserListsStyle from './UserListsStyle';

// let socket;
const UserLists = ({usersList}) => {

  const user = app.auth().currentUser
 
  /*
  const ENDPOINT = 'localhost:5000';
  socket = io(ENDPOINT);

  useEffect(() => {
    socket.on('fetchOnlineUsers', () => {
      fetchOnlineUsersFromDB();
    });
  }, []);
  */
 console.log(usersList)

  return (
    <UserListsStyle>
      <div className="userlist-container">
        <div>
          <h4 className="title-user-list">contacts</h4>
            {usersList.filter(usersList => usersList.uid !== user.uid).map((user) => (
              <Contact key={user.uid} {...user} />
            ))}
        </div>
        {/* <div>
          <h4 className="title-user-list">En ligne</h4>
          {onlineUsers.length === 1 && (
            <p className="no-user-infos">Aucun utilisateur en ligne</p>
          )}
          {onlineUsers.length >= 2 &&  (
          <>
            {onlineUsers.filter((u) => u.email !== onlineUser.email).map((user) => (
              <OnlineUser key={user.id} {...user} />
            ))}
          </>
        )}
        </div> */}
      </div>
    </UserListsStyle>
  );
};

export default UserLists;