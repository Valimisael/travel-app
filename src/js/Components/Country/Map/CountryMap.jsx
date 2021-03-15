import React from 'react';
import './CountryMap.scss';

export default class CountryMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.ymaps.ready(this.createMap);
  }

  createMap = () => {
    const geo = this.props.map.geo;
    const zoom = this.props.map.zoom;
    const borders = this.props.map.borders;
    
    const map = new window.ymaps.Map("map", {
      center: geo,
      zoom: zoom,
      controls: ['zoomControl', 'fullscreenControl'],
    });

    const placemark = new window.ymaps.GeoObject({
      geometry: {
        type: 'Point',
        coordinates: geo
      }
    });

    placemark.options.set('iconColor', '#fb8500');

    map.geoObjects.add(placemark);

    window.ymaps.borders.load(borders)
      .then(function (geojson) {
        for (var i = 0; i < geojson.features.length; i++) {
          var geoObject = new window.ymaps.GeoObject(geojson.features[i]);
          map.geoObjects.add(geoObject);
        }
    });
  }

  render() {
    const {title} = this.props;

    return (  
        <div className="country__map">
          <h2 className="country__title">{title}</h2>
          <div id="map" className="country__map-container"></div>
        </div>
    )
  }
}