import React from 'react';
import '../../styles/characters.css';

const CharactersCard = ({ character }) => {
  return (
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
  );
};

export default CharactersCard;
