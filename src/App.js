import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Comics from './pages/Comics';
import Navbar from './components/navbar';
import Avengers from './pages/Avengers';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home exact/>}/>
          <Route path='/comics/:id' element={<Comics exact/>}/>
          <Route path='/avengers/' element={<Avengers exact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
