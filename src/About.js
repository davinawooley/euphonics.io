import React from 'react';
import './About.css';
import imageLogo from './static/logo.png'
import imageSpotify from './static/spotify.png'

function About() {
  return (
    
    <div>

<div id = 'container'>
   
   <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/>
   <h3 id = 'navigation'>
 About</h3>
 </div>
<div id = 'centerVid'>
     <iframe
   
   src="http://www.youtube.com/watch?v=nuPZUUED5uk"
   frameBorder="0"
   allow="autoplay; encrypted-media"
   allowFullScreen
   title="video"
 />{" "}

</div>

    {/* <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/> */}
   
 

    <h1 id = 'title'>euphonics.io</h1>
    <div class = 'bodyTop'>
    <a><button id = 'accessButtonD' > <img src = {imageLogo} alt = "euphonics logo" height = {27} id = 'spotify'/><span>Our Story</span></button></a>

    <h2 id = 'intro'>Euphonics.io implements an AI algorithms that analyzes user listening history and favorite artists to generate hip hop playlists. 
    <br></br>
    Euphonics.io is a free web application that integrates with Spotify applications. 
    <br></br>
    Euphonics.io is an application for the people. It is and will always be free. We do not store your personal information. 
    </h2>
    <br></br>
    <br></br>
    </div>

    <div class = 'bodyTop'>
    <a><button id = 'accessButtonD' > <img src = {imageSpotify} alt = "spotify logo" height = {27} id = 'spotify'/><span>DISCLAIMER</span></button></a>
   
  
    <h2 id = 'disclaim'> Euphonics.io is not a substitution to receiving medical attention. This application is meant to create personalized playlists to provide perspective to what users are navigating through to benefit users.</h2>
    </div>





    <div class = 'bodyTop'>
    <a><button id = 'accessButtonD' > <img src = {imageSpotify} alt = "spotify logo" height = {27} id = 'spotify'/><span>MENTAL HEALTH RESOURCES</span></button></a>
   
   
    <h2 id = 'disclaim'>    
      National Suicide Prevention Hotline 
      <br></br>1.800.273.8255
      <br></br><br></br>
      National Suicide Prevention Lifeline (for Deaf and Hard of Hearing)
      <br></br>
      For TTY Users: Use relay service or dial 711 then 1.800.273.8255
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
    </div>
    


 
    <h3 id = 'title2'>Email: feedback@euphonics.io</h3>




    <h3 id = 'title2' >© 2022 DEW</h3>
    </div>
  );
}

export default About;