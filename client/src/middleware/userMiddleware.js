// import axios from 'axios';

import {
  
} from '../actions/user';

const userMiddleware = store => next => action => {
  switch (action.type) {
    /* case POST_ONLINE_USER_TO_DB: {
      let user = store.getState().user.onlineUser;
      axios({
        method: 'post',
        url: 'http://localhost:5000/isLogged',
        data: {
          username: user.username,
          email: user.email,
          picture: user.picture,
        },
      })
        .then(response => {
          console.log('user save on db')
          socket = io('localhost:5000');
          socket.emit('user:join', {});
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response.data.error);
          }
        });
      next(action);
      break;
    }
    case DELETE_USER_FROM_DB: {
      let user = store.getState().user.onlineUser;
      axios({
        method: 'delete',
        url: 'http://localhost:5000/isLogout',
        data: {
          email: user.email,
        },
      })
        .then(response => {
          console.log(response);
          store.dispatch(userListIsUpdated());
        })
        .catch(error => {
          if (error.response) {

            console.log(error.response);
          }
        });
      next(action);
      break;
    } */
    default:
      console.log('Je laisse passer cette action: ', action);
      next(action);
      break;
  }
};

export default userMiddleware;