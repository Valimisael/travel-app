import React from 'react';
import PropTypes from 'prop-types';
import './DateAndTime.scss';

export default class DateAndTime extends React.Component {
  constructor(props) {
    super(props);
    this.timeZone = this.props.timeZone;
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
      time: date.toLocaleTimeString(this.settings.lang, {timeZone: this.timeZone}),
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

DateAndTime.propTypes = {
  timeZone: PropTypes.string,
  settings: PropTypes.shape({
    lang: PropTypes.string,
    search: PropTypes.string
  })
}