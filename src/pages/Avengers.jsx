import React, { useState, useEffect } from 'react';
import CharactersCard from '../components/charactersCard';
import useGetCharacterByName from '../hooks/useGetCharacterByName';

const Avengers = () => {
  const [name, setName] = useState('');
  const [character, loading] = useGetCharacterByName(name);

  console.log(character)

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(name)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={(e) => setName(e.target.value)} />
        <button type='submit'>OK</button>
      </form>

      <div className='characters-layout'>
        {character.map((character) => (
          <CharactersCard character={character} key={character.id} />
        ))}
      </div>
    </div>
  );
};

export default Avengers;
