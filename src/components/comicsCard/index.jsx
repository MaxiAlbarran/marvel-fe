import React from 'react';
import '../../styles/comics.css';

const ComicsCard = () => {
  return (
    <div className='comic-card'>
      <div className='cover-comic-card'>
        <img
          src='http://i.annihil.us/u/prod/marvel/i/mg/b/80/4f206cc0ac28a.jpg'
          alt='Imagen del comic'
          className='cover-image'
        />
      </div>
      <div className='presentation-comic-card'>
        <div className='presentation-header'>
          <h3 className='header-title'>Deadpool (1997) #44</h3>
        </div>
        <div className='presentation-section'>
          <p className='section-description'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            officia aperiam placeat quis odit iusto nesciunt asperiores enim
            soluta laudantium rem hic maiores porro, aspernatur totam, eaque ea
            a ducimus illum. Iure, voluptatibus at quae beatae cum maxime
            voluptate consequuntur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComicsCard;
