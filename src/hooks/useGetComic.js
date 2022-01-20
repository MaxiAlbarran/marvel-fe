import { useEffect, useState } from 'react';

const useGetComic = (id) => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getComics = async () => {
      try {
        const document = await fetch(
          `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?apikey=7489a7d4c2fd1b00acad64c61aa4355d`
        );
        const response = await document.json();
        setComics(response.data.results);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getComics();
  }, []);

  return [comics, loading];
};

export default useGetComic;
