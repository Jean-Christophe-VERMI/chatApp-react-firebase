import React, {useEffect, useState} from "react";
import app, { storage } from "../../firebase";
// import { CircularProgress } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Tooltip from '@material-ui/core/Tooltip';
import Modal from '@material-ui/core/Modal';

//Container
import UploadForm from '../../containers/UploadForm';

//Style
import ProfileStyle from './ProfileStyle';

const Profile = ({urlProfilImage, displayUrlProfilImage}) => {
 
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const user = app.auth().currentUser
    if(user) {
      setUserName(user.displayName);
      setUserId(user.uid);

      const fetchUserPicture = async () => {
        const pathReference = storage.ref(`images/profil/${user.uid}`);
        try {
          const url = await pathReference.getDownloadURL()
          displayUrlProfilImage(url);
        } catch (error) {
          console.log({erreur : error})
        };
      };
      fetchUserPicture()
    }
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ProfileStyle>
        <div className="user-profil">
          {!urlProfilImage && (
            <div className="picture-modal">
              <Tooltip title="Modifier la photo de profil">
                <AccountCircleIcon fontSize='large' className="avatar-default" onClick={handleOpen} />
              </Tooltip>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <UploadForm userId={userId} />
              </Modal>
            </div>
          )}
          {urlProfilImage && (
            <div className="picture-modal">
              <div>
              <img className="avatar" src={urlProfilImage} alt="photo-profil" onClick={handleOpen}/>
            </div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <UploadForm userId={userId} />
              </Modal>
            </div>
          )}
          <div className="user-datas">
            <p className="username">{userName}</p>
          </div>
        </div>
    </ProfileStyle>
  );
};

export default Profile;