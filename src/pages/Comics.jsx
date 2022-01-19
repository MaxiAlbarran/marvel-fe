import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';


const Comics = (props) => {

  const params = useParams();

  const [comic, setComic] = useState([])
  
  useEffect(()=>{
  const getComics = async () => {
    try {
      const document = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters/${params.id}/comics?apikey=7489a7d4c2fd1b00acad64c61aa4355d`
      );
      const response = await document.json();
      console.log(response.data.results);
    } catch (e) {
      console.log(e);
    }
  };
  getComics();
}, []);

  return(
    <div>
      Hola como estas
    </div>
  );
};

export default Comics;
