import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../firebase";
import { AuthContext } from "../Auth";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

//Component 
import Header from "../Header";
//Style 
import LoginStyle from "./LoginStyle";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/messenger");
      } catch (error) {
        console.log(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/messenger" />;
  }

  return (
    <LoginStyle>
      <Header />
      <div className="container">
        <div className="form-container">
          <form className="form" onSubmit={handleLogin}>
            <Input className="form-elems input"  type="email" name="email" placeholder="Email" />
            <Input className="form-elems input" type="password" name="password" placeholder="Mot de passe" />
            <Button className="form-elems btn" variant="contained" color="primary" type="submit">Connexion</Button>
          </form>
        </div>
      </div>
    </LoginStyle>
  );
};

export default withRouter(Login);