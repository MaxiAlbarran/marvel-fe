import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/characters.css';

const CharactersCard = ({ character }) => {
  return (
    <Link to={'comics/' + character.id}>
    <div className='card'>
      <img
        src={character.thumbnail.path + '.' + character.thumbnail.extension}
        alt='Imagen de protagonista'
        className='image'
      />
      <div className="title title-blur">
      <h4 className='title-text'>{character.name}</h4>

      </div>
    </div>
    </Link>
  );
};

export default CharactersCard;
