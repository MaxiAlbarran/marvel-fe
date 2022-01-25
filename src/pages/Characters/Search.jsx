import React, { useState } from 'react';
import SearchInput from '../../components/search';
import useGetByName from '../../hooks/useGetByName';
import CharactersCard from '../../components/Characters/charactersCard';
import '../../styles/characters.css';
import Loading from '../../components/loading';

const Search = () => {
  const [name, setName] = useState('');

  const URL = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&apikey=7489a7d4c2fd1b00acad64c61aa4355d`
  const [character, searchChars, reload] = useGetByName(URL);

  if (reload) {
    return (
      <div className='characters-layout'>
        <Loading />
      </div>
    );
  } else {
    return (
      <div>
        <SearchInput placeholder="Search for a character" handleChange={setName} handleClick={searchChars} />
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
