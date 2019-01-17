import React from "react";
import "./style.css";

function ResultList(props) {
  return (
    <div className="resulListDiv">
      {props.children}
    </div>
  );
}

export default ResultList;
