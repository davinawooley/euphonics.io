import React from "react";
import "./App.css";
// import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import imageLogo from './static/logo.png'
import imageSpotify from './static/spotify.png'

function Home() {
  return (
    <div>
     
    <h3 id = 'navigation'>About</h3>
<img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/>
    <h1 id = 'title'>euphonics.io</h1>
    <h2 id = 'subtitle'>The Hip-Hop Mental Health Playlist Generator</h2>
    <button id = 'accessButton' >
         <img src = {imageSpotify} alt = "spotify logo" height = {27} id = 'spotify'/>
         <span>Access with Spotify</span></button>

    <h6 id='footer'>© 2022 DEW</h6>

    </div>

  );

}
export default Home;

