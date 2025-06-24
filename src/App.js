import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './components/Home';
import About from './components/About';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className={`container mt-5 pt-5 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

