import React from 'react';
import './Playlist.css';
import imageLogo from '../src/static/logo.png'
import imageSpotify from '../src/static/spotify.png'
// import { Link } from "react-router-dom";
// import MetaTags from 'react-meta-tags';

function Playlist() {
    return (
       
      <div>
          <div id = 'container'>
   
   <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/>
   <h3 id = 'navigation'>
 About</h3>
 </div>
        <div id  = 'tableBody'>
          
    <h1 id = 'title'>* Rename Mix *</h1>
    <hr></hr>

    <table>
        <tr>
            <td> <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/></td>
            <td>Song 1 Title <br></br> Artist</td>
            <td>3:17</td>
        </tr>
        <tr>
            <td> <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/></td>
            <td>Song 1 Title <br></br> Artist</td>
            <td>3:17</td>
        </tr>
        <tr>
            <td> <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/></td>
            <td>Song 1 Title <br></br> Artist</td>
            <td>3:17</td>
        </tr>
        <tr>
            <td> <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/></td>
            <td>Song 1 Title <br></br> Artist</td>
            <td>3:17</td>
        </tr>
        <tr>
            <td> <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/></td>
            <td>Song 1 Title <br></br> Artist</td>
            <td>3:17</td>
        </tr>
        <tr>
            <td> <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/></td>
            <td>Song 1 Title <br></br> Artist</td>
            <td>3:17</td>
        </tr>
        <tr>
            <td> <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/></td>
            <td>Song 1 Title <br></br> Artist</td>
            <td>3:17</td>
        </tr>
        <tr>
            <td> <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/></td>
            <td>Song 1 Title <br></br> Artist</td>
            <td>3:17</td>
        </tr>
    </table>

    <button id = 'export'> <img src = {imageSpotify} alt = "export to spotify" height = {27}/><span>Export to Spotify</span></button>
   

  
      <h6 id='footer'>© 2022 DEW</h6>
      </div>
      </div>
     
    );
  }
  export default Playlist;