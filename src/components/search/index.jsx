import React from 'react';
import '../../styles/search.css';

const SearchInput = () => {
  return (
    <div className='search-container'>
      <input type='text' placeholder='Search a character' className='search' />
      <button className='search-button'>Search</button>
    </div>
  );
};

export default SearchInput;
