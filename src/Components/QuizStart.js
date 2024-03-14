import React from "react";
import quizs from "./QuizBank";
import { Link } from "react-router-dom";

const QuizStart = ()=>{
    return (
        <div className="QuizStart app-title">
            <h1>{quizs[0].name}</h1>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img id="quiz img" width="300" height="300" src={quizs[0].img} alt="quiz" />
                <Link to="/question/1">
                <button style={{ marginTop: "20px", fontSize: "large" }} id="test_start">
                    문제 시작
                </button>
                </Link>
            </div>
        </div>
    );
}

export default QuizStart;