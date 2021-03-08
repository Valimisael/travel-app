import React from 'react';
import { countries } from '../Data/data';
import Gallery from './Gallery';

export default class Country extends React.Component {
  render () {
    const country = countries[2];

    return (
      <main>
        <div className="hero">
          <img src={country.src} alt={country.country} />
          <div className="hero__details">
            <h1>{country.country}</h1>
            <h2>{country.capital}</h2>
          </div>
        </div>
        <div className="country__wrapper">
          <div className="country__info">
            <div className="country__description">
              <h2 className="country__title">{`About ${country.country}`}</h2>
              <div className="country__description-text">{country.description}</div>
            </div>
            <div className="country__gallery">
              <h2 className="country__title">{`${country.country} in photos`}</h2>
              <Gallery images={country.gallery} />
            </div>
          </div>
          <div className="country__widgets"></div>
        </div>
      </main>
    )
  }
}