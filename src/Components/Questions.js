import React, {useState} from "react";
import { useParams, useNavigate} from "react-router-dom";
import qBank from "./QuestionBank";

const Questions=()=>{
    const {questionNum} = useParams();
    const navigate=useNavigate();
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(parseInt(questionNum)-1); // questionNum은 1부터 시작하므로 1을 빼줌
    const [userAnswers, setUserAnswers] = useState(Array(qBank.length).fill(null)); // 사용자 답변 저장할 배열 생성

    // const [currentQuestionNum, setCurrentQuestionNum] = useState(parseInt(questionNum));
    // const lastQuestionNum = 5;
    const currentQuestion = qBank[currentQuestionIdx];

    const goToNextQuestion = ()=>{
        const nextQuestionIdx = currentQuestionIdx+1;
        setCurrentQuestionIdx(nextQuestionIdx);
        if(nextQuestionIdx < qBank.length){
            navigate(`/question/${nextQuestionIdx+1}`);
        } else{
            navigate("/quiz-end");
        }        
    };

    const goToPreviousQuestion = ()=>{
        const prevQuestionIdx = currentQuestionIdx-1;
        if(prevQuestionIdx>=0){
            setCurrentQuestionIdx(prevQuestionIdx);
            navigate(`/question/${prevQuestionIdx+1}`);
        }
    };
    
    const handleOptionSelect = (e) =>{
        const selectedOption = e.target.value;
        const updatedUserAnswers = [...userAnswers];
        updatedUserAnswers[currentQuestionIdx]=selectedOption;
        setUserAnswers(updatedUserAnswers);
    }

    return (
        <div className="questionPage quiz-area">
            <h3 className="app-title">{currentQuestion.id}번 질문페이지</h3>
            <h4 className="app-title">{currentQuestion.question}</h4>
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
            </form>

            <span className="btn">
                <button className="btn-spacing" onClick={goToPreviousQuestion}>이전문제로</button>
                <button onClick={goToNextQuestion}>다음문제로</button>
            </span>
        </div>
    );
}

export default Questions;


// // contains the question component to be displayed
// import React, {Component} from "react";
// import Options from "./Option";

// class Question extends Component{
//     render(){
//         const {question,selectedOption,onOptionChange,onSubmit}=this.props;

//         return(
//             <div className="quiz-area">
//                 <section className="container quiz-container">
//                     <article class="row">
//                         <content class="col-md-9 col-lg-9 col-sm-9 quiz-content">
//                             {/* <h3>{question.id}</h3> */}
//                             <h4 className="mt-2">Q{question.id}. {question.question}</h4>
//                         </content>
//                     </article>
//                     <img src={question.img} alt="첨부이미지" className="question-img shadow mb-2"></img>
//                 </section>

//                 <section className="container option-container">
//                     <form onSubmit={onSubmit} className="mt-2 mb-2">
//                         <Options
//                             options={question.options}
//                             selectedOption={selectedOption}
//                             onOptionChange={onOptionChange}
//                             className="option-box"
//                         />
//                         <button type="submit" className="btn btn-outline-dark btn-block">제출</button>
//                     </form>
//                 </section>

//             </div>
//         )
//     }
// }

// export default Question;