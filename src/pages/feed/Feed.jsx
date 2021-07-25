import React from "react";
import "./feed.scss"
import Navbar from "../navbar/Navbar";
import Status from "../status/Status"
import Status1 from "../status1/Status1";

function Feed() {
  return <div className="feed-container">
      <Navbar />
      <Status />
      <Status1 />
  </div>;
}

export default Feed;
