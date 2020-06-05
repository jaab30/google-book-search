import React from "react";
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
      <p className="description">{!props.description ? "This Book does not have a summary available." : props.description}</p>

      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <button className="btnView">View</button></a>
      <button onClick={() => props.saveBook(props.bookId)} className="btnSave">Save</button>
    </div>
  );
}

export default ResultListItem;
