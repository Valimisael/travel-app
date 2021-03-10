import React from 'react';
import './Home.scss';

import { COUNTRIES } from '../../Data/data';
import { NavLink } from 'react-router-dom';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.settings = this.props.settings;
    this.state = this.props.state;
  }


  render () {
    return (
      <main>
        <div className="countries">
        {
          COUNTRIES.map((country) => {
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
  }
}