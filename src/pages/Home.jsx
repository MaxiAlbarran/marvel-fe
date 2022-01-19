import React, { useEffect, useState } from 'react';
import CharactersCard from '../components/charactersCard';
import '../styles/characters.css'

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const document = await fetch(
          'https://gateway.marvel.com:443/v1/public/characters?apikey=7489a7d4c2fd1b00acad64c61aa4355d'
        );
        const response = await document.json();
        setCharacters(response.data.results);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getCharacters();
  }, []);

  if (loading) return <div>Loading...</div>;
  else {
    return (
      <div>
        <div
          className='characters-layout'
         
        >
          {characters.map((character) => (
            <CharactersCard key={character.id} character={character} />
          ))}
        </div>
      </div>
    );
  }
};

export default Home;
