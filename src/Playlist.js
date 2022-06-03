import React from 'react';
import './Playlist.css';
import imageLogo from '../src/static/logo.png'
import imageSpotify from '../src/static/spotify.png'
// import { Link } from "react-router-dom";
// import MetaTags from 'react-meta-tags';

function Playlist() {
    return (
      
        <div id  = 'tableBody'>
            {/* style="height:100px;overflow:auto;" */}
            <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/>
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
     
    );
  }
  export default Playlist;