import React from 'react';
import './Error.css';

import imageLogo from './static/logo.png'

function Error(){
    return(
        
    <div id = "divPosition"> 
        <img src = {imageLogo} alt = "eupohonics" height = {40} id  = "logo"/> 
        <h2 id="title"><div id = "makePurple">404</div> Error<br></br> Page Not Found </h2>
    </div>
  
  )
}
export default Error;