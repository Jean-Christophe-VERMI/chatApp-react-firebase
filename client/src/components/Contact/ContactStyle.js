import styled from 'styled-components';

const ContactStyle = styled.div`
  
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
    width: 50px;
    border-radius: 30px;
  }

  .username  {
    margin: 0rem .5rem;
    text-transform: uppercase;
    padding-left: .5rem;
  }

  .user-link {
    text-decoration: none;
    width: 100%;
    color: black;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default ContactStyle;