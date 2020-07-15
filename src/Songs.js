import React from "react";

const Songs = () => {
  return (
    <div className=" innerScreen">
      <h1 className="textHeading">all songs</h1>
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
