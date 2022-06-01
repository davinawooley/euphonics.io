import React from 'react';
import './Error.css';

import imageLogo from './static/logo.png'
import imageSpotify from './static/spotify.png'

function Error(){
    return(
        
    <div id = "divPosition"> 
        <img src = {imageLogo} alt = "eupohonics" height = {40} id  = "logo"/> 
        <h2 id="title">404<br></br>Error Page<br></br>Not Found</h2>
    </div>
  
  )
}
export default Error;