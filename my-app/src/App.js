import logo from './logo.svg';
import './App.css';
import ShowResult from './result.js'
import React, { Component } from 'react';
import NextPage from './nextpage.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      score: 3,
      resultImage:"",
    };
  }
  render(){

    const {score,resultImage}=this.state;
    return (
      
      <div className="App">
        <BrowserRouter>
        <header className="App-header">
        <Routes>
          <Route path="/" element={ <ShowResult
          score={score}
          resultImage={resultImage}
          />}></Route>
          <Route path="/answer" element={<NextPage/>}></Route>
        </Routes>
        </header>

       
     
      </BrowserRouter>
      </div>

    );
}
}

export default App;
