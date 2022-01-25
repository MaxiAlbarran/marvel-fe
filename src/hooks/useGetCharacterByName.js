import React, { useState, useEffect } from 'react';

const useGetCharacterByName = (name) => {
  const [character, setCharacter] = useState([]);
  const [reload, setReload] = useState(false)

  const searchChars = async () => {
    setCharacter([]);
    setReload(true)
    try {
      const document = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&apikey=7489a7d4c2fd1b00acad64c61aa4355d`
      );
      const response = await document.json();
      setCharacter(response.data.results);
      setReload(false)
    } catch (e) {
      console.log(e);
    }
  };
  return [character, searchChars, reload];
};

export default useGetCharacterByName;
