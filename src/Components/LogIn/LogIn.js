import React, {useContext} from "react";
import "./LogIn.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import {useHistory, useLocation} from "react-router-dom";
import {UserDataContext} from "../../App";

const LogIn = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserDataContext);
  const history = useHistory();
  const location = useLocation();
  const {from} = location.state || {from: {pathname: "/"}};

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const {displayName, email, photoURL} = result.user;
        const signedInUser = {name: displayName, email, profile: photoURL};
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch(function (error) {
        const errorMessage = error.message;
      });
  };

  return (
    <div className="login">
      <div className="login__middle">
        <div class="google-btn" onClick={handleGoogleSignIn}>
          <div class="google-icon-wrapper">
            <img
              class="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            />
          </div>
          <p class="btn-text">
            <b>Sign in with google</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
