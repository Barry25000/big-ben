import React from "react";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
// import LogIn from "./Pages/LogIn/LogIn";
// import Page_2 from "./Pages/Page_2/Page_2";

export default function SiteContainer({ currentPage, setCurrentPage }) {
  if (currentPage === "Home") {
    return <Home />;
  }
  if (currentPage === "Search") {
    return <Search />;
  }
  // if (currentPage === "LogIn") {
  //   return <LogIn />;
  // }
  // return <Page_2 />;
}
