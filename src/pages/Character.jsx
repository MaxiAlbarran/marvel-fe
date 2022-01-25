import React from 'react';
import useShowCharacterById from '../hooks/useShowCharacterById';
import { useParams } from 'react-router-dom';
import CharactersCard from '../components/charactersCard';
import '../styles/presentation.css'
import CharacterPresentation from '../components/characterPresentation';

const Character = () => {
  const params = useParams().id;


  const [character, loading] = useShowCharacterById(params)

  console.log(character)


  return(
    <div className='presentation-layout'>
      {character.map(item=>
        <CharacterPresentation figure={item} key={item.id}/>)}
    </div>
  );
};

export default Character;
