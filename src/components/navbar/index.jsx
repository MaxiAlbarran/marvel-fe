import React from 'react';
import '../../styles/navbar.css';

const Navbar = () => {
  return (
    <div className='menu-container'>
      <ul className='container-items'>
        <li className='items'>Characters</li>
        <li className='items'>Creators</li>
        <li className='items'>Series</li>
      </ul>
    </div>
  );
};

export default Navbar;
