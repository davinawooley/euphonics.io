import React from 'react';
import './Emotions.css';
import './About';
import './Home';
import './Load'
import imageLogo from './static/logo.png'
import imageSpotify from './static/spotify.png'
import { Helmet } from 'react-helmet';

export default function Emotions() {

  const handleClick = event => {

    event.currentTarget.style.backgroundColor = 'purple';
 
  };

    return (
   
      <div>
         <Helmet><title>euphonics.io</title>
        </Helmet>
         <div id = 'container'>
          <a href = './'><img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/></a>
          <a href = './about'><h3 id = 'navigation'>About</h3></a>
      </div>
      <div id = "center">
     
      <h1 id = 'title'>Select the <u>Emotions</u> that you would like your mix to provide perspective for.</h1>
      
      <button id = 'happiness' onClick={handleClick}> <img src = {imageSpotify} alt = "happiness" height = {27} id = 'spotify'/><span>Happiness</span></button>
      <button id = 'heartbreak' onClick={handleClick}> <img src = {imageSpotify} alt = "heartbreak" height = {27} id = 'spotify'/><span>Heartbreak</span></button>
      <button id = 'confusion' onClick={handleClick}> <img src = {imageSpotify} alt = "confusion" height = {27} id = 'spotify'/><span>Confusion</span></button>
      <button id = 'contempt' onClick={handleClick}> <img src = {imageSpotify} alt = "contempt" height = {27} id = 'spotify'/><span>Contempt</span></button>
      <button id = 'familyValues' onClick={handleClick}> <img src = {imageSpotify} alt = "Family Values" height = {27} id = 'spotify'/><span>Family Values</span></button>

      <button id = 'disappointment' onClick={handleClick}> <img src = {imageSpotify} alt = "disappointment" height = {27} id = 'spotify'/><span>Disappointment</span></button>
      <button id = 'stress' onClick={handleClick}> <img src = {imageSpotify} alt = "stress" height = {27} id = 'spotify'/><span>Stress</span></button>
      <button id = 'fear' onClick={handleClick}> <img src = {imageSpotify} alt = "fear" height = {27} id = 'spotify'/><span>Fear</span></button>
      <button id = 'jealousy' onClick={handleClick}> <img src = {imageSpotify} alt = "jealousy" height = {27} id = 'spotify'/><span>Jealousy</span></button>
      <button id = 'forgivenessReunion' onClick={handleClick}> <img src = {imageSpotify} alt = "forgiveness reunion" height = {27} id = 'spotify'/><span>Forgivness/Reunion</span></button>

      <button id = 'loneliness' onClick={handleClick}> <img src = {imageSpotify} alt = "loneliness" height = {27} id = 'spotify'/><span>Loneliness</span></button>
      <button id = 'love' onClick={handleClick}> <img src = {imageSpotify} alt = "love" height = {27} id = 'spotify'/><span>Love</span></button>
      <button id = 'sadness' onClick={handleClick}> <img src = {imageSpotify} alt = "sadness" height = {27} id = 'spotify'/><span>Sadness</span></button>
      <button id = 'selfCritism' onClick={handleClick}> <img src = {imageSpotify} alt = "self critism" height = {27} id = 'spotify'/><span>Self Critism</span></button>
      <button id = 'compassion' onClick={handleClick}> <img src = {imageSpotify} alt = "compassion" height = {27} id = 'spotify'/><span>Compassion</span></button>
    <a href = './Load'><h1 id = 'makeMix'>make my mix -></h1></a>
        <h6 id='footer'>© 2022 DEW</h6>
        </div>
        </div>
      );
    }