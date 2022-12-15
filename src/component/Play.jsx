import React, { Component,Fragment } from 'react';
import { Link,useNavigate,useState } from 'react-router-dom';
import { Helmet } from 'react-helmet';


import questions from './questions.json';
import isEmpty from './is-empty'

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
margin:'2%'
}


const button={
display: 'inline-block',
outline: '0',
border: '0',
cursor: 'pointer',
backgroundColor: '#4299e1',
borderRadius: '50px',
padding:' 8px 16px',
fontSize: '16px',
fontWeight: '700',
color: 'white',
lineHeight: '26px',
margin:"2%"
}

const head={
    display: 'inline-block',
    outline: '0',
    border: '0',
    cursor: 'pointer',
    backgroundColor: '#105AF3',
    borderRadius: '50px',
    padding:' 8px 16px',
    fontSize: '16px',
    fontWeight: '700',
    color: 'white',
    lineHeight: '26px',
    margin:"2%"
    }
    



function shuffleArray(array) {              //function to suffle the qustion
    let i = array.length - 1;
    let arr2=[];
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      
    }
    for(let i=1;i<=20;i++){
        arr2.push(array[i]);

    }
    console.log(arr2);
    return arr2;
  }
  
  function shuffleQustion(array) { //function to suffle the answers
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
 


class Play extends Component {      
    
    constructor(props) {    //constractor for all the props
        super(props);
        this.state = {
            arry1:[],
            questions,
            score: this.props.dataParentToChild,
            currentQuestion: {},
            nextQuestion: {},
            numberOfQuestions: this.props.numQ,
            correctAnswers: this.props.correctQ,
            wrongAnswers: this.props.wrongQ,
            answer: '', 
            numberOfAnsweredQuestion: 0,
            currentQuestionIndex:0,
    
        };  
    };
    

chancg=()=>{                              //to set the qustion to the shuffle qustion
    let x=this.state.questions
    const shuffledPosts = shuffleArray(x);
    this.setState({questions:shuffledPosts});
    console.log(questions)
}
   

        componentDidMount() {                      //start the web with on didmount
        this.chancg();
        const { questions, currentQuestion, nextQuestion, previousQuestion } = this.state;
        
        this.displayQuestions(questions, currentQuestion, nextQuestion, previousQuestion );
        
    }
    componentWillMount(){  

        clearInterval(this.interval);
    }

     // For displaying the questions
     displayQuestions = (questions = this.state.questions, currentQuestion,nextQuestion) => {
     
        let { currentQuestionIndex } = this.state;
        if (!isEmpty(this.state.questions)) {
            questions = this.state.questions;
            currentQuestion = questions[currentQuestionIndex];
            nextQuestion = questions[currentQuestionIndex + 1];

           console.log(questions);
           let a=currentQuestion.optionA;
           let b=currentQuestion.optionB;
           let c=currentQuestion.optionC;
           let d=currentQuestion.optionD;
           const arry=[a,b,c,d];
            
            let arry5=shuffleQustion(arry);
            
            this.setState({arry1:arry5})
            const answer = currentQuestion.answer;
            
            this.setState({
                nextQuestion,
                currentQuestion,
                numberOfQuestions: questions.length,
                answer,
                previousRandomNumbers: []
            }, () => { // And also displaying the options and button handler
                this.showOptions();
               
            });
        }
    }












showOptions = () => {                     //to sow and read all the answers from the Jason file 
    const options = Array.from(document.querySelectorAll('option'));
    options.forEach(option => {
        option.style.visibility = ' visible';
    });
    this.setState({
        usedFiftyFifty: false
    });
}
wrongAnswers = () => {        //what to do if the answer is wrong
    
    this.setState(prevState => ({
        wrongAnswers: prevState.wrongAnswers + 1,
      
        numberOfAnsweredQuestion: prevState.numberOfAnsweredQuestion + 1,
    }), () => {
        if (this.state.nextQuestion === undefined){
            this.endGame();
        } else{
            this.displayQuestions(this.state.questions,
                this.state.currentQuestion, this.state.nextQuestion,
                this.state.previousQuestion);
        }
    });
}

correctAnswers = () => { //what to do if the answer is wrong
    
    this.setState(prevState => ({
        score: prevState.score + 1,
        correctAnswers:prevState.correctAnswers + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        numberOfAnsweredQuestion: prevState.numberOfAnsweredQuestion + 1
    }),() => {
        if (this.state.nextQuestion === undefined){
            
            this.endGame();
        } else{
            this.displayQuestions(this.state.questions,
                this.state.currentQuestion, this.state.nextQuestion,
                this.state.previousQuestion);
        }
    });
    
    console.log(this.state.score);
     
}

  // Function to end the game
 endGame = () => {                   //end the game and sent the states to the perants
    const { state } = this.state;
    const playerStats = {
        score: state.score,
        numberOfQuestions: state.numberOfQuestions,
        numberOfAnsweredQuestion: state.numberOfAnsweredQuestion,
        correctAnswers: state.correctAnswers,
        wrongAnswers: state.wrongAnswers,

    };
    
}


handleOptionClick = (e) => {                            //recived the data from the button push
    if (e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
        this.correctAnswers(); 
        this.props.parentCallback(this.state.score); //send the score to the parent
    } else {
        this.wrongAnswers();
    }
}


    render() {
       
        const { 
            currentQuestion, 
            currentQuestionIndex,  
            arry1,
        } = this.state;
        


        return (
            
            <Fragment>
            <Helmet><title>S2V - Quiz Page</title></Helmet>
            <div className="questions">
                <h2>Quiz Time!</h2>
                <div className="timer-container">
                    <p className="timer-number">
                        <br></br>
                        <span className="left">{currentQuestionIndex+1} out of {20}</span>
                        
                    </p>
                </div>
                <h5 style={head}>{currentQuestion.question}</h5>    
                <div className="options-container">
                
                 <Link to={arry1[0]===currentQuestion.answer&&this.state.nextQuestion !== undefined&&currentQuestionIndex<21? '/play/quiz':'/play/quizSummary'} value={{ values: this.state }}><button style={button} onClick={this.handleOptionClick} className="option">{arry1[0]}</button></Link>
                    
                    <Link to={arry1[1]===currentQuestion.answer&&this.state.nextQuestion !== undefined&&currentQuestionIndex<21? '/play/quiz':'/play/quizSummary'}value={{ values: this.state }}><button style={button} onClick={this.handleOptionClick} className="option">{arry1[1] }</button></Link>
                </div>
                <div className="options-container">
                <Link to={arry1[2]===currentQuestion.answer&&this.state.nextQuestion !== undefined&&currentQuestionIndex<21? '/play/quiz':'/play/quizSummary'}value={{ values: this.state }}><button style={button} onClick={this.handleOptionClick} className="option">{arry1[2]}</button></Link>

                <Link to={arry1[3]===currentQuestion.answer&&this.state.nextQuestion !== undefined &&currentQuestionIndex<21? '/play/quiz':'/play/quizSummary'}value={{ values: this.state }}> <button style={button} onClick={this.handleOptionClick} className="option">{arry1[3]}</button></Link>
</div> 
                <div className="button-container">
                    
                <Link to='/play/quizSummary'   className="auth-buttons" id="quit-button"><button style={end} id="quit-button"> Quit</button></Link>
                
                
                <Link to='/' className="auth-buttons" id="quit-button"><button id="quit-button" style={end}>  To-Menu</button></Link>
                </div>
            </div>
        </Fragment>
        );
    }
   
   
   
}






export default Play;
