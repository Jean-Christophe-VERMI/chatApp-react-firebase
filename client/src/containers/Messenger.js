import { connect } from 'react-redux';

import Messenger from '../components/Messenger';

const mapStateToProps = (state) => ({
  recipientId : state.conversation.recipientId,
});

const mapDispatchToProps = (dispatch) => ({
  
});


export default connect(mapStateToProps, mapDispatchToProps)(Messenger);