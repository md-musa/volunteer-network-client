import React, {useContext, useState} from "react";
import "./RegisterToNewEvent.css";
import {useHistory} from "react-router-dom";
import {EventTitleToForm, UserDataContext} from "../../App";

const Registation = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserDataContext);
  const [title, setTitle] = useContext(EventTitleToForm);
  let history = useHistory();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    desicription: "",
    event: "",
    date: "",
    eventImage: "",
  });

  const hendelBlur = (e) => {
    userData[e.target.name] = e.target.value;
  };

  const handelRegistation = (e) => {
    e.preventDefault();
    fetch("https://polar-fjord-95949.herokuapp.com/add-volunteer-work", {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.eventAdded) {
          history.push("/event");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-section">
      <div className="login__right">
        <div className="signup">
          <h3 style={{margin: "10px", color: "gray"}}>Register to volunteer</h3>
          <hr />
          <form onSubmit={handelRegistation}>
            <input
              className="login__login-field"
              name="name"
              value={loggedInUser.name}
              type="text"
              placeholder="Full name"
              onBlur={hendelBlur}
              required
            />
            <input
              className="login__login-field"
              name="email"
              type="text"
              value={loggedInUser.email}
              placeholder="Email address"
              onBlur={hendelBlur}
              required
            />
            <br />
            <input
              className="login__login-field"
              name="date"
              type="date"
              placeholder="Date"
              onBlur={hendelBlur}
              required
            />
            <br />
            <input
              className="login__login-field"
              name="desicription"
              type="text"
              placeholder="Desicription"
              onBlur={hendelBlur}
            />
            <br />
            <input
              className="login__login-field"
              name="event"
              type="text"
              value={title.eventTitle}
              placeholder="Event name"
              onBlur={hendelBlur}
            />

            <input
              style={{visibility: "visible"}}
              name="eventImage"
              type="text"
              className="login__login-field"
              value={title.eventImage}
              placeholder="Event name"
              onBlur={hendelBlur}
            />

            <br />
            <span style={{color: "#ff8080"}}>
              Before register please focus once all input area otherwise won't
              work
            </span>

            <input
              className="login__login-btn"
              type="submit"
              value="Register"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registation;
