import React from "react";
import imageLogo from "./static/logo.png";
import imageSpotify from "./static/spotify.png";
import './Home.css';
import './About';
import Modal from '@material-ui/core/Modal';
import { Helmet } from 'react-helmet';
  
function Home() {
  const [open, setOpen] = React.useState(false);
  const CLIENT_ID = "7e4ac27e10df469fa4de1530780b0a78"
  // const CLIENT_SECRET = "7cea836af1da44539cd839dcf44413d7"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  
  const RESPONSE_TYPE = "token"
  const handleClose = () => {
    setOpen(false);
  };
    
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Helmet><title>euphonics.io</title>
      </Helmet>
      <div id = "container">
        <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/>
        <a href = './about'>  <h3 id = "navigation">About</h3></a>
      </div>
<div id = "space">
      <h1 class ="title">euphonics.io</h1>
      <p>The Hip-Hop Mental Health Playlist Generator</p>

      <button id = "accessButton" type="button" 
       onClick={handleOpen}
      >
      
      <img src = {imageSpotify} alt = "spotify logo" height = {27} id = "spotify"/>
      <span><a href = {`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Access with Spotify</a></span>
      </button>

      <Modal
        onClose={handleClose}
        open={open}
        style={{
          position: 'absolute',
          backgroundColor: '#13081C',
          borderRadius: 15,
          padding: 3,
          color:'white',
          outline: 10,
          borderColor: 'white',
          border: '2px solid #983FE0',
          height:250,
          width: 500,
          margin: 'auto'
        }}>

        <h2>Username/Password</h2>
      </Modal>
      </div>
      <h3 id = 'foot' >© 2022 DEW</h3>
    </div>
  );
}

export default Home;