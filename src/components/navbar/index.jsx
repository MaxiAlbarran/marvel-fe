import React from 'react';
import '../../styles/navbar.css';
import { Link } from 'react-router-dom';

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
        <Link to={'/searchCharacters'} className='item'>
          Characters
        </Link>
        <Link to={'/'} className='item'>
          Home
        </Link>
        <Link to={'/searchEvents'} className='item'>
          Events
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
