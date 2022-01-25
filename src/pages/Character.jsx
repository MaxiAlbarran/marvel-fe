import React from 'react';
import useShowCharacterById from '../hooks/useShowCharacterById';
import { useParams } from 'react-router-dom';
import CharactersCard from '../components/charactersCard';
import CharacterPresentation from '../components/characterPresentation';

const Character = () => {
  const params = useParams().id;


  const [character, loading] = useShowCharacterById(params)


  return(
    <div>
      <CharacterPresentation />
    </div>
  );
};

export default Character;
