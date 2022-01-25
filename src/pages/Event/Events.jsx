import React, { useState } from 'react';
import SearchInput from '../../components/search';
import useGetByName from '../../hooks/useGetByName';
import EventsCard from '../../components/Events/eventsCard';
import '../../styles/characters.css';
import Loading from '../../components/loading';

const Events = () => {
  const [name, setName] = useState('');

  const URL = `https://gateway.marvel.com:443/v1/public/events?nameStartsWith=${name}&apikey=7489a7d4c2fd1b00acad64c61aa4355d`
  const [event, searchChars, reload] = useGetByName(URL);

  if (reload) {
    return (
      <div className='characters-layout'>
        <Loading />
      </div>
    );
  } else {
    return (
      <div>
        <SearchInput placeholder="Search for an event" handleChange={setName} handleClick={searchChars} />
        <div className='characters-layout'>
          {event.map((item) => (
            <EventsCard event={item} key={event.id} />
          ))}
        </div>
      </div>
    );
  }
};

export default Events;

