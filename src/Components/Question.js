// contains the question component to be displayed
import React, {Component} from "react";
import Options from "./Option";

class Question extends Component{
    render(){
        const {question,selectedOption,onOptionChange,onSubmit}=this.props;

        return(
            <div className="quiz-area">
                <section className="container quiz-container">
                    <article class="row">
                        <content class="col-md-9 col-lg-9 col-sm-9 quiz-content">
                            {/* <h3>{question.id}</h3> */}
                            <h4 className="mt-2">Q{question.id}. {question.question}</h4>
                        </content>
                    </article>
                    <img src={question.img} alt="첨부이미지" className="question-img shadow mb-2"></img>
                </section>

                <section className="container option-container">
                    <form onSubmit={onSubmit} className="mt-2 mb-2">
                        <Options
                            options={question.options}
                            selectedOption={selectedOption}
                            onOptionChange={onOptionChange}
                            className="option-box"
                        />
                        <button type="submit" className="btn btn-outline-dark btn-block">제출</button>
                    </form>
                </section>

            </div>
        )
    }
}

export default Question;