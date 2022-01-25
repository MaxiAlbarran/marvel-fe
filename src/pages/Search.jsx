import React, { useState } from 'react';
import SearchInput from '../components/search';
import useGetCharacterByName from '../hooks/Characters/useGetCharacterByName';
import CharactersCard from '../components/Characters/charactersCard';
import '../styles/characters.css';
import Loading from '../components/loading';

const Search = () => {
  const [name, setName] = useState('');
  const [character, searchChars, reload] = useGetCharacterByName(name);

  if (reload) {
    return (
      <div className='characters-layout'>
        <Loading />
      </div>
    );
  } else {
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

export default Search;
