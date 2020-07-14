import React from "react";
//to use zingtouch
import ZingTouch from "zingtouch";

class Wheel extends React.Component {
  componentDidMount() {
    //once the component has been mounted
    var containerElements = document.getElementById("wheel");
    //setting the wheel element as the active region for rotation
    var activeRegion = ZingTouch.Region(containerElements, undefined, false);
    //for initilizing the rotate event from menu

    var childElement = document.getElementById("menu");

    //binding zingtouch to active region for rotate event
    activeRegion.bind(childElement, "rotate", (event) => {
      var d = event.detail.distanceFromLast;
      const { updateScreen } = this.props;
      //if rotated in  one direction
      if (d > 1) {
        //call the function to change the active tab
        updateScreen(1);
      }
      //if rotated in another direction
      else if (d < -1) {
        updateScreen(-1);
      }
    });
  }

  render() {
    const { displayInnerScreen, showMenu } = this.props;
    return (
      <div className="container">
        <div className="wheel" id="wheel">
          <div id="menu" className="handle-btn" onClick={showMenu}>
            {" "}
            MENU
          </div>
          <div id="forward" className="handle-btn">
            <img
              src="https://www.svgrepo.com/show/39437/fast-forward.svg"
              alt="fast-forward"
            />
          </div>
          <div id="backward" className="handle-btn">
            <img
              src="https://www.svgrepo.com/show/39437/fast-forward.svg"
              alt="fast-backward"
            />
          </div>
          <div id="pause" className="handle-btn">
            <img
              src="https://www.svgrepo.com/show/204978/play.svg"
              alt="pause"
            />
            <img
              id="pause-img"
              src="https://www.svgrepo.com/show/122186/pause.svg"
              alt="button"
            />
          </div>
        </div>
        <div
          className="main-btn"
          id="toggle"
          onClick={displayInnerScreen}
        ></div>
      </div>
    );
  }
}

export default Wheel;
