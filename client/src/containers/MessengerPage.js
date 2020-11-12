import { connect } from 'react-redux';

import { saveUsersFromFirebase, saveUsersInfos, saveCurrentUser } from '../actions/user';

import MessengerPage from '../components/MessengerPage';


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  
  saveUsersFromFirebase: (users) => {
    dispatch(saveUsersFromFirebase(users));
  },
  saveUsersInfos: (datas) => {
    dispatch(saveUsersInfos(datas));
  },
  saveCurrentUser: (user) => {
    dispatch(saveCurrentUser(user));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(MessengerPage);