import React from 'react';
import { useParams } from 'react-router-dom';
import useGetResponse from '../../hooks/useGetResponse';

const ComicsEvent = () => {
  const id = useParams().id

  const URL = `https://gateway.marvel.com:443/v1/public/events/${id}/comics?apikey=7489a7d4c2fd1b00acad64c61aa4355d`

  const [data, loading] = useGetResponse(URL)


  return(
    <div>
      Hola como estas
    </div>
  );
};

export default ComicsEvent;
