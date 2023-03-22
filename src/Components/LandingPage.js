import React, { useState } from "react";
import InputedData from "./InputedData";
import "./LandingPage.css";
import ErrorMessageAge from "./ErrorMessageAge";
import ErrorMessageBoth from "./ErrorMessageBoth";

export default function LandingPage() {
  const [userArray, setUserArray] = useState([]);
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [addDiv, setAddDiv] = useState(0);
  const [bothError, setBothError] = useState(false);
  const [ageError, setAgeErrorr] = useState(false);

  const handleClickerror = () => {
    setAgeErrorr(false);
    setBothError(false);
  };

  const HandleUsername = (event) => {
    setUsername(event.target.value);
  };

  const HandleAge = (event) => {
    setAge(event.target.value);
  };

  const HandleClick = () => {
    setAgeErrorr(false);
    setBothError(false);
    if (username.length === 0) {
      setBothError(true);
    } else if ((username.length > 0) & (age.length <= 0)) {
      setAgeErrorr(true);
    } else {
      setUserArray([...userArray, [username, age]]);
      setUsername("");
      setAge("");
      setAddDiv(addDiv + 1);
    }
  };

  return (
    <div className="landing-page">
      <div
        className="first-box div"
        style={bothError || ageError ? { opacity: "50%" } : { opacity: "100%" }}
      >
        <div className="username-age-inputs">
          <div className="username">
            <label htmlFor="userID">Username</label>
            <input
              className="userID"
              id="userID"
              type="text"
              value={username}
              onChange={HandleUsername}
            ></input>
          </div>
          <div className="age-years">
            <label htmlFor="ageID">Age (Years)</label>
            <input
              className="ageID"
              id="ageID"
              type="number"
              value={age}
              onChange={HandleAge}
            ></input>
          </div>
        </div>
        <div className="add-user">
          <button onClick={HandleClick}>Add User</button>
        </div>
      </div>
      {bothError ? (
        <ErrorMessageBoth errormessageclick={handleClickerror} />
      ) : (
        ""
      )}
      {ageError ? <ErrorMessageAge errormessageclick={handleClickerror} /> : ""}

      {addDiv > 0 ? (
        <div
          className="additiona-div div"
          style={
            bothError || ageError ? { opacity: "50%" } : { opacity: "100%" }
          }
        >
          {userArray.map((elem, index) => (
            <InputedData key={index} name={elem[0]} age={elem[1]} />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
