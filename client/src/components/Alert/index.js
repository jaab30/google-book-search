import React from "react";
import "./style.css"


function Alert(props) {

    return (
        <div className="alert">{props.children}</div>
    )

}

export default Alert;