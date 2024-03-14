import React, {useState} from "react";
import { useParams, useNavigate} from "react-router-dom";
import qBank from "./QuestionBank";

const Questions=()=>{
    const {questionNum} = useParams();
    const navigate=useNavigate();
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(parseInt(questionNum)-1); // questionNum은 1부터 시작하므로 1을 빼줌
    const [userAnswers, setUserAnswers] = useState(Array(qBank.length).fill(null)); // 사용자 답변 저장할 배열 생성
    const [score, setScore] = useState(0);
    const currentQuestion = qBank[currentQuestionIdx];

    const goToNextQuestion = ()=>{
        const nextQuestionIdx = currentQuestionIdx+1;
        setCurrentQuestionIdx(nextQuestionIdx);
        navigate(`/question/${nextQuestionIdx+1}`);
    };
    
    const handleOptionSelect = (e) =>{
        const selectedOption = e.target.value;
        const updatedUserAnswers = [...userAnswers];
        updatedUserAnswers[currentQuestionIdx]=selectedOption;
        setUserAnswers(updatedUserAnswers);
    }

    const checkAnswer = (e) =>{
        e.preventDefault();
        if(userAnswers[currentQuestionIdx]===qBank[currentQuestionIdx].answer){
            console.log("correct!");
            setScore(score+1);
        }

        if(currentQuestionIdx === qBank.length -1){
            if(userAnswers[currentQuestionIdx]===qBank[currentQuestionIdx].answer){
                navigate("/quiz-end",{state: {score: `${score+1}`}});
            }
            else{
                navigate("/quiz-end",{state: {score: `${score}`}});
            }
        }
        else{
            goToNextQuestion();
        }
    }

    return (
        <div className="questionPage quiz-area">
            <h3 className="app-title">{currentQuestion.id}번. {currentQuestion.question}</h3>
                <img className="question-img" src={currentQuestion.img} alt="question"/>
                <form>
                    <ul className="options">
                        {currentQuestion.options.map((option,index)=>(
                            <li key={index} className=" option-container">
                                <label>
                                    <input
                                        type="radio"
                                        name={`question_${currentQuestion.id}`}
                                        value={option}
                                        checked={userAnswers[currentQuestionIdx]===option}
                                        onChange={handleOptionSelect}
                                    />
                                    {option}
                                </label>
                            </li>
                        ))}
                    </ul>
                    <button className="btn" onClick={checkAnswer}>제출</button>
                </form>
                <p>점수: {score}</p>
                <p>currentQuestionIdx: {currentQuestionIdx}</p>
        </div>
    );
}

export default Questions;