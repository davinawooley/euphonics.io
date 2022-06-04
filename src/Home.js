import React from "react";
import imageLogo from "./static/logo.png";
import imageSpotify from "./static/spotify.png";
import './Home.css';
import './About';


function Home() {
  return (
    <div>
      <div id = "container">
   
      <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/>
      <a href = './About'>  <h3 id = "navigation">
    About</h3></a>



    </div>

   
    <h1 id ="title">euphonics.io</h1>
    <p>The Hip-Hop Mental Health Playlist Generator</p>
    <button id = "accessButton" >
         <img src = {imageSpotify} alt = "spotify logo" height = {27} id = "spotify"/>
         <span>Access with Spotify</span></button>


    <h6 id="footer">© 2022 DEW</h6>

    </div>

  );

}
export default Home;

