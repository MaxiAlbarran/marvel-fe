import React from 'react';
import { useParams } from 'react-router-dom';
import CharactersCard from '../../components/Characters/charactersCard';
import Loading from '../../components/loading';
import useGetResponse from '../../hooks/useGetResponse';

const CharactersEvent = () => {
  const id = useParams().id;
  const URL = `https://gateway.marvel.com:443/v1/public/events/${id}/characters?limit=90&apikey=7489a7d4c2fd1b00acad64c61aa4355d`

  const [characters, loading] = useGetResponse(URL);

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
