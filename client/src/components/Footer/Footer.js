import React from "react";
import "./Footer.css";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
      <Grid
        style={{ display: "flex", justifyContent: "center" }}
        container
        sx={{ color: "text.primary" }}
      >
        <Grid
          style={{ display: "flex", justifyContent: "space-evenly" }}
          item
          xs={4}
        >
          <LinkedInIcon
            id="icon"
            className="pop-on-hover"
            sx={{ fontSize: 50 }}
            onClick={(event) =>
              (window.location.href =
                "https://www.linkedin.com/in/barry-engler-745624182/")
            }
          />

          <EmailIcon
            id="icon"
            className="pop-on-hover"
            sx={{ fontSize: 50 }}
            onClick={(event) =>
              (window.location.href = "mailto:big-ben@gmail.com")
            }
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
