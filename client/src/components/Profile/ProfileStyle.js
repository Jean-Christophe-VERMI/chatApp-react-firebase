import styled from 'styled-components';

const ProfileStyle = styled.div`

  color: white;

  .user-profil {
    display: flex;
    align-items: center;
  }

  .picture-modal {
    padding: .5rem;
  }

  .upload {
    background: rgba(255, 255, 255, 0.5);
    height: 200px;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .avatar-default {
    cursor: pointer;
  }

  .avatar {
    width: 45px;
    border-radius: 3px;
    cursor: pointer;
  }

  .user-datas {
    padding: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .username {
    font-size: 1.1rem;
    text-transform: uppercase;
  }

  .upload-btn {

  }
`;

export default ProfileStyle;