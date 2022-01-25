import React, { useEffect, useState } from 'react';
import CharactersCard from '../components/charactersCard';
import '../styles/characters.css';
import Loading from '../components/loading';
import useGetCharacters from '../hooks/useGetCharacters';
import Title from '../components/title';

const Home = () => {
  const [characters, loading] = useGetCharacters();

  if (loading) {
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
            <CharactersCard character={character} loading={loading} />
          ))}
        </div>
      </div>
    );
  }
};
export default Home;
