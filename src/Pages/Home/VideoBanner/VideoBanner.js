import React from "react"
import ReactPlayer from "react-player";
import "./VideoBanner.css";
const VideoBanner = () => {
  return (
    <div className="container mt-5">
      <ReactPlayer url="https://youtu.be/viHILXVY_eU" />
    </div>
  );
};

export default VideoBanner;
