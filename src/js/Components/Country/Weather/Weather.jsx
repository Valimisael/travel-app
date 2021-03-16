import React from 'react';
import PropTypes from 'prop-types';
import { COMMON } from '../../../Data/data';
import GetWeather from '../../../Settings/GetWeather';
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
        <div className="weather">
          <img src = {this.weather.iconURL} alt = 'current weather'/>
          <div className="weather__item">{this.weather.description}</div>
          <div className="weather__item">{weatherTranslations.temp}: {this.weather.temp} °</div>
          <div className="weather__item">{weatherTranslations.feelsLike}: {this.weather.feelsLike} °</div>
          <div className="weather__item">{weatherTranslations.humidity}: {this.weather.humidity} %</div>
          <div className="weather__item">{weatherTranslations.wind}: {this.weather.windSpeed} {weatherTranslations.windSpeed}</div>
        </div>
      </div>
    )
  }
}

Weather.propTypes = {
  country: PropTypes.shape({
    countryCode: PropTypes.string,
    currencyShortCode: PropTypes.string,
    gallery: PropTypes.array,
    map: PropTypes.shape({
      borders: PropTypes.string,
      geo: PropTypes.array,
      zoom: PropTypes.number
    }),
    name: PropTypes.string,
    poster: PropTypes.string,
    src: PropTypes.string,
    thumb: PropTypes.string,
    timeZone: PropTypes.string,
    translations: PropTypes.objectOf(PropTypes.shape({
      capital: PropTypes.string,
      country: PropTypes.string,
      currencyName: PropTypes.string,
      description: PropTypes.string
    })),
    url: PropTypes.string,
    video: PropTypes.string
  }),
  settings: PropTypes.shape({
    lang: PropTypes.string,
    search: PropTypes.string
  }),
  updateState: PropTypes.func
};