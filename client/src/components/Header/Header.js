import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

export default function Header() {
  return (
    <div className="headerParent" style={{ padding: "0px 0px 10px 43px" }}>
      <p id="header-text">Big Ben Watch Emporium</p>
      <Navigation />
    </div>
  );
}
