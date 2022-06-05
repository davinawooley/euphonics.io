import React from 'react';
import './Load.css';
import imageLogo from '../src/static/logo.png'


function Load() {
    return (
    <div>
    <img src = {imageLogo} alt = "eupohonics logo" id  = "logoLarge"/>
    <h2 id = 'subtitle'>Hold Tight.. 
    <br/>
    we're creating <div id = 'makePurple'>your mix</div>
    </h2>
      <h6 id='footer'>© 2022 DEW</h6>
      </div>
    );
  }

export default Load;
  