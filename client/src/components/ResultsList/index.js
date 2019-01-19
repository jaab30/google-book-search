import React from "react";
import "./style.css";

function ResultList(props) {
  return (
    <div className="resultListDiv">
      {props.children}
    </div>
  );
}

export default ResultList;
