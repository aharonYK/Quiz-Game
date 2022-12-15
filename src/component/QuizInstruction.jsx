import React, { Component,Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const start={display: 'inline-block',
outline: '0',
textAlign: 'center',
cursor: 'pointer',
padding: "17px 30px",
border: '0',
color: "#fff",
fontSize: '17.5px',
background: '#00d301',
background: '-webkit-linear-gradient(-196deg,#00d301,#36c275 50%,#00a562)',
background: '-webkit-linear-gradient(164deg,#00d301,#36c275 50%,#00a562)',
background: 'linear-gradient(286deg,#00d301,#36c275 50%,#00a562)',
lineHeight: '14px',
fontWeight: '900',
transition: 'background,color .1s ease-in-out'
}


const end={
    display: 'inline-block',
outline: '0',
cursor: 'pointer',
borderRadius: '6px',
border: '2px solid #ff4742',
color: '#fff',
backgroundColor:' #ff4742',
padding: '8px',
boxShadow:' rgba(0, 0, 0, 0.07) 0px 2px 4px 0px rgba(0, 0, 0, 0.05) 0px 1px 1.5px 0px',
fontWeight: '800',
fontSize: '16px',
height: '42px',
marginTop:'25%'
}



class QuizInstruction extends Component {
    render() {
        return (
            
                <Fragment>
     <Helmet><title>SV2 - Quiz Instruction</title></Helmet>
     <div className="instructions-container">
         <h1>How to play the game</h1>
         <p>Guide for newbies</p>
         <ul className="browser-default" id="main-list">
            
             <li>Each game consist of 20 questions</li>
             <li>
                 Every question have 4 options
             </li>
             <li>
                 Select the option which best answers the question by selecting it
             </li>
             <li>
                 Feel free to quit or give up anytime
             </li>
         </ul>
         <div className="confirm-button">
         <Link to="/play/quiz" style={{textDecoration:'none'}}className="confirm-buttons" id="proceed"><button className="right" style={start}>LET'S GO</button></Link>
         <br />
             <button className="left" style={end} ><Link style={{textDecoration:'none'}} to="/" className="confirm-buttons" id="back"> No take me back</Link></button>
             
            
         </div>
     </div>
 </Fragment>
            
        );
    }
}

export default QuizInstruction;
