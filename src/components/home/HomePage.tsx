import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="jumbotron">
      <h1>Pluralsight Administration</h1>
      <p>React, Reduc and React Router for ultra-responsive web apps.</p>
      <Link to="about" className="btn btn-primary btn-big">
        {" "}
        Learn more
      </Link>
    </div>
  );
};

export default HomePage;
