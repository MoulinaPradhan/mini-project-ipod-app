import React from "react";

class Music extends React.Component {
  componentDidMount() {
    //once the component has rendered for first time.
    const { mselected } = this.props;
    //when a tab is seleted
    if (mselected === 1) {
      document.getElementById("mlist1").classList.add("active");
    } else if (mselected === 2) {
      document.getElementById("mlist2").classList.add("active");
    } else if (mselected === 3) {
      document.getElementById("mlist3").classList.add("active");
    }
  }
  componentDidUpdate() {
    //every time the component updates
    const { mselected, pmselected } = this.props;
    if (pmselected === 1)
      document.getElementById("mlist1").classList.remove("active");
    else if (pmselected === 2)
      document.getElementById("mlist2").classList.remove("active");
    else if (pmselected === 3)
      document.getElementById("mlist3").classList.remove("active");
    if (mselected === 1)
      document.getElementById("mlist1").classList.add("active");
    else if (mselected === 2)
      document.getElementById("mlist2").classList.add("active");
    else if (mselected === 3)
      document.getElementById("mlist3").classList.add("active");
  }
  render() {
    return (
      <div className="screen">
        <div className="sideBar">
          <h1>Music</h1>
          <ul type="none" className="menu-list">
            <li className="musicItems" id="mlist1">
              <a href="#xyz">videoes</a>
            </li>
            <li className="musicItems" id="mlist2">
              <a href="#xyz">artists</a>
            </li>
            <li className="musicItems" id="mlist3">
              <a href="#xyz">playlists</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Music;
