import React from 'react';
import './Load.css';
import imageLogo from '../src/static/logo.png';
import { Helmet } from 'react-helmet';

function Load() {
    return(
    <div>
    <Helmet><title>euphonics.io</title>
    </Helmet>
    <img src = {imageLogo} alt = "eupohonics logo" id  = "logoLarge"/>
    <h2 id = 'subtitleLoad'>Hold Tight.. 
    <br/>
    we're creating <div id = 'makePurple'>your mix</div>
    </h2>
    <a href = 'http://www.davinawooley.com' target = 'blank'><h6 id='footer'>© 2022 DEW</h6></a>
    </div>
    );
  }

export default Load;
  