import { DEFAULTLANGUAGE, WEATHERAPIURL, WEATHERICONURL } from "../Data/data";
const DIFFERENCEBETWEENKELVINANDCELSIUM = 273.15;
const CURRENTWEATHERINDEX = 0;

export default class GetWeather {
  constructor(lang = DEFAULTLANGUAGE, country, updateState) {
    this.lang = lang;
    this.capitalOnDefaultLanguage = country.translations[DEFAULTLANGUAGE].capital;
    this.updateState = updateState;
    this.updateWeather();
  }

  updateWeather () {
    fetch(WEATHERAPIURL(this.capitalOnDefaultLanguage, this.lang))
      .then(res => res.json())
      .then(data => {
        this.capital = data.name;
        this.feelsLike = this.toCelsium(data.main.feels_like);
        this.humidity = data.main.humidity;
        this.temp = this.toCelsium(data.main.temp);
        this.description = data.weather[CURRENTWEATHERINDEX].description;
        const icon = data.weather[CURRENTWEATHERINDEX].icon;
        this.iconURL = WEATHERICONURL(icon);
        this.windSpeed = data.wind.speed;
        this.windDirection = data.wind.deg;
        this.updateState();
      })
  }

  toCelsium(deg) {
    return Math.round(deg - DIFFERENCEBETWEENKELVINANDCELSIUM);
  }

  checkIfLangIsChangedAndUpdateStage (lang) {
    if (this.lang !== lang) {
      this.lang = lang;
      this.updateWeather();
    }
  }
}