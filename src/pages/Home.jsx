import React, { useEffect, useState } from 'react';
import CharactersCard from '../components/charactersCard';
import '../styles/characters.css';
import Loading from '../components/loading';
import useGetCharacters from '../hooks/useGetCharacters';
import SearchInput from '../components/search';
import useGetCharacterByName from '../hooks/useGetCharacterByName';

const Home = () => {
  const [name, setName] = useState('');
  const [characters, loading] = useGetCharacters();
  const [character, searchChars] = useGetCharacterByName(name);

  if (character.length === 0 && name.length === 0)
    return (
      <div>
        <SearchInput handleChange={setName} handleClick={searchChars} />
        <div className='characters-layout'>
          {characters.map((character) => (
            <CharactersCard key={character.id} character={character} />
          ))}
        </div>
      </div>
    );
  else if (character.length === 0)
    return (
      <div>
        <SearchInput handleChange={setName} handleClick={searchChars} />
        <div className='characters-layout'>
          <Loading />
        </div>
      </div>
    );
  else if(character.length === 1) {
    return (
      <div>
        <SearchInput handleChange={setName} handleClick={searchChars} />
        <div className='characters-layout'>
          {character.map((item) => (
            <CharactersCard character={item} key={character.id} />
          ))}
        </div>
      </div>
    );
  }
};

export default Home;
