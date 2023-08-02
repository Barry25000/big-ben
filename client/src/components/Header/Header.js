import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";
import banner from "../../images/Banner.png";

import CardMedia from "@mui/material/CardMedia";

export default function Header() {
  return (
    <>
      <div className="headerParent" style={{ padding: "0px 0px 10px 43px" }}>
        <p id="header-text">BIG BEN Watch Emporium</p>
        <Navigation />
      </div>

      <div className="image-container">
        <CardMedia
          component="img"
          className="color-img"
          style={{
            height: "500px",
            width: "100%",
            margin: "0 auto",
          }}
          image={banner}
          alt="Picture of a ROLEX watch"
        />
      </div>
    </>
  );
}
