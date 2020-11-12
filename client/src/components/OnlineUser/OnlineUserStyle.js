import styled from 'styled-components';

const OnlineUserStyle = styled.div`
  
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  margin: .3rem auto;
  padding: 3px;
  background: #ffffff;
  border-radius: 3px;

  .avatar {
    height: 50px;
    border-radius: 30px;
    border: 2px solid #03D400;
  }

  .username  {
    text-transform: uppercase;
    padding-left: .5rem;
  }
`;

export default OnlineUserStyle;