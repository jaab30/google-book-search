import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Form(props) {

  return (

    <form>
      <input
        onChange={props.handleInputChange}
        className="form-control"
        placeholder="Seacrh for your favorite book"
        name="search"
        value={props.search}
      />
      <button onClick={props.loadBooks} type="success">Submit</button>
    </form>
  )


}

export default Form;
