import React from "react";
import "./style.css"

// This file exports the Input, TextArea, and FormBtn components

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
    </form>
  )


}

export default Form;
