import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/events.css'

const EventsCard = ({event}) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <Link to={'/character/' + event.id} className='characters-link'>
          Learn more about this event!
        </Link>
        <Link to={'/comics/' + event.id} className='comics-link'>
          See his comics!
        </Link>
      </div>
      <div className='card-pr-body'>
        <img
          src={event.thumbnail.path + '.' + event.thumbnail.extension}
          alt='Imagen de protagonista'
          className='image'
        />
      </div>
      <div className='card-pr-footer-event'>
        <h4 className='title-text'>{event.title}</h4>
      </div>
    </div>
  );
};

export default EventsCard;
