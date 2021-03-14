import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './CountryMap.scss';

export default function CountryMap(props) {
  const {title, geo, zoom} = props;

  return (
    <YMaps>
      <div className="country__map">
      <h2 className="country__title">{title}</h2>
        <Map defaultState={{ 
            center: geo, 
            zoom: zoom,
            controls: ['zoomControl', 'fullscreenControl'], 
          }}
          modules={['control.ZoomControl', 'control.FullscreenControl']}
          width="100%"
          height="500px">
          <Placemark defaultGeometry={geo} />
        </Map>
      </div>
    </YMaps>
  )
}