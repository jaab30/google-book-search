import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function Nav() {
  return (
    <ul className="">
      <li className="">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          <img className="navImg" alt="Books Icon" src="./assets/img/books.png"></img>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/books"
          className={window.location.pathname === "/books" ? "nav-link active" : "nav-link"}
        >
          Search
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/saved"
          className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
        >
          My Book List
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
