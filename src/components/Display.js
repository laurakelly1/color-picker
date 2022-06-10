import React from "react";

const Display = ({ color }) => {
  const paintColor = (e) => {
    e.target.style.backgroundColor = color;
  };

  return (
    <div className="squares">
      <div className="square" id="1" onClick={paintColor}></div>
      <div className="square" id="2" onClick={paintColor}></div>
      <div className="square" id="3" onClick={paintColor}></div>
    </div>
  );
};

export default Display;
