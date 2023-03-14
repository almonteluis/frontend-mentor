import React from "react";
import "./ResultCard.css";

const ResultCard = (props) => {
  return (
    <div className='card blue-gradient-bg center-content'>
      <h4>{props.title}</h4>

      <div className='result-score'>
        <div className='current-result-score'>{props.score}</div>
        <div className='out-of-100'>of 100</div>
      </div>
      <div className='result-score-text'>Great</div>
      <div className='result-message'>
        You scored higher than 65% of the people who have taken these tests.
      </div>
    </div>
  );
};

export default ResultCard;
