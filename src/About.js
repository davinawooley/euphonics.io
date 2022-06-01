import React from 'react';
import './App.css';
// import Home from './Home'
import imageLogo from './static/logo.png'
import imageSpotify from './static/spotify.png'

function About() {
  return (
    
    <div>
     <a><h3 id = 'navigation'>About</h3></a>

    {/* <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/> */}
    
      <iframe
        src="https://www.youtube.com/embed/E7wJTI-1dvQ"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />{" "}
    
    {/* <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logoLarge"/> */}
    {/* <a><button id = 'accessButton' > <img src = {imageSpotify} alt = "spotify logo" height = {27} id = 'spotify'/><span>Our Story</span></button></a> */}
    {/* <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/> */}
    <h1 id = 'title'>euphonics.io</h1>
    <h2 id = 'subtitle'>Euphonics.io implements an AI algorithms that analyzes user listening history and favorite artists to generate hip hop playlists. 
    <br></br>
    Euphonics.io is a free web application that integrates with Spotify applications. 
    <br></br>
    Euphonics.io is an application for the people. It is and will always be free. We do not store your personal information. 
    </h2>
    

    {/* <a><button id = 'accessButton' > <img src = {imageSpotify} alt = "spotify logo" height = {27} id = 'spotify'/><span>DISCLAIMER</span></button></a> */}
    <h2 id = 'subtitle'> Euphonics.io is not a substitution to receiving medical attention. This application is meant to create personalized playlists to provide perspective to what users are navigating through to benefit users.</h2>
    
    {/* <a><button id = 'accessButton' > <img src = {imageSpotify} alt = "spotify logo" height = {27} id = 'spotify'/><span>MENTAL HEALTH RESOURCES</span></button></a> */}
    
    <h2 id = 'subtitle'>    
      National Suicide Prevention Hotline 
      <br></br>1.800.273.8255
      <br></br><br></br>
      National Suicide Prevention Lifeline (for Deaf and Hard of Hearing)
      <br></br>
      For TTY Users: Use your preferred relay service or dial 711 then 1.800.273.8255
      <br></br>
      National Domestic Violence Hotline 
      <br></br>1.800.799.7233
      <br></br><br></br>
      National Grad Crisis Line 
      <br></br>1.877.472.3457
      <br></br><br></br>
      National Sexual Assault Hotline 
      <br></br>1.800.656.4673
      <br></br><br></br>
      National Suicide Prevention Lifeline 
      <br></br>1.800.273.8255
      <br></br><br></br>
      Substance Abuse and Mental Health Services Administration National Helpline 
      <br></br>1.800.662.4357
    </h2>

    <h2  id = 'subtitle' >Email: feedback@euphonics.io</h2>
    <h2  id = 'subtitle' >© 2022 DEW</h2>
    </div>
  );
}

export default About;