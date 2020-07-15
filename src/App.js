import React from "react";
import Wheel from "./wheel";
import Screen from "./Screen";
import Coverflow from "./Coverflow";
import Games from "./Games";
import Settings from "./Settings";
import Music from "./Music";
import Songs from "./Songs";
import Artist from "./Artist";
import Playlist from "./Playlist";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      prevSelected: 1, //the tab which was previously selected in SCREEN Component
      selected: 1, //the tab which is currwntly selected in SCREEN Component
      showScreen: 0, //the screen number which shows
      mselected: 1, //the music tab selected
      pmselected: 1, // the previous  music tab that is selected
    };
  }
  updateScreen = (h) => {
    var { selected, showScreen, mselected, pmselected } = this.state;
    //if the component being displayed is the screen component
    if (showScreen === 0) {
      var prevSelected = selected;
      //if rotated in one direction(distance from last is positive)
      if (h === 1) selected = (prevSelected + 1) % 5;
      //if rotated in another direction(distance from last is negative)
      else if (h === -1) {
        selected = selected - 1;
        //to keep the tab selected between 1 to 4
        if (selected <= 0) selected = 4;
      }
      this.setState({
        selected: selected,
        prevSelected: prevSelected,
        showScreen: 0,
        mselected: mselected,
        pmselected,
      });
    } else if (showScreen === 2) {
      var pmselected = mselected;
      // rotated in one direction
      if (h === 1) mselected = (mselected + 1) % 4;
      // rotated in another direction
      else if (h === -1) {
        mselected = mselected - 1;
        if (mselected <= 0) mselected = 1;
      }
      this.setState({
        selected: selected,
        prevSelected: prevSelected,
        showScreen: 2,
        mselected: mselected,
        pmselected,
      });
    }
  };
  showMenu = () => {
    //function to be executed when you click on Menu
    var {
      selected,
      prevSelected,
      mselected,
      pmselected,
      showScreen,
    } = this.state;
    if (
      showScreen === 1 ||
      showScreen === 2 ||
      showScreen === 3 ||
      showScreen === 4
    ) {
      this.setState({
        selected: selected,
        prevSelected: prevSelected,
        showScreen: 0, //show the screen number zero
        mselected: mselected, //the music tab that is selected
        pmselected, //the previously selected music tab
      });
    } //when inside the music tab
    else {
      this.setState({
        selected: selected,
        prevSelected: prevSelected,
        showScreen: 2, //show the screen number zero
        mselected: mselected,
        pmselected,
      });
    }
  };
  displayInnerScreen = () => {
    //show the screen of active tab
    var {
      selected,
      prevSelected,
      mselected,
      pmselected,
      showScreen,
    } = this.state;
    //if not on music screen
    if (showScreen === 0) {
      this.setState({
        selected,
        prevSelected,
        mselected: mselected,
        pmselected: pmselected,
        showScreen: selected, //show screen of the active tab
      });
    }
    //if on the music screen
    if (showScreen === 2) {
      this.setState({
        selected,
        prevSelected,
        showScreen: 4 + mselected,
        mselected,
        pmselected,
      });
    }
  };

  render() {
    const {
      showScreen,
      selected,
      prevSelected,
      mselected,
      pmselected,
    } = this.state;
    return (
      <div className="App">
        {showScreen === 0 && (
          <Screen selected={selected} prevSelected={prevSelected} /> //by destructuring
        )}
        {showScreen === 1 && <Coverflow />}
        {showScreen === 2 && (
          <Music mselected={mselected} pmselected={pmselected} />
        )}
        {showScreen === 3 && <Games />}
        {showScreen === 4 && <Settings />}
        {showScreen === 5 && <Songs />}
        {showScreen === 6 && <Artist />}
        {showScreen === 7 && <Playlist />}
        <Wheel
          updateScreen={this.updateScreen}
          displayInnerScreen={this.displayInnerScreen}
          showMenu={this.showMenu}
        />
      </div>
    );
  }
}

export default App;
