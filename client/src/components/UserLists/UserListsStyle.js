import styled from 'styled-components';

const UserListsStyle = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  
  .user {
    padding: .5rem;
    width: 90%;
  }

  .userlist-container {
    display: flex;
    flex-direction: column;
    width: 90%;
    justify-content: space-around;

    h4,p {
      text-align: center;
    }

  }
  
`;

export default UserListsStyle;