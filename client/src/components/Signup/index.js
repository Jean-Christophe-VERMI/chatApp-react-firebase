import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../../firebase";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

//Component
import Header from "../Header";

//Style
import SignupStyle from "./SignupStyle";

const SignUp = ({ history }) => {

  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { username, email, password } = event.target.elements;
    await app.auth().createUserWithEmailAndPassword(email.value, password.value)
    await app.auth().onAuthStateChanged((user) => {
      if (user) {
        user.updateProfile({displayName: username.value}).then (() => {
          // gérer le message de validation d'inscription à l'écran.
          setTimeout(() => {
            history.push("/messenger");
          }, 500)
        })
      }
    })
   
  }, [history]);

  return (
    <SignupStyle>
      <Header />
      <div className="container">
        <div className="form-container">
          <form className="form" onSubmit={handleSignUp}>
            <Input className="form-elems input" type="text" name="username"  placeholder="Username" />
            <Input className="form-elems input"  type="email" name="email" placeholder="Email" />
            <Input className="form-elems input" type="password" name="password" placeholder="Mot de passe" />
            <Button className="form-elems btn" variant="contained" color="primary" type="submit">Inscription</Button>
          </form>
        </div>
      </div>
    </SignupStyle>
  );
};

export default withRouter(SignUp);