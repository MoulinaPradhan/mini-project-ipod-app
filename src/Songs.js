import React from "react";
import Headbar from "./Headbar";

const Songs = () => {
  return (
    <div className=" innerScreen">
      <Headbar />
      <div className="video-container">
        <video
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          controls
          autoPlay
        ></video>
      </div>
    </div>
  );
};

export default Songs;
