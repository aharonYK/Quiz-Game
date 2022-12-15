
import './App.css';
import Home from './component/Home';
import QuizInstruction from './component/QuizInstruction';
import Play from './component/Play';
import QuizSummary from './component/QuizSummary';
import { Routes, Route } from "react-router-dom";
 import React, { Component } from 'react'
 










class App extends Component {

  constructor(props){         //main constractor
    super(props);
    this.state = {
        score: 0,
        numberOfQuestions: 20,
        correctAnswers: 0,
        wrongAnswers: 0
    }
}
handleOptionClick = (childData) =>{     //to fetch the scor from play componnent and update score in App
  
  this.setState({score: (childData+1)})}

    render(){
      const {score,numberOfQuestions,correctAnswers,wrongAnswers,} = this.state;
  return (

    <div className="App" style={{backgroundColor: "#83F8FB",width:'50%',marginLeft:'25%',borderRadius:'15%'}}>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/play/instructions" element={<QuizInstruction/>} />
    <Route path="/play/quiz"
     
      element={                               //the play component with all the props
      <Play
        dataParentToChild = {score}
        numQ={numberOfQuestions}
        correctQ={correctAnswers}
        wrongQ={wrongAnswers}
        parentCallback = {this.handleOptionClick}

      />
      }/>

    <Route path="/play/QuizSummary"          //the play Quizsummary with all the props
      element={<QuizSummary 
        dataParentToChild = {score}
        numQ={numberOfQuestions}
correctQ={correctAnswers}
wrongQ={wrongAnswers}
        />}/>
    </Routes>



    </div>
  );}
}

export default App;
