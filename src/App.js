import Home from "./Home";
import About from "./About";
import Error from "./Error";
import Emotions from "./Emotions";
import Playlist from "./Playlist";
import Load from "./Load";
// import Three from "./index";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element ={<Home />} />
        <Route path = "/about" element ={<About />} />
        <Route path = "/emotions" element ={<Emotions />} />
        <Route path = "/playlist" element ={<Playlist />} />
        <Route path = "/load" element ={<Load />} />
        <Route path = "*" element ={<Error />} />
    
    </Routes>
  </Router>
  
  );
}

export default App;

