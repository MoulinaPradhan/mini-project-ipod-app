import React from "react";

class Headbar extends React.Component {
  componentDidMount() {
    function clock() {
      var hours = document.getElementById("hours");
      var minutes = document.getElementById("minutes");
      var seconds = document.getElementById("seconds");
      var h = new Date().getHours();
      var m = new Date().getMinutes();
      var s = new Date().getSeconds();

      hours.innerHTML = h;
      minutes.innerHTML = m;
      seconds.innerHTML = h;
    }
    this.interval = setInterval(clock, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="Headbar">
        <div className="headBar">
          {" "}
          <div id="battery">
            <img src="https://image.flaticon.com/icons/svg/3103/3103446.svg" />
          </div>
          <div id="clock">
            <div id="hours">00</div>
            <span>:</span>
            <div id="minutes">00 </div>
            <div id="seconds">00</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Headbar;
