import React from 'react';
import './Playlist.css';
import imageLogo from '../src/static/logo.png'
import imageSpotify from '../src/static/spotify.png'
import './About';
import './Home';
import { Helmet } from 'react-helmet';


function Playlist() {
    return (
       
      <div>
      <Helmet><title>euphonics.io</title>
      </Helmet>
    <div id = 'container'>
      <a href = './'>
        <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/></a>
        <a href = './about'>   <h3 id = 'navigation'>About</h3></a>
      </div>
         
        <div id  = 'tableBody'>
          
    <h1 id = 'title'>* Rename Mix *</h1>
    <hr></hr>

    <table>
        <tr>
            <td> <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/></td>
            <td className = "title2">Song 1 Title <br/> <div id = "artist">Artist</div></td>
            <td>3:17</td>
        </tr>
       
        <tr>
            <td> <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/></td>
            <td className = "title2">Song 2 Title <br/>  <div id = "artist">Artist</div></td>
            <td>3:17</td>
        </tr>

        <tr>
            <td> <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/></td>
            <td className = "title2">Song 3 Title <br/>  <div id = "artist">Artist</div></td>
            <td>3:17</td>
        </tr>

        <tr>
            <td> <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/></td>
            <td className = "title2">Song 4 Title <br/>  <div id = "artist">Artist</div></td>
            <td>3:17</td>
        </tr>

        <tr>
            <td> <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/></td>
            <td className = "title2">Song 5 Title <br/>  <div id = "artist">Artist</div></td>
            <td>3:17</td>
        </tr>
    </table>

        <button id = "exportButton" >
         <img src = {imageSpotify} alt = "spotify logo" height = {27} id = "spotify"/>
         <span>Export to Spotify</span></button>

      </div>
      <h6 id  = "foot" >© 2022 DEW</h6>
      </div>
    );
  }
  export default Playlist;