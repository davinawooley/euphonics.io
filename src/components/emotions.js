import React, {useState} from 'react';
import '../App.css';
import imageLogo from '../../src/static/logo.png'
import imageSpotify from '../../src/static/spotify.png'
import { Link } from "react-router-dom";
import MetaTags from 'react-meta-tags';

export default function App() {
    return (
      
      <div>
       <a><h3 id = 'navigation'>About</h3></a>
    <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logoLarge"/>
    <h1 id = 'title'>Select the <u>Emotions</u> that you would like your mix to provide perspective for.
    </h1>
    <a><button id = 'happiness'> <img src = {imageSpotify} alt = "happiness" height = {27} id = 'spotify'/><span>Happiness</span></button></a>
    <a><button id = 'heartbreak'> <img src = {imageSpotify} alt = "heartbreak" height = {27} id = 'spotify'/><span>Heartbreak</span></button></a>
    <a><button id = 'confusion'> <img src = {imageSpotify} alt = "confusion" height = {27} id = 'spotify'/><span>Confusion</span></button></a>
    <a><button id = 'contempt'> <img src = {imageSpotify} alt = "contempt" height = {27} id = 'spotify'/><span>Contempt</span></button></a>
    <a><button id = 'familyValues'> <img src = {imageSpotify} alt = "Family Values" height = {27} id = 'spotify'/><span>Family Values</span></button></a>
   

    <a><button id = 'disappointment'> <img src = {imageSpotify} alt = "disappointment" height = {27} id = 'spotify'/><span>Disappointment</span></button></a>
    <a><button id = 'stress'> <img src = {imageSpotify} alt = "stress" height = {27} id = 'spotify'/><span>Stress</span></button></a>
    <a><button id = 'fear'> <img src = {imageSpotify} alt = "fear" height = {27} id = 'spotify'/><span>Fear</span></button></a>
    <a><button id = 'jealousy'> <img src = {imageSpotify} alt = "jealousy" height = {27} id = 'spotify'/><span>Jealousy</span></button></a>
    <a><button id = 'forgivenessReunion'> <img src = {imageSpotify} alt = "forgiveness reunion" height = {27} id = 'spotify'/><span>Forgivness/Reunion</span></button></a>
   

    <a><button id = 'loneliness'> <img src = {imageSpotify} alt = "loneliness" height = {27} id = 'spotify'/><span>Loneliness</span></button></a>
    <a><button id = 'love'> <img src = {imageSpotify} alt = "love" height = {27} id = 'spotify'/><span>Love</span></button></a>
    <a><button id = 'sadness'> <img src = {imageSpotify} alt = "sadness" height = {27} id = 'spotify'/><span>Sadness</span></button></a>
    <a><button id = 'selfCritism'> <img src = {imageSpotify} alt = "self critism" height = {27} id = 'spotify'/><span>Self Critism</span></button></a>
    <a><button id = 'compassion'> <img src = {imageSpotify} alt = "compassion" height = {27} id = 'spotify'/><span>Compassion</span></button></a>
   
      <h6 id='footer'>© 2022 DEW</h6>
      </div>
    );
  }
  