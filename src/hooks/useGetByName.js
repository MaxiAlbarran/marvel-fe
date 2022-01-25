import { useState } from 'react';

const useGetByName = (URL) => {
  const [character, setCharacter] = useState([]);
  const [reload, setReload] = useState(false);

  const searchChars = async () => {
    setCharacter([]);
    setReload(true);
    try {
      const document = await fetch(URL);
      const response = await document.json();
      setCharacter(response.data.results);
      setReload(false);
    } catch (e) {
      alert(e);
    }
  };
  return [character, searchChars, reload];
};

export default useGetByName;
