import React from "react";
import { useLocation } from "react-router-dom";

const QuizEnd = ()=>{
    const location = useLocation();
    const score = parseInt(location.state.score);
    let resultImage="";

    console.log(score);
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

    return (
        <div>
            <h1 className="app-title">당신의 결과는?</h1>          
            <div className="result">
                <img src= {resultImage} alt="resultImage" className="result-image"></img>
                {/* <button><Link to ="/answers/">Answers</Link></button> */}
            </div>
        </div>

    );
}

export default QuizEnd;