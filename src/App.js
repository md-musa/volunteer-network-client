import React, {createContext, useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import NotFound from "./Components/NotFound/NotFound";
import Home from "./Components/Home/Home";
import Registation from "./Components/RegisterToNewEvent/RegisterToNewEvent";
import Admin__registeredVolunteerList from "./Components/Admin__registeredVolunteerList/Admin__registeredVolunteerList";
import Header from "./Components/Header/Header";
import LogIn from "./Components/LogIn/LogIn";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AttendedEvenet__home from "./Components/AttendedEvent__home/AttendedEvenet__home";
import AdminHome from "./Components/AdminHome/AdminHome";

export const EventDetailsToForm = createContext();
export const UserDataContext = createContext();

function App() {
  const [eventDetails, setEventDetails] = useState({});
  const [loggedInUser, setLoggedInUser] = useState({
    email: "",
    name: "",
    profile: "",
  });

  return (
    <div className="App">
      <EventDetailsToForm.Provider value={[eventDetails, setEventDetails]}>
        <UserDataContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <PrivateRoute path="/registation">
                <Registation />
              </PrivateRoute>

              <PrivateRoute path="/event">
                <AttendedEvenet__home />
              </PrivateRoute>

              <Route path="/admin-volunteer-registation-list">
                <Admin__registeredVolunteerList />
              </Route>

              <Route path="/login">
                <LogIn></LogIn>
              </Route>

              <Route path="/admin">
                <AdminHome />
              </Route>

              <PrivateRoute path="registaion">
                <Registation />
              </PrivateRoute>

              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </UserDataContext.Provider>
      </EventDetailsToForm.Provider>
    </div>
  );
}
export default App;
