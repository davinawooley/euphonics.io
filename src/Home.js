import logo from './logo.svg';
import './App.css';
import imageLogo from '../src/static/logo.png'

import { Button } from '@mui/material'
// import {} from '@material-ui/core'

function App() {
  return (
    <div className="App">
      

 <img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/>
 euphonics.io
    </div>
  );
}
function Navigation(){
  return(
    <div className = "Navigation">
    about
    </div>
    
  );}



function Main(){
  return(
    <div className = "Main">
  euphonics.io
  </div>
    
  );

}

export default App;

// Main();
// Navigation();

