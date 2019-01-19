import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function ResultListItem(props) {
  return (
    <div className="resultItemDiv">
      <div className="imgDiv">
        <img alt={props.title} src={props.image} />
      </div>
      <h2>{props.title}</h2>
      <p className="subTitle">{props.subtitle}</p>
      <p className="author">Written by: {props.authors}</p>
      <p className="description">{props.description}</p>

      <Link to={`//${props.link.substring(7)}`} target="_blank">
        <button className="btnView">View</button></Link>
      <button onClick={() => props.saveBook(props.bookId)} className="btnSave">Save</button>
    </div>
  );
}

export default ResultListItem;
