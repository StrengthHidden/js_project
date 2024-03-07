import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Questions from "./Components/Questions";
import QuizEnd from "./Components/QuizEnd";
import NotFound from "./Components/NotFound";
import Main from "./Components/Main";
import "./App.css";
import QuizStart from './Components/QuizStart';


const App=()=>{
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/quizstart" element={<QuizStart/>}></Route>
          <Route path="/question/:questionNum" element={<Questions />}></Route>
          <Route path="/quiz-end" element={<QuizEnd />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// // Main file where all the logic for scoring and qustions is written and other components are imported
// import React, {Component} from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Question from "./Components/Question";
// import qBank from "./Components/QuestionBank";
// import Score from "./Components/Score";
// import "./App.css";

// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//       questionBank: qBank,
//       currentQuestion: 0,
//       selectedOption: "",
//       score: 0,
//       quizEnd: false,
//     };
//   }

//   handleOptionChange = (e)=>{
//     this.setState({selectedOption: e.target.value});
//   };

//   handleFormSubmit = (e)=>{
//     e.preventDefault();
//     this.checkAnswer();
//     this.handleNextQuestion();
//   };

//   checkAnswer = () =>{
//     const {questionBank, currentQuestion, selectedOption} = this.state;
//     if(selectedOption ===questionBank[currentQuestion].answer){
//       this.setState((prevState) => ({score: prevState.score+1}));
//     }
//   };

//   handleNextQuestion = () =>{
//     const {questionBank, currentQuestion} = this.state;
//     if(currentQuestion+1 < questionBank.length){
//       this.setState((prevState)=>({
//         currentQuestion: prevState.currentQuestion+1,
//         selectedOption: "",
//       }));
//     } else{
//       this.setState({
//         quizEnd: true,
//       });
//     }
//   };

//   render(){
//     const {questionBank,currentQuestion,selectedOption,score,quizEnd}=this.state;
//     return(
//       <div className="app">
//         <header className="app-header">
//           <h1 className="app-title">그때그시절퀴-즈</h1>  
//         </header>
//         <div className="d-flex flex-column align-items-center justify-content-center">
//           {!quizEnd ?(
//             <Question
//               question={questionBank[currentQuestion]}
//               selectedOption={selectedOption}
//               onOptionChange={this.handleOptionChange}
//               onSubmit={this.handleFormSubmit}
//             />
//           ) : (
//             <Score
//               score={score}
//               onNextQuestion={this.handleNextQuestion}
//               className="score"
//             />
//           )}
//         </div>
//       </div>

//     );
//   }
// }

// export default App;