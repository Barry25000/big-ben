import React from "react";
import "./Home.css";
import Banner from "../../../images/Banner.png";
import CardMedia from "@mui/material/CardMedia";

export default function Home() {
  return (
    <>
      <div className="image-container">
        <CardMedia
          component="img"
          className="color-img"
          style={{
            height: "auto",
            width: "100%",
            margin: "0 auto",
            // paddingTop: "20px",
          }}
          image={Banner}
          alt="Home Page"
        />
      </div>

      <div style={{ width: "70%", margin: "0 auto" }}>
        <h1 id="about-me-title">Big Ben Watch Emporium</h1>
        <p id="p-about">
          Here at Big Ben Watch Emporium you can buy your high end watch with
          confidence. All our watches are unconditionally guarenteed to be 100
          percent athentic, each watch comes with a unconditional 2 year
          warranty so you can buy, as well as wear, your watch with zero
          worries.
        </p>
        <p id="p-about">
          Every previously owned watch undergoes a total disasembly, all rubber
          gaskets are replaced as wwell as all springs are tested and replaced
          if needed.
        </p>
        <p id="p-about"></p>
        <p id="p-about"></p>
      </div>
    </>
  );
}
