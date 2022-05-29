import React, {useState} from 'react';
import '../App.css';
import imageLogo from '../../src/static/logo.png'
import imageSpotify from '../../src/static/spotify.png'
import { Link } from "react-router-dom";

export default function App() {
  // const [count, setCount] = useState(0);
  return (
    
    <div>
     <a><h3 id = 'navigation'>About</h3></a>
     {/* <nav><Link to = '/about'>tst</Link></nav> */}
    <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/>
    
    <h1 id = 'title'>euphonics.io</h1>
    <h2 id = 'subtitle'>The Hip-Hop Mental Health Playlist Generator</h2>
    <a><button id = 'accessButton' > <img src = {imageSpotify} alt = "spotify logo" height = {27} id = 'spotify'/><span>Access with Spotify</span></button></a>
  <h6 id='footer'>© 2022 DEW</h6>
    </div>
  );
}


