import React from 'react';
import { countries } from '../Data/data';
import {NavLink} from 'react-router-dom';

export default class Main extends React.Component {
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
          countries.map((country, index) => {
            return (
              <NavLink className="country" to={country.url} key={index}>
                <img src={country.src} alt={country.country} />
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