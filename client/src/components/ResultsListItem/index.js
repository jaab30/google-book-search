import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function ResultListItem(props) {
  return (
    <div className="resulListDiv">
      <div className="imgDiv">
        <img alt={props.title} src={props.image} />
      </div>
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
      <p>Written by: {props.authors}</p>
      <p>{props.description}</p>

      <Link to={`//${props.link.substring(7)}`} target="_blank">
        <button>view</button></Link>
      <button  onClick={() => props.saveBook(props.bookId)}>Save to Wish List</button>
    </div>
  );
}

export default ResultListItem;
