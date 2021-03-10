import React from 'react';
import './Hero.scss';

export default function Hero(props) {
  const {image, content} = props;
  
  return (
    <div className="hero">
      <img src={image.src} alt={image.country} />
      <div className="hero__details">
        <h1>{content.country}</h1>
        <h2>{content.capital}</h2>
      </div>
    </div>
  )
}