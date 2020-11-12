import { connect } from 'react-redux';

import Conversation from '../components/Conversation';

import { setIsNew } from '../actions/conversation';

const mapStateToProps = (state) => ({
  recipientName : state.conversation.recipientName,
  recipientId : state.conversation.recipientId,
  roomName : state.conversation.roomName,
  currentUser : state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  /* setIsNew: (value) => {
    dispatch(setIsNew(value));
  }, */
});

export default connect(mapStateToProps, mapDispatchToProps)(Conversation);