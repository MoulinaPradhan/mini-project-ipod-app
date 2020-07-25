import React from "react";
import Headbar from "./Headbar";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

class Coverflow extends React.Component {
  state = {
    date: new Date(),
  };
  onChange = (date) => this.setState({ date });
  render() {
    return (
      <div className=" innerScreen">
        <Headbar />

        <Calendar onChange={this.onChange} value={this.state.date} />
      </div>
    );
  }
}
export default Coverflow;
