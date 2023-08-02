import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
// import Box from "@mui/material/Box";
// import { Button } from "@mui/material";
// import useTab from "@mui/base/useTab";
//hello please delete me

// const pages = ["Home", "Search", "Page_1", "Page_2"];

function Navigation() {
  return (
    <ul
      className="nav nav-tabs"
      style={{ paddingRight: "45px", paddingTop: "30px" }}
    >
      <li className="nav-item">
        <a
          id="nav-link"
          href="/"
          className={true ? "nav-link active" : "nav-link"}
        >
          HOME
        </a>
      </li>
      <li className="nav-item">
        <Link to="/search">
          <a id="nav-link" className={true ? "nav-link active" : "nav-link"}>
            SHOP
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login">
          <a id="nav-link" className={true ? "nav-link active" : "nav-link"}>
            LOGIN
          </a>
        </Link>
      </li>
      {/* <li className="nav-item">
        <a
          id="nav-link"
          href="/Page_2"
          className={true ? "nav-link active" : "nav-link"}
        >
          Page_2
        </a>
      </li> */}
    </ul>
  );
}

export default Navigation;
