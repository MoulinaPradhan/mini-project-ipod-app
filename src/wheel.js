import React from "react";
import ZingTouch from "zingtouch/src/ZingTouch";

class Wheel extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="screen"></div>
        <div className="wheel">
          <div id="menu" className="handle-btn">
            MENU
          </div>
          <div id="forward" className="handle-btn">
            <img src="https://www.svgrepo.com/show/39437/fast-forward.svg" />
          </div>
          <div id="backward" className="handle-btn">
            <img src="https://www.svgrepo.com/show/39437/fast-forward.svg" />
          </div>
          <div id="pause" className="handle-btn">
            <img src="https://www.svgrepo.com/show/204978/play.svg" />
            <img
              id="pause-img"
              src="https://www.svgrepo.com/show/122186/pause.svg"
            />
          </div>
          <div className="main-btn"></div>
        </div>
      </div>
    );
  }
}

export default Wheel;
