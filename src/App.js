import './App.css';
import Home from "./Home";
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element ={<Home />} />
        {/* <Route path = "/about" element ={<About />} />
        <Route path = "/emotions" element ={<Emotions />} />
        <Route path = "/playlist" element ={<Playlist />} />
        <Route path = "/load" element ={<Load />} />
        <Route path = "*" element ={<Error />} /> */}
    </Routes>
  </Router> 
  );
}

export default App;
