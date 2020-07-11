import React from "react";
//to use zingtouch
import ZingTouch from "zingtouch";

class Wheel extends React.Component {
  showMenu = () => {
    console.log("menu is shown");
  };
  render() {
    return (
      
      <div className="container">
        <div className="wheel">
          <div id="menu" className="handle-btn" onClick={this.showMenu}>
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
