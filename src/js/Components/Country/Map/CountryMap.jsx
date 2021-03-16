import React from 'react';
import './CountryMap.scss';

export default class CountryMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panorama: false,
    }
  }

  componentDidMount() {
    window.ymaps.ready(this.createMap);
  }

  updateState = () => {    
    this.setState({
      panorama: !this.state.panorama,
    })
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

    const myButton =
      new window.ymaps.control.Button({
        data: {
          content: 'Panorama'
        },
        options: {
          selectOnClick: false,
        }
      }
      );
    const updateState = this.updateState.bind(this);
    myButton.events
      .add(
        'click',
        function () {
          if (!window.ymaps.panorama.isSupported()) {
            return;
          }
          updateState();

          window.ymaps.panorama.createPlayer(
            'panorama',
            [59.938557, 30.316198],
            { layer: 'yandex#airPanorama' }
          )

          updateState();
        }
      )
      .add(
        'deselect',
        function () {
          alert('Отжата');
        }
      );
    map.controls.add(myButton, {
      float: "left"
    });
  }

  render() {
    const { title } = this.props;

    return (
      <div className="country__map">
        <h2 className="country__title">{title}</h2>
        <div id="map" className="country__map-container"></div>
        <div id="panorama" className={`country__map-panorama ${this.state.panorama ? 'open' : ''}`}></div>
      </div>
    )
  }
}