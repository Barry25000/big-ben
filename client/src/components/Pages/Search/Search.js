// TODO: create shopping

import React from "react";
import Grid from "@mui/material/Grid";
import "./Search.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { items } from "../../../item";

export function Item({ item }) {
  return (
    <Grid item xs={4} style={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "floralwhite" }}>
        <CardMedia
          component="img"
          alt="picture of the watch"
          height="340"
          image={item.imageLink}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
            {item.category}
          </Typography>{" "}
          <br />
          <Typography variant="body1" color="text.secondary">
            {item.description}
          </Typography>{" "}
          <br />
          <Typography gutterBottom variant="h6" color="text.secondary">
            {"Our Low Price $" + item.price}
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
            {item.date_added}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            id="portfolio-button"
            className="pop-on-hover"
            // href={project.liveLink}
            size="small"
          >
            Add to Cart
          </Button>
          {/* <Button
            id="portfolio-button"
            className="pop-on-hover"
            // href={project.gitHub}
            size="small"
          >
            GitHub
          </Button> */}
        </CardActions>
      </Card>
    </Grid>
  );
}

export default function Work() {
  return (
    <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Rolex Watches
      </h1>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}></Grid>
        ))}
        {items.map((item, index) => (
          <Item item={item} key={index} />
        ))}
      </Grid>
    </div>
  );
}
