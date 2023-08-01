import React from "react";
import "./Navigation.css";
// import Box from "@mui/material/Box";
// import { Button } from "@mui/material";
// import useTab from "@mui/base/useTab";

const pages = ["Home", "Search", "Page_1", "Page_2"];

function Navigation() {
  return (
    <ul
      className="nav nav-tabs"
      style={{ paddingRight: "55px", paddingTop: "30px" }}
    >
      <li className="nav-item">
        <a
          id="nav-link"
          href="/"
          className={true ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          id="nav-link"
          href="/search"
          className={true ? "nav-link active" : "nav-link"}
        >
          Search
        </a>
      </li>
      <li className="nav-item">
        <a
          id="nav-link"
          href="/Login"
          className={true ? "nav-link active" : "nav-link"}
        >
          LogIn
        </a>
      </li>
      <li className="nav-item">
        <a
          id="nav-link"
          href="/Page_2"
          className={true ? "nav-link active" : "nav-link"}
        >
          Page_2
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
