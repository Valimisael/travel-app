import React from 'react';
import PropTypes from 'prop-types';
import './Description.scss';

export default function Description(props) {
  const {title, description} = props;

  return (
    <div className="country__description">
      <h2 className="country__title">{title}</h2>
      <div className="country__description-text">{description}</div>
    </div>
  )
}

Description.protoTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}