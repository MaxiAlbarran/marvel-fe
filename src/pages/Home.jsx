import React, { useEffect, useState } from 'react';

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const document = await fetch(
          'https://gateway.marvel.com:443/v1/public/characters?apikey=7489a7d4c2fd1b00acad64c61aa4355d'
        );
        const response = await document.json();
        setCharacters(response.data.results);
        console.log(
          characters[0].thumbnail.path + '.' + characters[0].thumbnail.extension
        );
      } catch (e) {
        console.log(e);
      }
    };
    getCharacters();
  }, []);

  return (
    <div>
      <ul>
        {characters.map((character) => (
          <li>
            <img
              src={
                character.thumbnail.path + '.' + character.thumbnail.extension
              }
              alt='Imagen del personaje'
              style={{ height: '100px', width: '100px' }}
            />
            {character.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
