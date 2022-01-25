import React from 'react';
import Loading from '../../components/loading/index'
import { useParams } from 'react-router-dom';
import '../../styles/presentation.css';
import CharacterPresentation from '../../components/Characters/characterPresentation';
import useGetResponse from '../../hooks/useGetResponse';

const Character = () => {
  const id = useParams().id;

  const URL = `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=7489a7d4c2fd1b00acad64c61aa4355d`;

  const [character, loading] = useGetResponse(URL);

  if (loading)
    return (
      <div className='comics-layout'>
        <Loading />
      </div>
    );
  else
    return (
      <div className='presentation-layout'>
        {character.map((item) => (
          <CharacterPresentation figure={item} key={item.id} />
        ))}
      </div>
    );
};

export default Character;
