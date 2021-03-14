import React from 'react';
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
        <Hero image={country} content={country.translations[lang]} />
        <div className="country__wrapper">
          <div className="country__info">
            <Description title={data.about} description={country.translations[lang].description} />
            <Gallery title={country.translations[lang].country} images={country.gallery} settings={this.settings}/>
            <Video video={data.video} country={country} />
            <CountryMap geo={this.country.geo} zoom={this.country.zoom} title={`${country.translations[lang].country} ${data.map}`} />
          </div>
          <div className="country__widgets">
            <DateAndTime country={this.country} settings={this.settings} />
            <Weather settings={this.settings} country={this.country} updateState = {this.updateState} />
            <Currency settings={this.settings} country={this.country} updateState = {this.updateState} />
          </div>
        </div>
      </main>
    )
  }
}