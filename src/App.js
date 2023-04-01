import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
