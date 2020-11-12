import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import firebaseIcon from './images/FirebaseLogo.png';
import chatInterface from './images/interface-chat2.png';

//Component
import Login from '../Login';

//Style
import HomeDesignStyle from './HomeDesignStyle';

const HomeDesign = () => {
  
  return (
    <HomeDesignStyle>
      <div className="description">
        <div className="service">
          <img src={firebaseIcon} className="firebase-logo" alt='auth0 icon' />
        </div>
        <div className="btns-link">
          <Button className="btn" variant="contained" >
            <Link
              className="link"
              to="/connexion"
            >
              Connexion
            </Link>
          </Button>
          <Button className="btn" variant="contained" >
            <Link
              className="link"
              to="/inscription"
            >
              Inscription
            </Link>
          </Button>
        </div>
      </div>
      <div className="illustration">
      <img className="img-interface" src={chatInterface} alt='interface chat' />
      </div>
    </HomeDesignStyle>
  );
};

export default HomeDesign;
