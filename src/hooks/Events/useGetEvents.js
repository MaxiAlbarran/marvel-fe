import {useEffect, useState} from 'react';

const useGetEvents = () => {
  
  const [events, setEvents] = useState([]);
  const [loadingEvents, setLoadingEvents] = useState(true);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const document = await fetch(
          'https://gateway.marvel.com:443/v1/public/events?limit=6&apikey=7489a7d4c2fd1b00acad64c61aa4355d'
        );
        const response = await document.json();
        setEvents(response.data.results)
        setLoadingEvents(false);
      } catch (e) {
        console.log(e);
      }
    };
    getCharacters();
  }, []);

  return [events, loadingEvents];
};

export default useGetEvents;
