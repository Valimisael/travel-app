import React from 'react';
import PropTypes from 'prop-types';
import './Hero.scss';

export default function Hero(props) {
  const {image, title, country, capital} = props;
  
  return (
    <div className="hero">
      <img src={image} alt={title} />
      <div className="hero__details">
        <h1>{country}</h1>
        <h2>{capital}</h2>
      </div>
    </div>
  )
}

Hero.protoType = {
  capital: PropTypes.string,
  country: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string
}