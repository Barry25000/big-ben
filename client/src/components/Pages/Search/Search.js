import React from "react";
import Grid from "@mui/material/Grid";
import "./Search.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import { projects } from "../../../projects";

export function Project({ project }) {
  return (
    <Grid item xs={4} style={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "floralwhite" }}>
        <CardMedia
          component="img"
          alt="picture of the projects with links"
          height="140"
          image={project.imageLink}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.projectTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            id="portfolio-button"
            className="pop-on-hover"
            href={project.liveLink}
            size="small"
          >
            Live URL
          </Button>
          <Button
            id="portfolio-button"
            className="pop-on-hover"
            href={project.gitHub}
            size="small"
          >
            GitHub
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default function Work() {
  return (
    <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Portfolio</h1>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}></Grid>
        ))}
        {/* {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))} */}
      </Grid>
    </div>
  );
}
