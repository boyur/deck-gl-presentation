/* global window */
import React, {Component} from 'react';
import { StaticMap } from 'react-map-gl';
import DeckGL, { PolygonLayer } from 'deck.gl';
import { TripsLayer } from '@deck.gl/experimental-layers';

import Container from './Container';

// Source data CSV
const DATA_URL = {
  BUILDINGS:
    'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/trips/buildings.json', // eslint-disable-line
  TRIPS:
    'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/trips/trips.json' // eslint-disable-line
};

const LIGHT_SETTINGS = {
  lightsPosition: [-74.05, 40.7, 8000, -73.5, 41, 5000],
  ambientRatio: 0.05,
  diffuseRatio: 0.6,
  specularRatio: 0.8,
  lightsStrength: [2.0, 0.0, 0.0, 0.0],
  numberOfLights: 2
};

export const INITIAL_VIEW_STATE = {
  longitude: -74,
  latitude: 40.710,
  zoom: 14,
  maxZoom: 16,
  pitch: 45,
  bearing: 0
};

export class TripsDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      back: false,
      time: 0,
      viewState: {
        longitude: -74,
        latitude: 40.710,
        zoom: 14,
        maxZoom: 16,
        pitch: 45,
        bearing: 0
      }
    };
  }

  componentDidMount() {
    this._animate();
  }

  componentWillUnmount() {
    if (this._animationFrame) {
      window.cancelAnimationFrame(this._animationFrame);
    }
  }

  _animate() {
    const {
      loopLength = 1800, // unit corresponds to the timestamp in source data
      animationSpeed = 20 // unit time per second
    } = this.props;

    const timestamp = Date.now() / 1000;
    const loopTime = loopLength / animationSpeed;
    const newTime = ((timestamp % loopTime) / loopTime) * loopLength;

    this.setState(({ viewState }) => ({
      time: newTime,
      viewState: {
        ...viewState,
        bearing: (360 / 18000) * newTime
      }
    }));
    this._animationFrame = window.requestAnimationFrame(this._animate.bind(this));
  }

  _renderLayers() {
    return [
      new TripsLayer({
        id: 'trips',
        data: DATA_URL.TRIPS,
        getPath: d => d.segments,
        getColor: d => (d.vendor === 0 ? [253, 128, 93] : [23, 184, 190]),
        opacity: 0.3,
        strokeWidth: 1,
        trailLength: 120,
        currentTime: this.state.time
      }),
      new PolygonLayer({
        id: 'buildings',
        data: DATA_URL.BUILDINGS,
        extruded: true,
        wireframe: false,
        fp64: true,
        opacity: 0.3,
        getPolygon: f => f.polygon,
        getElevation: f => f.height,
        getFillColor: [74, 80, 110],
        lightSettings: LIGHT_SETTINGS
      })
    ];
  }

  render() {
    const { controller = true, baseMap = true } = this.props;
    const { viewState } = this.state;

    return (
      <Container>
        <DeckGL
          layers={this._renderLayers()}
          initialViewState={INITIAL_VIEW_STATE}
          viewState={viewState}
          controller={controller}
        >
          {baseMap && (
            <StaticMap
              reuseMaps
              mapStyle='mapbox://styles/martinproject1/cjnfxj6053wz32rq8r9sija4o'
              preventStyleDiffing={true}
              mapboxApiAccessToken={'pk.eyJ1IjoibWFydGlucHJvamVjdDEiLCJhIjoiY2ptdW93MXZrMDNjMTNrcGhmNTJ1ZGljdCJ9.9fC5LXUepNAYTKu8O162OA'}
            />
          )}
        </DeckGL>
      </Container>
    );
  }
}

export default TripsDemo;
