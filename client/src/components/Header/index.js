import React from 'react';
import { Link } from 'react-router-dom';
import reactLogo from './react-logo.svg';

//Style
import HeaderStyle from "./HeaderStyle";

const Header = () => {
  
  return (
    <HeaderStyle>
      <div className="title-div">
        <Link
          className="link"
          to="/"
        >
          <img className='logo' src={reactLogo} alt='react logo icon' />
        </Link>
        <h1 className="title">REACT APP MESSENGER</h1>
      </div>
    </HeaderStyle>
  );
};

export default Header;
