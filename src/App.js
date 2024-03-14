import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import qBank from "./Components/QuestionBank";
import Main from "./Components/Main";
import QuizStart from './Components/QuizStart';
import Questions from "./Components/Questions";
import QuizEnd from "./Components/QuizEnd";
import NotFound from "./Components/NotFound";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBank: qBank,
      currentQuestion: 0,
      selectedOption: "",
      score: 0,
      quizEnd: false,
    };
  }

  handleOptionChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.checkAnswer();
    this.handleNextQuestion();
  };

  checkAnswer = () => {
    const { questionBank, currentQuestion, selectedOption } = this.state;
    if (selectedOption === questionBank[currentQuestion].answer) {
      this.setState((prevState) => ({ score: prevState.score + 1 }));
    }
  };

  handleNextQuestion = () => {
    const { questionBank, currentQuestion } = this.state;
    if (currentQuestion + 1 < questionBank.length) {
      this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion + 1,
        selectedOption: "",
      }));
    } else {
      this.setState({
        quizEnd: true,
      });
    }
  };

  render() {
    const {
      questionBank,
      currentQuestion,
      selectedOption,
      score,
      quizEnd,
    } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/quizstart" element={<QuizStart />} />
            <Route
              path="/question/:questionNum"
              element={
                <Questions
                  question={questionBank[currentQuestion]}
                  selectedOption={selectedOption}
                  onOptionChange={this.handleOptionChange}
                  onSubmit={this.handleFormSubmit}
                />
              }
            />
            <Route
              path="/quiz-end"
              element={<QuizEnd score={score} onNextQuestion={this.handleNextQuestion} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
