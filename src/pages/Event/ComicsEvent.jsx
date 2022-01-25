import React from 'react';
import { useParams } from 'react-router-dom';
import useGetResponse from '../../hooks/useGetResponse';
import Loading from '../../components/loading';
import ComicsCard from '../../components/comicsCard';

const ComicsEvent = () => {
  const id = useParams().id;

  const URL = `https://gateway.marvel.com:443/v1/public/events/${id}/comics?apikey=7489a7d4c2fd1b00acad64c61aa4355d`;

  const [comics, loading] = useGetResponse(URL);

  if (loading)
    return (
      <div className='comics-layout'>
        <Loading />
      </div>
    );
  else {
    return (
      <div>
        <div className='comics-layout'>
          {comics.map((comic) => (
            <ComicsCard comic={comic} key={comic.id} />
          ))}
        </div>
      </div>
    );
  }
};

export default ComicsEvent;
