import React, { Component } from 'react';
import './App.css'
import { Link } from 'react-router-dom';


class ShowResult extends React.Component {
    render(){
        let {score,resultImage}=this.props;

    if (score === 10) {
        resultImage = "https://test-it.co.kr/108-100.png";
    } else if (score === 9) {
        resultImage = "https://test-it.co.kr/108-90.png";
    } else if (score === 8) {
        resultImage = "https://test-it.co.kr/108-80.png";
    } else if (score === 7) {
        resultImage = "https://test-it.co.kr/108-70.png";
    } else if (score === 6) {
        resultImage = "https://test-it.co.kr/108-60.png";
    } else if (score === 5) {
        resultImage = "https://test-it.co.kr/108-50.png";
    } else if (score === 4) {
        resultImage = "https://test-it.co.kr/108-40.png";
    } else if (score === 3) {
        resultImage = "https://test-it.co.kr/108-30.png";
    } else if (score === 2) {
        resultImage = "https://test-it.co.kr/108-20.png";
    } else if (score === 1) {
        resultImage = "https://test-it.co.kr/108-10.png";
    } else {
        resultImage = "https://test-it.co.kr/108-0.png";
    }
    return(
        <div className="result">
            <header className="result-header">
                <h1 className="app-title">당신의 결과는?</h1>          
            </header>
            <img src= {resultImage} className="result-image"></img>
            <form>
                <Link to="/answer">
                <button className='btn'>전체답 보러가기</button>
                </Link>
            </form>
        </div>
    );
    }
}

export default ShowResult;