import { connect } from 'react-redux';

import Contact from '../components/Contact';

import { setRecipientId, storeRecipient, setRoomName, fetchConversation } from '../actions/conversation';

const mapStateToProps = (state) => ({
  onlineUsers : state.user.onlineUsers,
  usersList : state.user.usersList,
  urlProfilImage : state.user.urlProfilImage,
  currentUser : state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setRecipientId: (uid) => {
    dispatch(setRecipientId(uid));
  },
  setRoomName: (value) => {
    dispatch(setRoomName(value));
  },
  storeRecipient: (uid) => {
    dispatch(storeRecipient(uid));
  },
  fetchConversation: () => {
    dispatch(fetchConversation());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);