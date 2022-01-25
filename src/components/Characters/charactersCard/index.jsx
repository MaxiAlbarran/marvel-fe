import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/characters.css';

const CharactersCard = ({ character }) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <Link to={'/character/' + character.id} className='character-link'>
          Learn more about this character!
        </Link>
        <Link to={'/comics/' + character.id} className='comic-link'>
          See his comics!
        </Link>
      </div>
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
