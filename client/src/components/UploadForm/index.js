import React, { useState } from 'react';
import { storage } from "../../firebase";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

//Style
import UploadFormStyle from './UploadFormStyle';

const UploadFrom = ({userId, displayUrlProfilImage }) => {

  const [image, setImage] = useState(null);
  
  const handleChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    // Step 1 : Si une image de profil existe déjà la supprimer avant d'enregister la nouvelle.
    const pathReference = storage.ref(`images/profil/${userId}`);
    pathReference.delete().then(() => {
      console.log('fichier supprimé avec succès');
      // Step 2 : upload de la nouvelle image de profil
      pathReference.put(image).then(() => {
        const url = storage.ref("images/profil").child(userId).getDownloadURL().then(() => {
          displayUrlProfilImage(url);
        })
      })
    }).catch(function(error) {
      console.log(error + 'aucun fichier supprimé');
    });
    // Step 2 : upload de l'image de profil.
    /* const uploadTask = storage.ref(`images/profil/${userId}`).put(image);
    uploadTask.on("state_changed", async () => {
      const url = await storage.ref("images/profil").child(userId).getDownloadURL();
      console.log(url);
      displayUrlProfilImage(url);
    }); */
  }

  return (
    <UploadFormStyle>
      <p>Enregister ou modifier une photo de profil</p>
      <Input className="form-elems" type="file" onChange={handleChange} />
      <Button className="upload-btn" variant="contained" color="primary" onClick={handleUpload}>
        Enregistrer
      </Button>
    </UploadFormStyle>
  );
};

export default UploadFrom;
