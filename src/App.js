import React from "react";
import Wheel from "./wheel";
import Screen from "./Screen";
import Coverflow from "./Coverflow";
import Games from "./Games";
import Settings from "./Settings";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      prevSelected: 1, //the tab which was previously selected in SCREEN Component
      selected: 1, //the tab which is currwntly selected in SCREEN Component
      showScreen: 0, //the screen number which shows
    };
  }
  updateScreen = (h) => {
    var { selected, showScreen } = this.state;
    //if the component being displayed is the screen component
    if (showScreen === 0) {
      var prevSelected = selected;
      //if rotated in one direction(distance from last is positive)
      if (h === 3) selected = (prevSelected + 1) % 5;
      //if rotated in another direction(distance from last is negative)
      else if (h === -3) {
        selected = selected - 1;
        //to keep the tab selected between 1 to 4
        if (selected <= 0) selected = 4;
      }
      this.setState({
        selected: selected,
        prevSelected: prevSelected,
        showScreen: 0,
      });
    }
  };
  showMenu = () => {
    //function to be executed when you click on Menu
    var {
      selected,
      prevSelected,

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
      });
    }
  };
  showInnerScreen = () => {
    //show the screen of active tab
    var {
      selected,
      prevSelected,

      showScreen,
    } = this.state;
    //if not on music screen
    if (showScreen === 0) {
      this.setState({
        selected,
        prevSelected,
        showScreen: selected, //show screen of the active tab
      });
    }
    //if on the music screen
    if (showScreen === 2) {
      this.setState({
        selected,
        prevSelected,
        showScreen: 4,
      });
    }
  };

  render() {
    const { showScreen, selected, prevSelected } = this.state;
    return (
      <div className="App">
        {showScreen === 0 && (
          <Screen selected={selected} prevSelected={prevSelected} />
        )}
        {showScreen === 1 && <Coverflow />}
        {showScreen === 3 && <Games />}
        {showScreen === 4 && <Settings />}
        <Wheel
          updateScreen={this.updateScreen}
          showInnerScreen={this.showInnerScreen}
          showMenu={this.showMenu}
        />
      </div>
    );
  }
}

export default App;
