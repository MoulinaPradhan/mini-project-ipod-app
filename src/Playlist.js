import React from "react";

class Playlist extends React.Component {
  render() {
    return (
      <div className=" innerScreen">
        <h1 className="textHeading">Playlist</h1>
        <div className="audio-bar">
          <img
            alt="audio-img"
            className="audio-img"
            src="https://fullplot.info/wp-content/uploads/2020/07/downhill.jpg"
          />
          <audio controls autoPlay>
            <source
              type="audio/mpeg"
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
            />
          </audio>
        </div>
      </div>
    );
  }
}

export default Playlist;
