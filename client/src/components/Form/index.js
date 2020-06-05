import React from "react";
import Alert from "../Alert";
import "./style.css"

export function Form(props) {

  return (

    <form className="formContainer">
      <input
        onChange={props.handleInputChange}
        className="formInput"
        placeholder="Search for your favorite book"
        name="search"
        value={props.query}
      />

      <button className="formBtn" onClick={props.loadBooks} type="success">Submit</button>
      {!props.message ? "" : <Alert>{props.message}</Alert>}
    </form>
  )


}

export default Form;
