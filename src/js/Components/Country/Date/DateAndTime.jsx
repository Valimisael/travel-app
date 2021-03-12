import React from 'react';

export default class DateAndTime extends React.Component {
  constructor(props) {
    super(props);
    this.country = this.props.country;
    this.settings = this.props.settings;

    this.state = {
      time: '',
    }
  }

  tick = () => {
    this.setState({
      time: new Date().toLocaleTimeString(this.settings.lang, {timeZone: this.country.timeZone}),
    })
  }

  componentDidMount() {
    setInterval(() => {
      this.tick();
    }, 1000);
  }

  render() {
    const {month, day, weekDay} = this.props;

    return (
      <div className="date-and-time">
        <div className="time">{this.state.time}</div>
        <div className="date">{`${month}, ${day}`}</div>
        <div className="day">{weekDay}</div>
      </div>
    )
  }
}