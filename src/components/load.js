import React, {useState} from 'react';
import '../App.css';
import imageLogo from '../../src/static/logo.png'
import imageSpotify from '../../src/static/spotify.png'
import { Link } from "react-router-dom";
import MetaTags from 'react-meta-tags';

export default function App() {
    return (
      
      <div>
       
    <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logoLarge"/>
    <h2 id = 'subtitle'>Hold Tight.. 
    <br></br>
    we're creating your mix
    </h2>
      <h6 id='footer'>© 2022 DEW</h6>
      </div>
    );
  }
  