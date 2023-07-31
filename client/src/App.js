import React from "react";
import SiteContainer from "./components/SiteContainer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

const App = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <SiteContainer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </div>
  );
};

export default App;
