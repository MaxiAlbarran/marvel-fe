import React from 'react';
import '../../styles/presentation.css';

const CharacterPresentation = () => {
  return (
    <div className='presentation-container'>
      <div className="header">
        <h4 className="title-header">3-D Man</h4>
      </div>
      <div className='side-image'>
        <img
          src='http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
          alt='Character image'
          className='image'
        />
      </div>
      <div className='body-description'>
        <p className='description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          voluptatum ipsa voluptate veniam magni et dolor nam quae? Odio,
          perferendis. Non, incidunt quo nesciunt vero, neque omnis nihil vitae
          odit facilis expedita magni repellendus magnam doloremque ullam
          possimus nam totam iure animi, aliquid tempora aut porro minima.
          Obcaecati, sequi nemo.
        </p>
      </div>
    </div>
  );
};

export default CharacterPresentation;
