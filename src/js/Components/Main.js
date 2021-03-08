import React from 'react';
import { countries } from '../Data/data'

export default class Main extends React.Component {
  render () {
    return (
      <main>
        <div className="countries">
        {
          countries.map((country, index) => {
            return (
              <a className="country" href={country.url} key={index}>
                <img src={country.src} alt={country.country} />
                <div className="country__details">
                  <h2>{country.country}</h2>
                  <h3>{country.capital}</h3>
                </div>
              </a>
            )
          })
        }
        </div>
      </main>
    )
  }
}