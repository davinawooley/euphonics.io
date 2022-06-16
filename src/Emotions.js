import React, {useState} from 'react';
import './Emotions.css';
import './About';
import './Home';
import './Load';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import imageLogo from './static/logo.png'
import { Helmet } from 'react-helmet';
import ReactTooltip from 'react-tooltip';
import { Box, Button } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";

// function handleClick(e) {
//    e.preventDefault();
//    console.log('The link was clicked.');
//  };




 const StyledButton = withStyles(() => ({
  root: {
    marginRight: "2.5%",
    marginBottom: "2rem",
    width: "250px",
    border: "1px solid #983FE0",
    padding: "30px",
    fontSize: "14pt",
    color: "white",
    backgroundColor : "black",
    fontWeight: "300",
    textTransform: "capitalize"
  }
}))(Button);

const useStyles = makeStyles(() => ({
  buttonContainerWrapper: {
    display: "flex",

    justifyContent: "center"
  },

  lastButtonFilter: {
    marginRight: "0rem"
  },
  activeButton: {
    background: "#7330ab",
    color: "#fff"
  }
}));




export default function Emotions() {
  
  const classes = useStyles();
  const [activeButton, setActiveButton] = useState(false);

  const clickedButtonHandler = (name) => {
    setActiveButton(name);
  };

  const buttons = ["Happiness", "Heartbreak", "Confusion", "Contempt", "Family" , "Disappointment" ,"Stress" ,"Fear" ,"Jealousy" ,"Forgiveness", "Loneliness", "Love" , "Sadness" ,"Self Criticism",  "Compassion"];


    return (
   
      <div>




         <Helmet><title>euphonics.io</title>
        </Helmet>
      <div id = 'container'>
          <a href = './'><img src = {imageLogo} alt = "eupohonics logo" height = {40} id  = "logo"/></a>
          <a href = './about'><h3 id = 'navigation'>About</h3></a>
      </div>
      <div id = "center">
     
      <h1 id = 'title'>Select the <u>Emotion</u> that you would like your mix to provide perspective for.</h1>
           
      <div>

{/* <Container className={classes.buttonContainerWrapper}> */}

<Box className={classes.buttonContainer}>
        {buttons.map((name) => (
          <StyledButton
            name={name}
            className={activeButton === name ? `${classes.activeButton}` : ""}
            onClick={() => clickedButtonHandler(name)}
          >
            {name}
          </StyledButton>
        ))}
      </Box>


    {/* </Container> */}

      {/* <button data-tip data-for="registerTip" id = 'happiness' >  */}
        {/* <span>Happiness</span></button> */}
     
    
        {/* <button id = 'heartbreak' onClick={handleClick}> */}
 



{/* 
<img src = {imageSpotify} alt = "confusion" height = {27} id = 'spotify'/> 
 <span>Heartbreak</span></button>

<button id = 'confusion' onClick={handleClick}>
<p data-tip="hello world"></p>
 <img src = {imageSpotify} alt = "confusion" height = {27} id = 'spotify'/>
 <span>Confusion</span></button>


<button id = 'contempt' onClick={handleClick}>
 <img src = {imageSpotify} alt = "contempt" height = {27} id = 'spotify'/>
 <span>Contempt</span></button>


<button id = 'familyValues' onClick={handleClick}>
<span>Family Values</span> </button>


<button id = 'disappointment' onClick={handleClick}>
 <img src = {imageSpotify} alt = "disappointment" height = {27} id = 'spotify'/>
 <span>Disappointment</span></button>


<button id = 'stress' onClick={handleClick}>
<img src = {imageSpotify} alt = "stress" height = {27} id = 'spotify'/>
<span>Stress</span></button>


<button id = 'fear' onClick={handleClick}>
<img src = {imageSpotify} alt = "fear" height = {27} id = 'spotify'/>
<span>Fear</span></button>


<button id = 'jealousy' onClick={handleClick}>
 <img src = {imageSpotify} alt = "jealousy" height = {27} id = 'spotify'/>
 <span>Jealousy</span></button>


<button id = 'forgivenessReunion' onClick={handleClick}>
<img src = {imageSpotify} alt = "forgiveness reunion" height = {27} id = 'spotify'/>
<span>Forgivness/Reunion</span></button>


<button id = 'loneliness' onClick={handleClick}>
 <img src = {imageSpotify} alt = "loneliness" height = {27} id = 'spotify'/>
 <span>Loneliness</span></button>


<button id = 'love' onClick={handleClick}>
 <img src = {imageSpotify} alt = "love" height = {27} id = 'spotify'/>
 <span>Love</span></button>


<button id = 'sadness' onClick={handleClick}>
 <img src = {imageSpotify} alt = "sadness" height = {27} id = 'spotify'/>
 <span>Sadness</span></button>


<button id = 'selfCritism' onClick={handleClick}>
<img src = {imageSpotify} alt = "self critism" height = {27} id = 'spotify'/>
<span>Self Critism</span></button>


<button id = 'compassion' onClick={handleClick}>
 <img src = {imageSpotify} alt = "compassion" height = {27} id = 'spotify'/>
 <span>Compassion</span></button>

     */}
    <a href = './Load'><h1 id = 'makeMix'>make my mix   <ArrowForwardIcon /></h1> </a>
    <a href = 'http://www.davinawooley.com' target = 'blank'> <h6 >© 2022 DEW</h6></a>
        </div>
        <ReactTooltip />
        </div> 
        </div>
        // </div>
      );
    } 