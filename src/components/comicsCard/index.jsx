import React from 'react';
import '../../styles/comics.css';

const ComicsCard = ({ comic }) => {

  const isDescription = (text, title) => {
    if (text === null) {
      return <h1>{title}</h1>;
    } else {
      return text;
    }
  };

  return (
    <div className='comic-card'>
      <div className='cover-comic-card'>
        <img
          src={comic.thumbnail.path + '.' + comic.thumbnail.extension}
          alt='Comic'
          className='cover-image'
        />
      </div>
      <div className='presentation-comic-card'>
        <div className='presentation-header'>
          <h3 className='header-title'>{comic.title}</h3>
        </div>
        <div className='presentation-section'>
          <p className='section-description'>
            {isDescription(comic.description, comic.title)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComicsCard;
