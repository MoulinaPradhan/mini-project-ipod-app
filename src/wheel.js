import React from "react";
//to use zingtouch
import ZingTouch from "zingtouch";

class Wheel extends React.Component {
  componentDidMount() {
    //once the component has been mounted
    var containerElements = document.getElementById("wheel");

    var activeRegion = ZingTouch.Region(containerElements, undefined, false);

    var childElement = document.getElementById("menu");

    //binding zingtouch to active region where it will detect rotate events
    activeRegion.bind(childElement, "rotate", (event) => {
      var d = event.detail.distanceFromLast;
      const { updateScreen } = this.props;
      //if rotate din one direction
      if (d > 1) {
        //call the function to change the active tab
        updateScreen(3);
      }
      //if rotated in another direction
      else if (d < -1) {
        updateScreen(-3);
      }
    });
  }

  render() {
    const { showInnerScreen, showMenu } = this.props;
    return (
      <div className="container">
        <div className="wheel" id="wheel">
          <div id="menu" className="handle-btn" onClick={showMenu}>
            {" "}
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
          <div className="main-btn" id="toggle" onClick={showInnerScreen}></div>
        </div>
      </div>
    );
  }
}

export default Wheel;
