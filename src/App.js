import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Comics from './pages/Characters/Comics';
import Navbar from './components/navbar';
import Character from './pages/Characters/Character';
import Search from './pages/Characters/Search';
import Events from './pages/Event/Events';
import CharactersEvent from './pages/Event/CharactersEvent';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home exact/>}/>

          <Route path='/searchCharacters/' element={<Search exact/>}/>
          <Route path='/character/:id' element={<Character exact/>}/>
          <Route path='/comics/:id' element={<Comics exact/>}/>

          <Route path='/searchEvents/' element={<Events exact/>}/>
          <Route path='/charactersEvent/:id' element={<CharactersEvent exact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
