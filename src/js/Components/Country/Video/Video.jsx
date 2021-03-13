import React from 'react';
import './Video.scss';

import { Player, BigPlayButton } from 'video-react';

export default function Video(props) {
  const {video, country} = props;

  return (
    <div className="country__video">
      <h2 className="country__title">{video}</h2>           
      <Player playsInline poster={country.poster} src={country.video}>
        <BigPlayButton position="center" />
      </Player>
    </div>
  )
}