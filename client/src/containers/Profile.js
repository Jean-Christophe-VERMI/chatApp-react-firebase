import { connect } from 'react-redux';

import Profile from '../components/Profile';

import { displayUrlProfilImage } from '../actions/user';

const mapStateToProps = (state) => ({
  usersList : state.user.usersList,
  usersInfos : state.user.usersInfos,
  urlProfilImage : state.user.urlProfilImage,
});

const mapDispatchToProps = (dispatch) => ({
  displayUrlProfilImage: (url) => {
    dispatch(displayUrlProfilImage(url));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);