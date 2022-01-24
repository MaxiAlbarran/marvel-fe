import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Comics from './pages/Comics';
import Navbar from './components/navbar';
import Character from './pages/Character';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home exact/>}/>
          <Route path='/comics/:id' element={<Comics exact/>}/>
          <Route path='/character/:id' element={<Character exact/>}/>
          <Route path='/search/' element={<Search exact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
