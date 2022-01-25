import React from 'react';
import '../../styles/presentation.css';

const CharacterPresentation = ({figure}) => {
  return (
    <div className='presentation-container'>
      <div className="header">
        <h4 className="title-header">{figure.name}</h4>
      </div>
      <div className='side-image'>
        <img
          src={figure.thumbnail.path + '.jpg'}
          alt='Character image'
          className='image'
        />
      </div>
      <div className='body-description'>
        <p className='description'>
          {figure.description}
        </p>
      </div>
    </div>
  );
};

export default CharacterPresentation;
