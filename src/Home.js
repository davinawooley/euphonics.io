import React from "react";
import imageLogo from "./static/logo.png";
import imageSpotify from "./static/spotify.png";
import './Home.css';
import './About';
import Modal from '@material-ui/core/Modal';
  
function Home() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
    
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <div id = "container">
        <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/>
        <a href = './About'>  <h3 id = "navigation">About</h3></a>
      </div>

    <h1 id ="title">euphonics.io</h1>
    <p>The Hip-Hop Mental Health Playlist Generator</p>

    <button id = "accessButton" type="button" 
      onClick={handleOpen}
      >
          <img src = {imageSpotify} alt = "spotify logo" height = {27} id = "spotify"/>
      <span>Access with Spotify</span>
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
          }}
        >

        <h2>Username/Password</h2>
      </Modal>

       </div>
  );
}
export default Home;