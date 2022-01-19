import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Comics from './pages/Comics';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home exact/>}/>
          <Route path='/comics/:id' element={<Comics exact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
