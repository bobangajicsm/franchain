import React from "react";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Process from "./components/Process/Process";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="page-container">
      <Jumbotron />
      <Process />
    </div>
  );
};

export default Home;
