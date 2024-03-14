import React from "react";
import quizs from "./QuizBank";
import { Link } from "react-router-dom";

const Main = () => {
    return (
        <div className="MainPage app-title">
            <h1>메인페이지입니당</h1>
            <div className="quiz-list">
                {quizs.map((quiz, index) => (
                    <div key={index} className="quiz-item">
                        <div className="quiz-content">
                            <img src={quiz.img} alt={`Quiz ${index + 1}`} />
                        </div>
                        <Link to="/quizstart" className="quiz-link">
                            <div className="quiz-name">{quiz.name}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Main;
