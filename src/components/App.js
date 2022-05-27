import React, {useState} from 'react';
import '../App.css';
import imageLogo from '../../src/static/logo.png'

export default function App() {
  const [count, setCount] = useState(0);
  return (
    
    <div>
     <a><h3 id = 'navigation'>About</h3></a>
    <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/>
    
    <h1 id = 'title'>euphonics.io</h1>
    <h2 id = 'subtitle'>The Hip-Hop Mental Health Playlist Generator</h2>
    <button id = 'accessButton'> <img src = {imageLogo} alt = "eupohonics logo" height = {40}/>
    <h6 id='footer'>© 2022 DEW</h6>
  Access with Spotify</button>
    </div>
  );
}


