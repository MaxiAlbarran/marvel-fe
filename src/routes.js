import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Character from './pages/Characters/Character';
import Events from './pages/Event/Events';
import Comics from './pages/Characters/Comics';
import ComicsEvent from './pages/Event/ComicsEvent';
import Search from './pages/Characters/Search';
import CharactersEvent from './pages/Event/CharactersEvent';

const RoutesHandler = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home exact />} />

        <Route path='/searchCharacters/' element={<Search exact />} />
        <Route path='/character/:id' element={<Character exact />} />
        <Route path='/comics/:id' element={<Comics exact />} />

        <Route path='/searchEvents/' element={<Events exact />} />
        <Route path='/charactersEvent/:id' element={<CharactersEvent exact />} />
        <Route path='/comicsEvent/:id' element={<ComicsEvent exact />} />
      </Routes>
    </Router>
  );
};

export default RoutesHandler;
