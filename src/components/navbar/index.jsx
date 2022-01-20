import React from 'react';
import '../../styles/navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img
        src='https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-4.png'
          alt='Logo marvel'
          className='logo-img'
        />
      </div>
      <div className='menu-container'>
        <a href='#' className='item'>
          Characters
        </a>
        <a href='#' className='item'>
          Creators
        </a>

        <a href='#' className='item'>
          Series
        </a>
      </div>
    </div>
  );
};

export default Navbar;
