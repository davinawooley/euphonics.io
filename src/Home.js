import React from 'react';
import imageLogo from './static/logo.png';
import imageSpotify from './static/spotify.png';
import './Home.css';
import './About';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import ThreeJSHome from './ThreeJSHome';
import {useEffect, useState} from 'react';
// BQC7VT6159snvCcqxHms3iPdlVaajO5E7nlWpa3mx8abbnW4Ifyn_ZaIprShqIrpwr5EQsvQEGBislhY3nXyeowrIsHsDaEkrjWxO5Ql5hkYn5cSq2HFTMiGUM1eU-fMgj0b8Yrho-X-U7y4QRQlTEdOo_H7wEfFl1x1m_Lv1RIcS84EI4WQWcEP8PTOtKQPqiYL&token_type=Bearer&expires_in=3600
function Home() {

  const CLIENT_ID = "7e4ac27e10df469fa4de1530780b0a78"
  const REDIRECT_URI = "http://euphonics.io/emotions"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
const [token, setToken] = useState("")
const [searchKey, setSearchKey] = useState("")
const [artists, setArtists] = useState([])



useEffect(()=>{
  const hash = window.location.hash
  let token =window.localStorage.getItem("token")
  if(!token && hash){
    token = hash.substring(1).split("&").find(elem=> elem.startsWith("access_token")).split("=")[1]
    window.location.hash = ""
    window.localStorage.setItem("token", token)
   
  }
  setToken(token)
},[])


const logout = ()=>{
  setToken("")
  window.localStorage.removeItem("token")
}

const searchArtists= async(e)=>{
  e.preventDefault()
  const {data} = await axios.get("https://api.spotify.com/v1/search", {
    headers:{Authorization:`Bearer ${token}`},
    params: {
      q: searchKey, 
      type: "artist"
    }
  })
  setArtists(data.artists.items)
}

// const renderArtists = () =>{
//   return artists.map(artist => (
//     <div key = {artist.id}>
// {artist.images.length ? <img width ={"50%"} src = {artist.images[0].url} alt="" /> : <div>No image available</div>}
//       {artist.name}
//       </div>
//   ))
// }

  return (
    <div>


      <div id = "threeJS" style={{  width: `100%`, height: `100vh` }}>
      
  <ThreeJSHome />

</div>
<div id = "fullbody">
      <Helmet><title>euphonics.io</title>
      </Helmet>

      <div id = "container">
      <a href = './'><img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo" /></a>
      
        <a href = './about'>  <h3 id = "navigation">About</h3></a>
       
      </div>
<div id = "space">

      <h1 class ="title">euphonics.io</h1>
      <p>The Hip-Hop Mental Health Playlist Generator</p>
      <div id = "centerButton">
        {/* {!token ? 
      <a href = {`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}> login
      </a>
      :<button onClick = {logout}>logout</button>}

      {!token ? 
      <form onSubmit={searchArtists}> 
        <input type = "text" onChange = {e=> setSearchKey(e.target.value)}/>
      <button type = {"submit"}>Search</button>
        </form>
        :<h2>Please login</h2>
        }

        {renderArtists()} */}
      
      
      <a href = {`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
      <button id = "accessButton" type="button">

      <img src = {imageSpotify} alt = "spotify logo" height = {27} id = "spotify"/>
      <span>Access with Spotify</span>
     
      </button>
      </a>
      </div>
      </div>
      <a href = 'http://www.davinawooley.com' target = 'blank'><h3 id = 'foot' >© 2022 DEW</h3></a>
 
    </div>
    </div>

 
  );
}

export default Home;
