import React from 'react';
import './Country.scss';

import { COMMON } from '../../Data/data';
import Hero from './Hero.jsx';
import Description from './Description.jsx';
import Gallery from './Gallery.jsx';
import Video from './Video.jsx';
import Currency from './Currency.jsx';
import DateAndTime from './Date/DateAndTime.jsx';
import Weather from './Weather';

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
    const date = new Date();
    const weekDay = date.toLocaleDateString(lang, {weekday: 'long'});
    const month = date.toLocaleDateString(lang, {month: 'long'});
    const day = date.getDate();

    return (
      <main>
        <Hero image={country} content={country.translations[lang]} />
        <div className="country__wrapper">
          <div className="country__info">
            <Description title={data.about} description={country.translations[lang].description} />
            <Gallery title={country.translations[lang].country} images={country.gallery} settings={this.settings}/>
            <Video video={data.video} country={country} />
          </div>
          <div className="country__widgets">
            <Currency settings={this.settings} country={this.country} updateState = {this.updateState} />
            <DateAndTime country={this.country} settings={this.settings} month={month} day={day} weekDay={weekDay} />
            <Weather settings={this.settings} country={this.country} updateState = {this.updateState} />
          </div>
        </div>
      </main>
    )
  }
}