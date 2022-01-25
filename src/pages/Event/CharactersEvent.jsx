import React from 'react';
import { useParams } from 'react-router-dom';
import useGetCharsEvent from '../../hooks/Events/useGetCharsEvent';
import CharactersCard from '../../components/Characters/charactersCard';
import Loading from '../../components/loading';

const CharactersEvent = () => {
  const id = useParams().id;
  const [characters, loading] = useGetCharsEvent(id);

  if (loading) {
    return (
      <div className='characters-layout'>
        <Loading />
      </div>
    );
  } else {
    return (
      <div className='characters-layout'>
        {characters.map((item) => (
          <CharactersCard character={item} />
        ))}
      </div>
    );
  }
};
export default CharactersEvent;
