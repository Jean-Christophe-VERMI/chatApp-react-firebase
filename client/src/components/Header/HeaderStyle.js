import styled from 'styled-components';

const HeaderStyle = styled.header`

  width: 100%;
  
  .title-div {
    background-color: #424d70;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 65px;
    width: 100%;

    @media (max-width: 768px) {
      width: auto;
      padding: .5rem;
    }
  }

  .title {
    font-size: 1.3rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  .logo {
    height: 50px;
    animation: App-logo-spin infinite 20s linear;
  }

  .title {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }

  }
`;

export default HeaderStyle;