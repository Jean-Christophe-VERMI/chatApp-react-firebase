import styled from 'styled-components';

const MessengerPageStyle = styled.div`

  width: 100%;
  height: 100vh;
  background-color: #282c34;
  display: flex;
  flex-direction: column;

  .user-header {
    background: #424d70;
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .main-container {
    height: 100%;
    display: flex;
    flex-direction: row;
  }

  .title-user-list {
    margin-top: .5rem;
    text-transform: uppercase;
    text-align: left;
  }

  .user-list {
    background: #dcd5ed;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .messenger-box {
    background: #ffffff;
    width: 70%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
  }
  
`;

export default MessengerPageStyle;