import React, {useContext, useEffect, useState} from "react";
import "./AttendedEvenet__home.css";
import JoinedEvent from "../JoinedEvent/JoinedEvent";
import {UserDataContext} from "../../App";

const AttendedEvenet__home = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserDataContext);
  const [attendedEvent, setAttendedEvent] = useState([]);

  useEffect(() => {
    fetch(
      `https://polar-fjord-95949.herokuapp.com/get-volunteer-work-list?email=${loggedInUser.email}`
    )
      .then((res) => res.json())
      .then((data) => setAttendedEvent(data))
      .catch((err) => console.log(err));
  }, [loggedInUser]);

  return (
    <div className="attended-event-home">
      {attendedEvent.map((event) => (
        <JoinedEvent
          attendedEvent={{
            _id: event._id,
            eventImage: event.eventImage,
            eventTitle: event.event,
            eventJoinedDate: event.date,
          }}
        />
      ))}
    </div>
  );
};

export default AttendedEvenet__home;
