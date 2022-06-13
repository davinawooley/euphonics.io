import React from 'react';
import './Home';
import './About.css';
import imageLogo from './static/logo.png';

import { Helmet } from 'react-helmet';

function About() {
  return (
    
    <div>
      <Helmet><title>euphonics.io</title>
        </Helmet>
   
      <div id = 'container'>
      <a href = './'>
        <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/></a>
        <h3 id = 'navigation'>About</h3>
      </div>

    <h1 id = 'title'>euphonics.io</h1>
    <div className = 'bodyTop'>
    <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logoBigLeft"/>
       

  
  
    <button id = 'accessButtonD' > <img src = {imageLogo} alt = "euphonics logo" height = {27} id = 'spotify'/><span>Our Story</span></button>
   
    <h2 id = 'intro'>Euphonics.io implements an AI algorithms that analyzes user listening history and favorite artists to generate hip hop playlists. 
    <br/>
    Euphonics.io is a free web application that integrates with Spotify applications. 
    <br/>
    Euphonics.io is an application for the people. It is and will always be free. We do not store your personal information. 
    </h2>
    <br/>
    <br/>
    </div>

    <div className = 'bodyTop'>
     <span id = 'disclaimTitle'>DISCLAIMER</span>
    
    <h2 id = 'disclaim'> Euphonics.io is not a substitution to receiving medical attention. This application is meant to create personalized playlists to provide perspective to what users are navigating through to benefit users.</h2>
    </div>


    <div className = 'bodyTop'>

     <span id ='mhrTitle'>MENTAL HEALTH RESOURCES</span>
   
    <h2 id = 'disclaim'>    
      <u>National Suicide Prevention Hotline</u>
      <br/>1.800.273.8255
      <br/><br/>
      <u>National Suicide Prevention Lifeline (for Deaf and Hard of Hearing)</u>
      <br/>
      For TTY Users: Use relay service or dial 711 then 1.800.273.8255
      <br/><br/>
      <u>National Domestic Violence Hotline</u>
      <br/>1.800.799.7233
      <br/><br/>
      <u>National Grad Crisis Line</u>
      <br/>1.877.472.3457
      <br/><br/>
      <u>National Sexual Assault Hotline</u>
      <br/>1.800.656.4673
      <br/><br/>
      <u>National Suicide Prevention Lifeline </u>
      <br/>1.800.273.8255
      <br/><br/>
      <u>Substance Abuse and Mental Health Services Administration National Helpline</u> 
      <br/>1.800.662.4357
    </h2>
    </div>
 
    <a href = "mailto: abc@example.com"><h3 id = 'email'>Email: feedback@euphonics.io</h3></a>

    <h3 id = 'foot2' >© 2022 DEW</h3>
    </div>
  );
}

export default About;