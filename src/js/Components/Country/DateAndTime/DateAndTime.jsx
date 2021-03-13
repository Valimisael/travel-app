import React from 'react';
import './DateAndTime.scss';

export default class DateAndTime extends React.Component {
  constructor(props) {
    super(props);
    this.country = this.props.country;
    this.settings = this.props.settings;
    this.timer = null;

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
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="country__date-and-time">
        <div className="date-and-time">
          <div className="time">{this.state.time}</div>
          <div className="date">
            <span>{this.state.month}</span>
            <span>{`, ${this.state.day}`}</span>
          </div>
          <div className="day">{this.state.weekDay}</div>
        </div>
      </div>
    )
  }
}