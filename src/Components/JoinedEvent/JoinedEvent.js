import React from "react";
import "./JoinedEvent.css";

const JoinedEvent = (props) => {
  const {eventImage, eventTitle, eventJoinedDate, _id} = props.attendedEvent;

  const handelDelete = (id) => {
    fetch(`https://polar-fjord-95949.herokuapp.com/event-collection/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="courses-container">
      <div className="course">
        <div className="course-preview">
          <img src={eventImage && eventImage}></img>
        </div>
        <div className="course-info">
          <h2>{eventTitle && eventTitle}</h2>
          <h6>{eventJoinedDate}</h6>
          <button onClick={() => handelDelete(`${_id}`)} className="btn">
            Cancle
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinedEvent;
