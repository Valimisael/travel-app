import { DEFAULTLANGUAGE, WEATHERAPIURL, WEATHERICONURL } from "../Data/data";
const DIFFERENCEBETWEENKELVINANDCELSIUM = 273.15;
const CURRENTWEATHERINDEX = 0;

export default class GetWeather {
  constructor(lang = DEFAULTLANGUAGE, capital, updateState) {
    this.lang = lang;
    this.capitalOnDefaultLanguage = capital;
    this.updateState = updateState;
    this.updateWeather();
  }

  updateWeather () {
    fetch(WEATHERAPIURL(this.capitalOnDefaultLanguage, this.lang))
      .then(res => res.json())
      .then(data => {
        this.description = data.weather[CURRENTWEATHERINDEX].description;
        this.temp = this.toCelsium(data.main.temp);
        this.feelsLike = this.toCelsium(data.main.feels_like);
        this.humidity = data.main.humidity;
        this.windSpeed = Math.round(data.wind.speed);
        const icon = data.weather[CURRENTWEATHERINDEX].icon;
        this.iconURL = WEATHERICONURL(icon);
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