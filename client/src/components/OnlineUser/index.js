import React from 'react';

import OnlineUserStyle from './OnlineUserStyle';

const OnlineUser = ({ username, picture }) => {
  
  return (
    <OnlineUserStyle>
      <div>
        <img className='avatar' src={picture} alt='profile' />
      </div>
      <div className='username'>
        {username}
      </div>
    </OnlineUserStyle>
  );
};

export default OnlineUser;
