import React, {useContext} from "react";
import "./Header.css";
import logo from "../../source/logos/Group 1329.png";
import {UserDataContext} from "../../App";
import {Link} from "react-router-dom";
import {Avatar, Button} from "@material-ui/core";
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserDataContext);
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo}></img>
        </Link>
      </div>
      <div>
        <input
          className="header__search"
          type="text"
          placeholder="search anything"
        ></input>
      </div>

      <Link to="/" style={{textDecoration: "none"}}>
        <div>
          <Button style={{padding: "0px 34px"}} color="primary">
            <h3>Home</h3>
          </Button>
        </div>
      </Link>

      <div>
        <Button style={{padding: "0px 34px"}} color="primary">
          <h3>Donation</h3>
        </Button>
      </div>

      <Link to="/event" style={{textDecoration: "none"}}>
        <div>
          <Button style={{padding: "0px 34px"}} color="primary">
            <h3>Event</h3>
          </Button>
        </div>
      </Link>

      <div>
        <Button style={{padding: "0px 34px"}} color="primary">
          <h3>Blog</h3>
        </Button>
      </div>

      <div>
        {/* ---------Registation to volunteer----------- */}

        <h3>
          {loggedInUser.name ? (
            <Button>
              <div style={{display: "flex", alignItems: "center"}}>
                <Avatar
                  style={{border: "solid 3px #6aa1ff"}}
                  src={loggedInUser.profile && loggedInUser.profile}
                />
                <span style={{padding: "8px", color: "gray"}}>
                  {loggedInUser.name}
                </span>
              </div>
            </Button>
          ) : (
            <Link to="/registation" style={{textDecoration: "none"}}>
              <Button
                variant="contained"
                color="primary"
                className="header__loginBtn"
              >
                Register
              </Button>{" "}
            </Link>
          )}
        </h3>
      </div>

      <div>
        {/* ---------Log in as a admin----------- */}
        <h3>
          {loggedInUser.name ? (
            ""
          ) : (
            <Link to="/admin" style={{textDecoration: "none"}}>
              <Button
                variant="contained"
                color="primary"
                className="header__loginBtn"
              >
                Admin
              </Button>
            </Link>
          )}
        </h3>
      </div>
    </div>
  );
};

export default Header;
