import React from "react";
import "./Navigation.css";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import useTab from "@mui/base/useTab";

const pages = ["Home", "Search", "Page_1", "Page_2"];

function Navigation({ currentPage, setCurrentPage, handleCloseNavMenu }) {
  return (
    <ul
      className="nav nav-tabs"
      style={{ paddingRight: "55px", paddingTop: "30px" }}
    >
      <li className="nav-item">
        <a
          id="nav-link"
          href="#about"
          onClick={() => setCurrentPage("Home")}
          className={currentPage === "Homet" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          id="nav-link"
          href="#portfolio"
          onClick={() => setCurrentPage("Search")}
          className={currentPage === "Search" ? "nav-link active" : "nav-link"}
        >
          Search
        </a>
      </li>
      <li className="nav-item">
        <a
          id="nav-link"
          href="#Contact"
          onClick={() => setCurrentPage("Page_1")}
          className={currentPage === "Page_1" ? "nav-link active" : "nav-link"}
        >
          Page_1
        </a>
      </li>
      <li className="nav-item">
        <a
          id="nav-link"
          href="#resume"
          onClick={() => setCurrentPage("Page_2")}
          className={currentPage === "Page_2" ? "nav-link active" : "nav-link"}
        >
          Page_2
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
