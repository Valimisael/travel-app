import React from 'react';
import PropTypes from 'prop-types';
import './Country.scss';
import { COMMON } from '../../Data/data';
import Hero from './Hero/Hero.jsx';
import Description from './Description/Description.jsx';
import Gallery from './Gallery/Gallery.jsx';
import Video from './Video/Video.jsx';
import CountryMap from './Map/CountryMap.jsx';
import Currency from './Currency/Currency.jsx';
import DateAndTime from './DateAndTime/DateAndTime.jsx';
import Weather from './Weather/Weather.jsx';

export default class Country extends React.Component {
  constructor(props) {
    super(props);
    this.settings = this.props.settings;
    this.country = this.props.country;
    this.updateState = this.props.updateState.bind(this);
  }

  render () {
    const country = this.country;
    const lang = this.settings.lang;
    const data = COMMON[lang];

    return (
      <main>
        <Hero image={country.src} title={country.name} country={country.translations[lang].country} capital={country.translations[lang].capital} />
        <div className="country__wrapper">
          <div className="country__info">
            <Description title={data.about} description={country.translations[lang].description} />
            <Gallery title={country.translations[lang].country} images={country.gallery} settings={this.settings}/>
            <Video title={data.video} poster={country.poster} video={country.video} />
            <CountryMap map={country.map} title={`${country.translations[lang].country} ${data.map}`} />
          </div>
          <div className="country__widgets">
            <DateAndTime timeZone={this.country.timeZone} settings={this.settings} />
            <Weather settings={this.settings} country={this.country} updateState = {this.updateState} />
            <Currency settings={this.settings} country={this.country} updateState = {this.updateState} />
          </div>
        </div>
      </main>
    )
  }
}

Country.propTypes = {
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