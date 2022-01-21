import React from 'react';
import useShowCharacterById from '../hooks/useShowCharacterById';
import { useParams } from 'react-router-dom';
import CharactersCard from '../components/charactersCard';

const Character = () => {
  const params = useParams().id;


  const [character, loading] = useShowCharacterById(params)


  return(
    <div>
      {character.map(figure => 
        <CharactersCard character={figure} />)}
    </div>
  );
};

export default Character;
