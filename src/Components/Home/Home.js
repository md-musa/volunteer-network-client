import React, {useEffect, useState} from "react";
import "./Home.css";
import EventCard from "../EventCard/EventCard";
import {Button} from "@material-ui/core";

const Home = () => {
  const [eventCollection, setEventCollection] = useState([]);

  useEffect(() => {
    fetch("https://polar-fjord-95949.herokuapp.com/event-collection")
      .then((res) => res.json())
      .then((data) => setEventCollection(data))
      .catch((err) => console.log(err));
  }, []);

  const colorList = [
    "#3F90FC",
    "#421FCF",
    "#FFBD3E",
    "#FF7044",
    "#27AE60",
    "#9B51E0",
  ];
  const handelRandomColor = () => {
    const colorIndex = Math.floor(Math.random() * 5) + 1;
    return colorIndex;
  };

  return (
    <div>
      <div style={{textAlign: "center", background: "#f0f2f5"}}>
        <h2 style={{color: "gray"}}>I GROW BY HELPING PEOPLE IN NEED</h2>
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
        />
        <Button variant="contained" color="primary" className="searchButton">
          Search
        </Button>
      </div>

      <div className="event-container">
        {eventCollection.map((singleEvent) => (
          <EventCard
            eventDetails={{
              eventTitle: singleEvent.eventTitle,
              eventImage: singleEvent.eventImage,
              bgColor: colorList[handelRandomColor()],
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
