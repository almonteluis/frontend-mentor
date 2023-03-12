import React from "react";
import "./Summary.css";

const Summary = (props) => {
  return (
    <div className='card summary-card'>
      <h4 className='summary-heading'>Summary</h4>
      <div className='summary-container'>
        {Array.isArray(props.data) &&
          props.data.map((item, index) => {
            return (
              <div className={"summary-item item-" + item.category} key={index}>
                <div className='summary-item-title'>
                  <img src={item.icon} alt='' />
                  <div style={{ paddingLeft: "10px" }}>{item.category}</div>
                </div>
                <div className='summary-score'>
                  <div
                    style={{
                      color: "#313244",
                      paddingRight: "5px",
                      fontWeight: "700",
                    }}
                  >
                    {item.score}
                  </div>
                  / 100
                </div>
              </div>
            );
          })}
      </div>
      <button className='summary-continue-btn'>Continue</button>
    </div>
  );
};

export default Summary;
