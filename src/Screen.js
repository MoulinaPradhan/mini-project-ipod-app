import React from "react";

class Screen extends React.Component {
  componentDidMount() {
    //once the screen component has been rendered for te very first time
    const { selected } = this.props;
    //based on whichever tab is selcted add active class to it
    if (selected === 1) {
      document.getElementById("list1").classList.add("active");
    } else if (selected === 2) {
      document.getElementById("list2").classList.add("active");
    } else if (selected === 3) {
      document.getElementById("list3").classList.add("active");
    } else if (selected === 4) {
      document.getElementById("list4").classList.add("active");
    }
  }
  componentDidUpdate() {
    //every time the component updates, remove active class from previously selected tab and add it to the nw selected tab
    const { prevSelected, selected } = this.props;
    if (prevSelected === 1)
      document.getElementById("list1").classList.remove("active");
    else if (prevSelected === 2)
      document.getElementById("list2").classList.remove("active");
    else if (prevSelected === 3)
      document.getElementById("list3").classList.remove("active");
    else if (prevSelected === 4)
      document.getElementById("list4").classList.remove("active");
    if (selected === 1)
      document.getElementById("list1").classList.add("active");
    else if (selected === 2)
      document.getElementById("list2").classList.add("active");
    else if (selected === 3)
      document.getElementById("list3").classList.add("active");
    else if (selected === 4)
      document.getElementById("list4").classList.add("active");
  }
  render() {
    return (
      <div className="screen">
        <div id="battery">
          <img src="https://image.flaticon.com/icons/svg/3103/3103446.svg" />
        </div>
        <div className="sideBar">
          <h1>Menu</h1>
          <ul className="menu-list" type="none">
            <li className="listItem" id="list1">
              <a href="#xyz" className="menuLinks">
                calendar
              </a>
            </li>

            <li className="listItem" id="list2">
              <a href="#xyz" className="menuLinks">
                music
              </a>
            </li>
            <li className="listItem" id="list3">
              <a href="#xyz" className="menuLinks">
                games
              </a>
            </li>
            <li className="listItem" id="list4">
              <a href="#xyz" className="menuLinks">
                settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Screen;
