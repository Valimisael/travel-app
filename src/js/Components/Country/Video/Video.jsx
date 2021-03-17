import React from 'react';
import PropTypes from 'prop-types';
import './Video.scss';

import { Player, BigPlayButton } from 'video-react';

export default function Video(props) {
  const {title, poster, video} = props;

  return (
    <div className="country__video">
      <h2 className="country__title">{title}</h2>           
      <Player playsInline poster={poster} src={video}>
        <BigPlayButton position="center" />
      </Player>
    </div>
  )
}

Video.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
  video: PropTypes.string
};