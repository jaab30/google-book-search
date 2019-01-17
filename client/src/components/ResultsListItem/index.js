import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function ResultListItem(props) {
  return (
    <div className="resulListDiv">
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
      <p>Written by: {props.authors}</p>
      <p>{props.description}</p>
      <div className="imgDiv">
        <img alt={props.title} src={props.image} />
      </div>
      <Link to={`//${props.link.substring(7)}`} target="_blank">
        <button>view</button></Link>
      <button>Save</button>
    </div>
  );
}

export default ResultListItem;
