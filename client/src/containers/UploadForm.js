import { connect } from 'react-redux';

import UploadForm from '../components/UploadForm';

import { displayUrlProfilImage } from '../actions/user';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  displayUrlProfilImage: (url) => {
    dispatch(displayUrlProfilImage(url));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);