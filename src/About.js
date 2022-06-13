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
        <a href = './About'>   <h3 id = 'navigation'>About</h3></a>
      </div>




    <div className = 'bodyTop'>


    <h1 class ="title" id = 'space'>euphonics.io</h1>


    <div >

    <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logoBigLeft"/>
       </div>
       <span id = 'disclaimTitle'>OUR STORY</span>
    <h2 id = 'disclaim'>Euphonics.io implements an AI algorithms that analyzes user listening history and favorite artists to generate hip hop playlists. 
    <br/>
    Euphonics.io is a free web application that integrates with Spotify applications. 
    <br/>
    Euphonics.io is an application for the people. It is and will always be free. We do not store your personal information. 
    </h2>

<br/>
<br/>
<br/>
     <span id = 'disclaimTitle'>DISCLAIMER</span>
    
    <h2 id = 'disclaim'> Euphonics.io is not a substitution to receiving medical attention.<br/><br/> This application is meant to create personalized playlists to provide perspective to what users are navigating through to benefit users.</h2>
    </div>


    <div className = 'bodyTop'>

     <span id ='mhrTitle'>MENTAL HEALTH RESOURCES</span>
   
    <h2 id = 'disclaim'>    
    <a href = "https://suicidepreventionlifeline.org/"><u>National Suicide Prevention Hotline</u></a>
      <br/>1.800.273.8255
      <br/><br/>
      <a href = "https://www.thehotline.org/"><u>National Domestic Violence Hotline</u></a>
      <br/>1.800.799.7233
      <br/><br/>
      <a href = "https://gradresources.org/crisis/?gclid=Cj0KCQjwwJuVBhCAARIsAOPwGATJT0vpnOth2xwUyepNK3Z3Ckjuu8i3uGCay700pUeaih-Moy36o_4aAhLREALw_wcB"><u>National Grad Crisis Line</u></a>
      <br/>1.877.472.3457
      <br/><br/>
      <a href = "https://www.rainn.org/resources"><u>National Sexual Assault Hotline</u></a>
      <br/>1.800.656.4673
      <br/><br/>
      <a href = "https://www.samhsa.gov/find-help/national-helpline"><u>Substance Abuse and Mental Health Services Administration National Helpline</u> </a>
      <br/>1.800.662.4357
    </h2>
    </div>
 
    <a href = "mailto: feedback@euphonics.io"><h3 id = 'email'>Email: feedback@euphonics.io</h3></a>

    <a href = "https://www.davinawooley.com/"> <h3 id = 'foot2' >© 2022 DEW</h3></a>
    </div>
  );
}

export default About;