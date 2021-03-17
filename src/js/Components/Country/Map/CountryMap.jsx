import React from 'react';
import PropTypes from 'prop-types';
import './CountryMap.scss';

export default class CountryMap extends React.Component {
  componentDidMount() {
    window.ymaps.ready(this.createMap);
  }

  createMap = () => {
    const geo = this.props.map.geo;
    const zoom = this.props.map.zoom;
    
    const map = new window.ymaps.Map("map", {
      center: geo,
      zoom: zoom,
      controls: ['fullscreenControl'],
    });

    const zoomControl = new window.ymaps.control.ZoomControl({
      options: {
        size: "small",
        position: {
          top: 10,
          left: 10
        }
      }
    });
    
    map.controls.add(zoomControl);

    map.options.set('suppressMapOpenBlock', true);

    const placemark = new window.ymaps.GeoObject({
      geometry: {
        type: 'Point',
        coordinates: geo
      }
    });

    placemark.options.set('iconColor', '#fb8500');

    map.geoObjects.add(placemark);

    if (this.props.map.borders) {
      window.ymaps.borders.load(this.props.map.borders)
        .then(function (geojson) {
          for (let i = 0; i < geojson.features.length; i++) {
            const geoObject = new window.ymaps.GeoObject(geojson.features[i]);
            geoObject.options.set({
              fillColor: 'rgba(100%, 72%, 1%, 0.2)',
              strokeColor: '#ffb703',
            })
            map.geoObjects.add(geoObject);
          }
      });
    }
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

CountryMap.propTypes = {
  map: PropTypes.shape({
    geo: PropTypes.array,
    zoom: PropTypes.number
  }),
  title: PropTypes.string
}