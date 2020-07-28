import React from "react";
import Headbar from "./Headbar";

class ThankYou extends React.Component {
  render() {
    return (
      <div className="innerScreen" style={{backgroundColor:"black"}}>
        <Headbar />
        <div classname="music-text">
          <img
            id="cd"
            alt="cd"
            src="https://image.flaticon.com/icons/svg/3225/3225539.svg"
          />
          <p id="music-name">Downhill-helix.mp3</p>
        </div>
       
        <audio
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
          autoPlay
        />

        <div className="animation-bar-2">
          <span style={{ width: 161 }}></span>
        </div>
      </div>
    );
  }
}

export default ThankYou;
