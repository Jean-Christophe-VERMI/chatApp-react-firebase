import { connect } from 'react-redux';

import Logout from '../components/Logout';

import { logOut } from '../actions/user';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => {
    dispatch(logOut());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);