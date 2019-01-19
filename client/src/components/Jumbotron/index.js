import React from "react";
import "./style.css"

function Jumbotron(props) {
  return (
    <div className="jumbotron">
      <img className="jumboImg" src="./assets/img/google_logo.png"></img>
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
      {props.children}
    </div>
  );
}

export default Jumbotron;
