import React from "react";
import Headbar from "./Headbar";

class Video extends React.Component {
  render() {
    return (
      <div className=" innerScreen" style={{ backgroundColor: "black" }}>
        <Headbar />
        <div className="video-container">
          <video
            autoPlay
            id="video"
            src="https://sachinchoolur.github.io/lightGallery/static/videos/video2.mp4"
          ></video>
        </div>
        <div className="floatingText-container">
          <p className="floating-text">Playing : Rollin Wild</p>
        </div>
        <div className="animation-bar-1">
          <span style={{ width: 170 }}></span>
        </div>
      </div>
    );
  }
}

export default Video;
