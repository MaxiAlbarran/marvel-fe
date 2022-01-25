import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/events.css';

const EventsCard = ({ event }) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <Link to={'/charactersEvent/' + event.id} className='characters-link'>
          See the characters in this event!
        </Link>
        <Link to={'/comicsEvent/' + event.id} className='comics-link'>
          Checkout this comics!
        </Link>
      </div>
      <div className='card-pr-body'>
        <img
          src={event.thumbnail.path + '.' + event.thumbnail.extension}
          alt='Imagen de protagonista'
          className='picture'
        />
      </div>
      <div className='card-pr-footer-event'>
        <h4 className='title-text'>{event.title}</h4>
      </div>
    </div>
  );
};

export default EventsCard;
