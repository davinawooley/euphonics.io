
import "./App.css";
import About from "./About";
import Error from "./Error";
import Emotions from "./Emotions";
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./Home";

function App() {
  return (
  
    <Router>
    {/* <nav>
      <Link to = "/about">About</Link>
      <Link>Home</Link>
    </nav> */}
    <Routes>
      <Route path = "/home" element ={<Home />} />
      <Route path = "/about" element ={<About />} />
      <Route path = "/emotions" element ={<Emotions />} />
      <Route path = "*" element ={<Error />} />


    </Routes>
  </Router> 

  );

}
export default App;

