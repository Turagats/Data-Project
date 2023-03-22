import React from "react";
import "./ErrorMessageBoth.css";

export default function ErrorMessageBoth(props) {
  return (
    <div className="error-message ">
      <div className="invalid-iput">Invalid input</div>
      <div className="text">
        Please enter valid name and age (non empty values)
      </div>
      <button className="errorbutton" onClick={props.errormessageclick}>
        Okay
      </button>
    </div>
  );
}
