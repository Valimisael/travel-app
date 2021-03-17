import React from 'react';
import PropTypes from 'prop-types';
import './Home.scss';

import { COUNTRIES, COMMON } from '../../Data/data';
import { NavLink } from 'react-router-dom';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.settings = this.props.settings;
    this.updateState = this.props.updateState.bind(this);
    this.state = this.props.state;
  }

  render () {
    let filteredCountries = [];

    COUNTRIES.forEach((country) => {
      if (country.translations[this.settings.lang].country.toLowerCase().indexOf(this.settings.search.toLowerCase()) !== -1 || 
      country.translations[this.settings.lang].capital.toLowerCase().indexOf(this.settings.search.toLowerCase()) !== -1) {
        filteredCountries.push(country);
      }
    })

    if (filteredCountries.length !== 0) {
      return (
        <main>
          <div className="countries">
          {
            filteredCountries.map((country) => {
              return (
                <NavLink className="country" to={country.url} key={country.name}>
                  <img src={country.thumb} alt={country.country} />
                  <div className="country__details">
                    <h2>{country.translations[this.settings.lang].country}</h2>
                    <h3>{country.translations[this.settings.lang].capital}</h3>
                  </div>
                </NavLink>
              )
            })
          }
          </div>
        </main>
      )
    } else {
      return (
        <main>
          <div className="countries__error">{COMMON[this.settings.lang].error}</div>
        </main>
      )
    }    
  }
}

Home.propTypes = {
  settings: PropTypes.shape({
    lang: PropTypes.string,
    search: PropTypes.string
  }),
  updateState: PropTypes.func
};