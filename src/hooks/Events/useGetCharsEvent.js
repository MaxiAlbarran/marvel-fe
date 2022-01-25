import { useState, useEffect } from 'react';

const useGetCharsEvent = (id) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const document = await fetch(
          `https://gateway.marvel.com:443/v1/public/events/${id}/characters?limit=90&apikey=7489a7d4c2fd1b00acad64c61aa4355d`
        );
        const response = await document.json();
        setCharacters(response.data.results);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getCharacters();
  }, []);

  return [characters, loading];
};
export default useGetCharsEvent;
