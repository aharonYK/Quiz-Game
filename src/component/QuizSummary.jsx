import React, { Component, Fragment, useEffect} from 'react';

import {Link, useParams} from 'react-router-dom';

const start={ //color of buttons css green
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
    transition: 'background,color .1s ease-in-out',
    margin:'2%'
    }

   const end={//color of buttons css red
       display: 'inline-block',
       outline: '0',
       textAlign: 'center',
       cursor: 'pointer',
       padding: "17px 30px",
       border: '0',
       color: "#fff",
       fontSize: '17.5px',
       background: 'red',
       lineHeight: '14px',
       fontWeight: '900',
       transition: 'background,color .1s ease-in-out',
       margin:'2%'
   }



class QuizSummary extends Component{
    constructor(props) {                       
        super(props);
        this.state = {
            score: this.props.dataParentToChild,
            numberOfQuestions: this.props.numQ,
            correctAnswers: this.props.correctQ,
            wrongAnswers: this.props.wrongQ
        }
    }

    componentDidMount() {                                                    //inisiate all of the data on the screen
        const { score,numberOfQuestions,correctAnswers,wrongAnswers } = this.props;
        console.log(this.state.score);
      
        if (score,numberOfQuestions,correctAnswers,wrongAnswers){
            this.setState({
                score: score ,
                numberOfQuestions: numberOfQuestions,
                correctAnswers: score,
                wrongAnswers: wrongAnswers
            });
        }
    }

    render() {
        const { score,numberOfQuestions,correctAnswers,wrongAnswers } = this.props;
        let stats, remark;
        const userScore = this.state.score;
        console.log(this.state.score);
        // Defining user score
        if (userScore != undefined){
            stats = (
                <Fragment>
                <div className="summary-container">
                    <div className=".quiz-summary">
                            <h4>{remark}</h4>
                            <h2>Your Score: {this.state.score.toFixed(0)};</h2>
                            <span className="stats">Total number of questions: </span>
                            <span className="stats">{this.state.numberOfQuestions}</span><br />
                            <span className="stats">Number of Correct Answers: </span>
                            <span className="stats">{this.state.score}</span> <br />
                        </div>
                    <section>
                        <ul>
                            <Link style={end} onClick={this.forceUpdate} to ="/" className="options">Return</Link>
                            <Link style={start} onClick={this.forceUpdate} to ="/play/quiz" className="options">Play Again</Link>
                        </ul>
                    </section>
                </div>
            </Fragment>
            );
        } else {
            stats = (
                <section>
                    <div className=".quiz-summary">
                        <h1 className="no-stats">No stats available yet</h1>
                        <ul>
                            <Link style={end} onClick={this.forceUpdate} to ="/" className="options">Return</Link>
                            <Link style={start} onClick={this.forceUpdate} to ="/play/quiz" className="options">Take a Quiz!</Link>
                        </ul>
                    </div>
                </section>
            );
        }
        return(
            <Fragment>
               
                {stats}
            </Fragment>
        );
    }
}

export default QuizSummary;