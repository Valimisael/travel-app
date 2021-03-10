import React from 'react';
import { common } from '../Data/data';
import Currency from './Currency';
import Gallery from './Gallery';
import { Player, BigPlayButton } from 'video-react';

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
    const data = common[lang];

    return (
      <main>
        <div className="hero">
          <img src={country.src} alt={country.country} />
          <div className="hero__details">
            <h1>{country.translations[lang].country}</h1>
            <h2>{country.translations[lang].capital}</h2>
          </div>
        </div>
        <div className="country__wrapper">
          <div className="country__info">
            <div className="country__description">
              <h2 className="country__title">{`${data.about}`}</h2>
              <div className="country__description-text">{country.translations[lang].description}</div>
            </div>
            <div className="country__gallery">
              <h2 className="country__title">{`${country.translations[lang].country} ${data.inPhotos}`}</h2>
              <Gallery images={country.gallery} settings={this.settings}/>
            </div>
            <div className="country__video">
              <h2 className="country__title">{data.video}</h2>           
              <Player playsInline poster={country.poster} src={country.video}>
                <BigPlayButton position="center" />
              </Player>
            </div>
          </div>
          <div className="country__widgets">
            <Currency settings={this.settings} country={this.country} updateState = {this.updateState} />
          </div>
        </div>
      </main>
    )
  }
}