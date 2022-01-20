import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/characters.css';

const CharactersCard = ({ character }) => {
  return (
    <div className='card'>
      <div className='card-pr-body'>
        <img
          src={character.thumbnail.path + '.' + character.thumbnail.extension}
          alt='Imagen de protagonista'
          className='image'
        />
      </div>
      <div className='card-pr-footer'>
        <h4 className='title-text'>{character.name}</h4>
      </div>
    </div>
  );
};

export default CharactersCard;
