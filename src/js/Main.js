import React from 'react';
import australia from '../img/countries-cards/australia.jpg';
import brazil from '../img/countries-cards/brazil.jpg';
import england from '../img/countries-cards/england.jpg';
import greece from '../img/countries-cards/greece.jpg';
import japan from '../img/countries-cards/japan.jpg';
import russia from '../img/countries-cards/russia.jpg';
import sweden from '../img/countries-cards/sweden.jpg';
import uae from '../img/countries-cards/uae.jpg';

const countries = [
  {
    src: australia,
    country: 'Australia',
    capital: 'Canberra',
    url: '/',
  },
  {
    src: brazil,
    country: 'Australia',
    capital: 'Brasília',
    url: '/',
  },
  {
    src: england,
    country: 'Great Britain',
    capital: 'London',
    url: '/',
  },
  {
    src: greece,
    country: 'Greece',
    capital: 'Athens',
    url: '/',
  },
  {
    src: japan,
    country: 'Japan',
    capital: 'Tokio',
    url: '/',
  },
  {
    src: russia,
    country: 'Russia',
    capital: 'Moscow',
    url: '/',
  },
  {
    src: sweden,
    country: 'Sweden',
    capital: 'Stockholm',
    url: '/',
  },
  {
    src: uae,
    country: 'UAE',
    capital: 'Abu Dhabi',
    url: '/',
  },
]

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