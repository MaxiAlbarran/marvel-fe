import React from 'react';
import CharactersCard from '../components/Characters/charactersCard';
import EventsCard from '../components/Events/eventsCard';
import '../styles/characters.css';
import Loading from '../components/loading';
import Title from '../components/title';
import useGetResponse from '../hooks/useGetResponse';

const Home = () => {

  const URLCHARS = 'https://gateway.marvel.com:443/v1/public/characters?limit=6&apikey=7489a7d4c2fd1b00acad64c61aa4355d';
  const URLEVENTS = 'https://gateway.marvel.com:443/v1/public/events?limit=6&apikey=7489a7d4c2fd1b00acad64c61aa4355d';

  const [characters, loading] = useGetResponse(URLCHARS);
  const [events, loadingEvents] = useGetResponse(URLEVENTS);
  

  if (loading + loadingEvents !== 0) {
    return (
      <div className='characters-layout'>
        <Loading />
      </div>
    );
  } else {
    return (
      <div>
        <Title title='Welcome to my MARVEL App' />
        <div className='characters-layout'>
          {characters.map((character) => (
            <CharactersCard character={character} />
          ))}
          {events.map((event) => (
            <EventsCard event={event} />
          ))}
        </div>
      </div>
    );
  }
};
export default Home;
