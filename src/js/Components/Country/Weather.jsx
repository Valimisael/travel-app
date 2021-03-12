import React from 'react';
import { COMMON } from '../../Data/data';
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
    const weatherTranslations = COMMON[this.settings.lang].weather;
    return (
      <div className="country__weather">
        <div>{this.weather.description}</div>
        <div>{weatherTranslations.temp}: {this.weather.temp} °</div>
        <div>{weatherTranslations.feelsLike}: {this.weather.feelsLike} °</div>
        <div>{weatherTranslations.humidity}: {this.weather.humidity} %</div>
        <div>{weatherTranslations.wind}: {this.weather.windSpeed} {weatherTranslations.windSpeed}</div>
        <img src = {this.weather.iconURL} alt = 'current weather'/>
      </div>
    )
  }
}
