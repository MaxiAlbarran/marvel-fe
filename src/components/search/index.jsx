import React from 'react';
import '../../styles/search.css';

const SearchInput = ({handleChange, handleClick}) => {
  return (
    <div className='search-container'>
      <input type='text' placeholder='Search a character' className='search' onChange={(e)=> handleChange(e.target.value)} />
      <button type="button" onClick={handleClick} className='search-button'>Search</button>
    </div>
  );
};

export default SearchInput;
