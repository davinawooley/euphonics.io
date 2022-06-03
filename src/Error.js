import React from 'react';
import './Error.css';
import imageLogo from './static/logo.png'


function Error(){
    return(
        
      <div>
      <img src = {imageLogo} alt = "eupohonics logo" id  = "logoLarge"/>
    
      <h2 id="subtitle"><div id = "makePurple">404</div> Error<br></br> Page Not Found </h2>
   
 
        <h6 id='footer'>© 2022 DEW</h6>
        </div>




  
  )
}
export default Error;