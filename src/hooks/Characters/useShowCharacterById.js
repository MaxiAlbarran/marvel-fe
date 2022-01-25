import { useEffect, useState } from 'react';

const useShowCharacterById = (id) => {

  const [character, setCharacter] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getCharacterById = async () => {
      try {
        const document = await fetch(
          `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=7489a7d4c2fd1b00acad64c61aa4355d`
        );

        const response = await document.json()
        setCharacter(response.data.results)        
        setLoading(false)
      } catch (e) {
        console.log(e);
      }
    };
    getCharacterById()
  }, []);

  return [character, loading]
};

export default useShowCharacterById;
