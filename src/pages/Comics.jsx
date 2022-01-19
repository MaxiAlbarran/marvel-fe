import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import ComicsCard from '../components/comicsCard';


const Comics = (props) => {

  const params = useParams();

  const [comics, setComics] = useState([])
  
  useEffect(()=>{
  const getComics = async () => {
    try {
      const document = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters/${params.id}/comics?apikey=7489a7d4c2fd1b00acad64c61aa4355d`
      );
      const response = await document.json();
      setComics(response.data.results);
    } catch (e) {
      console.log(e);
    }
  };
  getComics();
}, []);

  console.log(comics)

  return(
    <div>
      <div className="comics-layout">
        <ComicsCard />
      </div>
    </div>
  );
};

export default Comics;
