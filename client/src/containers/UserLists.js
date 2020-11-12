import { connect } from 'react-redux';

import UserLists from '../components/UserLists';

const mapStateToProps = (state) => ({
  usersList: state.user.usersList,
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLists);