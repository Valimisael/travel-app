import React from 'react';
import GetWeather from '../../Settings/GetWeather';
import './Weather.scss';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.settings = this.props.settings;
    this.country = this.props.country;
    this.updateState = this.props.updateState.bind(this);
    this.stateCallback = this.stateCallback.bind(this);
    this.weather = new GetWeather(this.settings.lang, this.country, this.stateCallback);
    
  }

  stateCallback() {
    this.updateState(this.settings);
  }

  render() {
    this.weather.checkIfLangIsChangedAndUpdateStage(this.settings.lang);
    return (
      <div className="country__weather">
        <div>Город: {this.weather.capital} </div>
        <div>Ощущается: {this.weather.feelsLike} °</div>
        <div>Температура: {this.weather.temp} °</div>
        <div>Влажность: {this.weather.humidity} %</div>
        <div>Ветер: {this.weather.windSpeed} м/с</div>
        <div>Направление: {this.weather.windDirection} °</div>
        <div>Облачность: {this.weather.description}</div>
        <img src = {this.weather.iconURL} alt = 'current weather'/>
      </div>
    )
  }
}
