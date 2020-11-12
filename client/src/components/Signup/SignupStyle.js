import styled from 'styled-components';

const SignupStyle = styled.div`

  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
    padding: 0px;
  }

  .container {
    margin: auto;
  }

  .form-title {
    margin: 1rem;
    color: #000000;
    font-size: 1.2rem;
    text-align: center;
    text-transform: uppercase;
  }

  .form-container {
    background: #e8e1fa;
    padding: 1.5rem;
    border-radius: 5px;
  }

  .form-elems {
    margin: 1rem;
  }

  .form-elems.input {
    background : #ffffff;
    padding: 5px;
  }

  .form-elems.input.upload {
    background : #ccc;
    padding: 5px;
  }

  .form {
    display: flex;
    flex-direction: column;
  }
  
`;

export default SignupStyle;