import logo from './logo.svg';
import './App.css';
import ShowResult from './result.js'
import React, { Component } from 'react';
import NextPage from './nextpage.js'


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      score: 3,
      resultImage:"",
    };
  }
  render(){

    const {score,resultImage,onSubmit}=this.state;
    return (
      
      <div className="App">
        <header className="App-header">
        
        </header>

        <ShowResult
        score={score}
        resultImage={resultImage}
        />
      <form onSubmit={onSubmit}>
        <NextPage/>
        <button className='btn'>전체답 보러가기</button>
      </form>
      
      </div>

    );
}
}

export default App;
