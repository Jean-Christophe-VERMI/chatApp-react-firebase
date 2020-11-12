import styled from 'styled-components';

const HomeDesignStyle = styled.div`

  width: 100%;
  height: calc(100vh - 65px);
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    width: auto;
    flex-direction: column;
  }

  .description {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #ffffff;

    @media (max-width: 768px) {
      width: 100%;
    }
    
  }

  .service {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.3rem;
    margin: 0 auto;

    @media (max-width: 768px) {
      justify-content: center;
    }
  }

  .firebase-logo {
    width: 280px;
  }

  p span {
  font-style: italic;
  }

  .btns-link {
    margin: 0 auto;
    display: flex;
  }

  .btn {
    margin: 1rem;
  }

  .link {
    text-decoration: none;
    color: #282c34;
  }

  .illustration {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 768px) {
      width: 100%;
      justify-content: center;
      margin-top: 1rem;
      
    }
  }

  .img-interface {
    
    @media (max-width: 768px) {
      width: 300px;
      z-index: 0;
      margin-bottom: .5rem;
    }
  }

}
`;

export default HomeDesignStyle;