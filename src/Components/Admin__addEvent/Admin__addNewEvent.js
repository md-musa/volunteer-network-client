import {Button} from "@material-ui/core";
import React, {useState} from "react";
import "./Admin__addEvent.css";

const Admin__addEvent = () => {
  const [newEvent, setNewEvent] = useState({
    eventTitle: "",
    description: "",
    date: "",
    eventImage: "",
  });
  const hendelBlur = (e) => {
    newEvent[e.target.name] = e.target.value;
  };

  // Add new event to database and showing it to home page
  const handleAddNewEvent = (e) => {
    fetch("https://polar-fjord-95949.herokuapp.com/add-event", {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(newEvent),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    e.preventDefault();
  };

  return (
    <div className="admin__addevent">
      <h2 style={{textAlign: "center", margin: "0"}}>Add New Event</h2>

      <form onSubmit={handleAddNewEvent}>
        <div style={{display: "flex"}}>
          <div>
            <span>Event title</span>
            <br />
            <input
              type="text"
              onChange={hendelBlur}
              name="eventTitle"
              placeholder="Event name"
              required
            />
            <br />
            <span>Description</span>
            <br />
            <textarea
              onChange={hendelBlur}
              name="description"
              placeholder="Description"
            ></textarea>
          </div>

          <div>
            <span>Date</span>
            <br />
            <input
              onChange={hendelBlur}
              name="date"
              type="date"
              placeholder="Event name"
            />{" "}
            <br />
            <span>Upload Image</span>
            <br />
            <input
              onChange={hendelBlur}
              type="text"
              name="eventImage"
              placeholder="Image url"
              required
            />
          </div>
        </div>
        <Button
          variant="contained"
          style={{marginLeft: "35px"}}
          color="primary"
          type="submit"
        >
          Add Event
        </Button>
      </form>
    </div>
  );
};

export default Admin__addEvent;
