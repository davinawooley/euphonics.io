import React from 'react';
import './Playlist.css';
import imageLogo from '../src/static/logo.png'
import imageSpotify from '../src/static/spotify.png'
// import { Link } from "react-router-dom";
// import MetaTags from 'react-meta-tags';

export default function  Playlist() {
    return (
      
        <div style="height:100px;overflow:auto;">

       <a><h3 id = 'navigation'>About</h3></a>
       <a><h3 id = 'logout'>Logout</h3></a>
    <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logoLarge"/>
    <h1 id = 'title'>* Rename Mix *</h1>
    <hr></hr>

    <table>
        <tr>
            <td> <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logoLarge"/></td>
            <td>Song 1 Title <br></br> Artist</td>
            <td>3:17</td>
        </tr>
        <tr>
            <td> <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logoLarge"/></td>
            <td>Song 1 Title <br></br> Artist</td>
            <td>3:17</td>
        </tr>
        <tr>
            <td> <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logoLarge"/></td>
            <td>Song 1 Title <br></br> Artist</td>
            <td>3:17</td>
        </tr>
        <tr>
            <td> <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logoLarge"/></td>
            <td>Song 1 Title <br></br> Artist</td>
            <td>3:17</td>
        </tr>
        <tr>
            <td> <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logoLarge"/></td>
            <td>Song 1 Title <br></br> Artist</td>
            <td>3:17</td>
        </tr>
        <tr>
            <td> <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logoLarge"/></td>
            <td>Song 1 Title <br></br> Artist</td>
            <td>3:17</td>
        </tr>
        <tr>
            <td> <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logoLarge"/></td>
            <td>Song 1 Title <br></br> Artist</td>
            <td>3:17</td>
        </tr>
        <tr>
            <td> <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logoLarge"/></td>
            <td>Song 1 Title <br></br> Artist</td>
            <td>3:17</td>
        </tr>
    </table>

    <a><button id = 'export'> <img src = {imageSpotify} alt = "export to spotify" height = {27} id = 'export'/><span>Export to Spotify</span></button></a>
   
      <h6 id='footer'>© 2022 DEW</h6>
      </div>
    );
  }
  