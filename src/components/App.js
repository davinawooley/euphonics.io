import React from 'react';
import '../App.css';
// import About from './About'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import imageLogo from '../../src/static/logo.png';
import imageSpotify from '../../src/static/spotify.png';

export default function App() {
  return (
    // <Router>
      <div>
        {/* <Link to="./About">Home</Link> */}
        <h3 id = 'navigation'>About</h3>
  
      <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/>
      <h1 id = 'title'>euphonics.io</h1>
      <h2 id = 'subtitle'>The Hip-Hop Mental Health Playlist Generator</h2>
      <a><button id = 'accessButton' > <img src = {imageSpotify} alt = "spotify logo" height = {27} id = 'spotify'/><span>Access with Spotify</span></button></a>

      <h6 id='footer'>© 2022 DEW</h6>
{/* 
      <Switch>
          <Route path='About'>
            <About/>
          </Route>
      </Switch> */}
      </div>
    /* </Router> */
  );
}