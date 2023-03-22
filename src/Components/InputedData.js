import React from "react";
import "./InputedData.css";

export default function InputedData(props) {
  return (
    <div className="inputed-data">
      <span>
        {props.name} ({props.age} Years)
      </span>
    </div>
  );
}
