import React from "react";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import Page_1 from "./Pages/Page_1/Page_1";
import Page_2 from "./Pages/Page_2/Page_2";

export default function SiteContainer({ currentPage, setCurrentPage }) {
  if (currentPage === "Home") {
    return <Home />;
  }
  if (currentPage === "Search") {
    return <Search />;
  }
  if (currentPage === "Page_1") {
    return <Page_1 />;
  }
  return <Page_2 />;
}
