import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../App.css";

function Home() {
  return (
    <div className="Home">
      <center>
        <h1>Github Repo Search Simple Web app</h1>
      </center>
      <Link target={"_blank"} to="/App">
        <center><Button className="buttone"variant="dark">Github Repository Search</Button></center>
      </Link>
    </div>
  );
}
export default Home;
