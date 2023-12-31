import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN_USER, ADD_USER } from "../../../utils/mutations";
import Auth from "../../../utils/auth";
import "./style.css";
// ////////////////////////////////////////////////////
//new stuff

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// import { ADD_USER } from "../../utils/mutations";
// import { LOGIN_USER } from "../../utils/mutations";

// Login component
function LogIn(props) {
  // set initial form state
  const [formState, setFormState] = useState({ email: "", password: "" });
  // error state
  const [LogIn, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const mutationResponse = await LogIn({
        variables: { email: formState.email, password: formState.password },
      });
      console.log(mutationResponse);
      const token = mutationResponse.data.LogIn.token;
      Auth.login(token);
    } catch (e) {
      console.log("login failed");
      console.log(JSON.stringify(e));
    }
    setFormState({ email: "", password: "" });
  };

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my1">
      <Link to="/login">← Go to Signup</Link>
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            value={formState.email}
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            value={formState.password}
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">
              The provided credentials are incorrect!
            </p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
// export
