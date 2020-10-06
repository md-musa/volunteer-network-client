import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {EventDetailsToForm} from "../../App";
import "./EventCard.css";

const EventCard = (props) => {
  const [eventDetails, setEventDetails] = useContext(EventDetailsToForm);
  const {eventImage, eventTitle, bgColor} = props.eventDetails;

  return (
    <div
      className="event-card"
      onClick={() =>
        setEventDetails({eventTitle: eventTitle, eventImage: eventImage})
      }
    >
      <div className="event-card__event-image">
        <Link
          to="/registation"
          style={{textDecoration: "none", color: "white"}}
        >
          <img src={eventImage}></img>
        </Link>
      </div>

      <div
        className="event-card__event-title"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: bgColor,
        }}
      >
        <Link
          to="/registation"
          style={{textDecoration: "none", color: "white"}}
        >
          <div>
            <h4>{eventTitle}</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
