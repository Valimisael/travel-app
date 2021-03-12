import React from 'react';

export default class DateAndTime extends React.Component {
  constructor(props) {
    super(props);
    this.country = this.props.country;
    this.settings = this.props.settings;

    this.state = {
      time: '',
      month: '',
      day: '',
      weekDay: '',
    }
  }

  tick = () => {
    const date = new Date();

    this.setState({
      time: date.toLocaleTimeString(this.settings.lang, {timeZone: this.country.timeZone}),
      month: date.toLocaleDateString(this.settings.lang, {month: 'long'}),
      day: date.getDate(),
      weekDay: date.toLocaleDateString(this.settings.lang, {weekday: 'long'}),
    })
  }

  componentDidMount() {
    setInterval(() => {
      this.tick();
    }, 1000);
  }

  render() {
    return (
      <div className="date-and-time">
        <div className="time">{this.state.time}</div>
        <div className="date">{`${this.state.month}, ${this.state.day}`}</div>
        <div className="day">{this.state.weekDay}</div>
      </div>
    )
  }
}