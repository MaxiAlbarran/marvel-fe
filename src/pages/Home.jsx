import React from 'react';
import CharactersCard from '../components/Characters/charactersCard';
import EventsCard from '../components/Events/eventsCard';
import '../styles/characters.css';
import Loading from '../components/loading';
import useGetCharacters from '../hooks/Characters/useGetCharacters';
import Title from '../components/title';
import useGetEvents from '../hooks/Events/useGetEvents';

const Home = () => {
  const [characters, loading] = useGetCharacters();
  const [events, loadingEvents] = useGetEvents();

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
