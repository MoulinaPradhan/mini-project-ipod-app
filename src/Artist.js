import React from "react";

class Artist extends React.Component {
  render() {
    return (
      <div className=" innerScreen">
        <div id="battery">
          <img src="https://image.flaticon.com/icons/svg/3103/3103446.svg" />
        </div>
        <div id="slider">
          <input type="radio" name="slider" id="s1"></input>
          <input type="radio" name="slider" id="s2" />
          <input type="radio" name="slider" id="s3" checked />
          <input type="radio" name="slider" id="s4" />
          <input type="radio" name="slider" id="s5" />
          <label for="s1" id="slide1">
            <p className="singers-name"> zayn mallik</p>
          </label>
          <label for="s2" id="slide2">
            <p className="singers-name">eminem</p>
          </label>
          <label for="s3" id="slide3">
            <p className="singers-name">taylor swift</p>
          </label>
          <label for="s4" id="slide4">
            <p className="singers-name">john legend</p>
          </label>
          <label for="s5" id="slide5">
            <p className="singers-name">adele</p>
          </label>
        </div>
      </div>
    );
  }
}
export default Artist;
