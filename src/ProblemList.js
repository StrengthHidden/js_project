// ProblemList.js

import React from 'react';
import './ProblemList.css';

const ProblemList = () => {
  return (
    <div className="container">
      <div className="problem">
        <h2>문제 1</h2>
        <img src={process.env.PUBLIC_URL + '/problem1.jpg'} alt="문제 1 이미지" />
        <p className="answer">정답: 아뵤</p>
      </div>
      <div className="problem">
        <h2>문제 2</h2>
        <img src={process.env.PUBLIC_URL + '/problem2.jpg'} alt="문제 2 이미지" />
        <p className="answer">정답: 4</p>
      </div>
      <div className="problem">
        <h2>문제 3</h2>
        <img src={process.env.PUBLIC_URL + '/problem3.jpg'} alt="문제 3 이미지" />
        <p className="answer">정답: 6</p>
      </div>
      {/* 추가적인 문제들을 필요에 맞게 추가 */}
    </div>
  );
};

export default ProblemList;
