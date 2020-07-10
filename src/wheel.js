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
            <img src="https://image.flaticon.com/icons/svg/1/1824.svg" />
          </div>
          <div id="backward" className="handle-btn">
            <img src="https://image.flaticon.com/icons/svg/39/39395.svg" />
          </div>
          <div id="pause" className="handle-btn">
            <img src="https://image.flaticon.com/icons/svg/2404/2404317.svg" />
          </div>
          <div className="main-btn"></div>
        </div>
      </div>
    );
  }
}

export default Wheel;
