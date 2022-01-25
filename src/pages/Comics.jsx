import React from 'react';
import { useParams } from 'react-router-dom';
import ComicsCard from '../components/comicsCard';
import Loading from '../components/loading';
import useGetComic from '../hooks/Characters/useGetComic';

const Comics = () => {
  const params = useParams().id;

  const [comics, loading] = useGetComic(params);

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

export default Comics;
