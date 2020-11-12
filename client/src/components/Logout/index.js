import React from "react";
import app from "../../firebase";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

//Style
import LogoutStyle from './LogoutStyle';

const Logout = ({logOut}) => {

  const handleLogout = () => {
    localStorage.clear();
    logOut()
    app.auth().signOut()
  }

  return (
  <LogoutStyle>
    <button title='logout' className="logout-btn" onClick={handleLogout}><ExitToAppIcon fontSize='small'/></button>
  </LogoutStyle>
  );
  
};

export default Logout;