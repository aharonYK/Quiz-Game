import React, {  Component, Fragment} from 'react'
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        width: '50%',
        marginLeft:'25%',
        marginTop:'5%',
        borderRadius:'20px',
        fontStyle:'italic',
      };
      
      const start={     //css to buttons
display: 'inline-block',
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
    return (
        <div style={mystyle}>
        <title >S2V - Quiz App</title>
        <div id="home" >
            <section>
                <h1> Welcome to Quiz App!!</h1>
                <div className = "play-button-container">
                    <ul>
                        <Link className="play-button" to="/play/instructions"><button style={start}>Play</button> </Link>
                    </ul>
                </div>
            </section>
        </div>
        <div>

        </div>
    </div>
    )
  }
}
