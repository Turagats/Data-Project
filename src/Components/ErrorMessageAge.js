import React from "react";

export default function ErrorMessageAge(props) {
  return (
    <div className="error-message ">
      <div className="invalid-iput">Invalid input</div>
      <div className="text">Please enter a valid age ( &gt; 0 )</div>
      <button className="errorbutton" onClick={props.errormessageclick}>
        Okay
      </button>
    </div>
  );
}
