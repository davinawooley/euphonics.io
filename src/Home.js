import React from "react";
import imageLogo from "./static/logo.png";
import imageSpotify from "./static/spotify.png";
import './Home.css';
import './About';
import { Helmet } from 'react-helmet';
import {Canvas} from 'react-three-fiber';
import ThreeJSHome from './ThreeJSHome';
import {OrbitControls} from "@react-three/drei";





function Home() {
  // const [open, setOpen] = React.useState(false);
  // spotify auth clid uri and auth endpoint
  const CLIENT_ID = "7e4ac27e10df469fa4de1530780b0a78"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  
  const RESPONSE_TYPE = "token"


  return (
    
    <div>
      <div id = "threeJS" style={{  width: `100%`, height: `100vh` }}>
        {/* <Canvas className = "canvas">
          <ThreeJSHome />
  <OrbitControls enableZoom = {false}/>
  <ambientLight intensity = {0.5}/>

 
  </Canvas> */}
  <ThreeJSHome />

</div>
<div id = "fullbody">

      {/* <Canvas><Box /></Canvas> */}
      <Helmet><title>euphonics.io</title>
      </Helmet>
      <div id = "container">
        <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/>
        <a href = './about'>  <h3 id = "navigation">About</h3></a>
      </div>
<div id = "space">


      <h1 class ="title">euphonics.io</h1>
      <p>The Hip-Hop Mental Health Playlist Generator</p>

      <button id = "accessButton" type="button">
      
      <img src = {imageSpotify} alt = "spotify logo" height = {27} id = "spotify"/>
      <span><a href = {`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Access with Spotify</a></span>
      </button>
      </div>
      <h3 id = 'foot' >© 2022 DEW</h3>
 
    </div>
    </div>

 
  );
}

export default Home;
