/* global window */
import React, {Component} from 'react';
import { MapboxLayer } from '@deck.gl/mapbox';
import mapboxgl from 'mapbox-gl';
import { ScatterplotLayer, ArcLayer } from 'deck.gl';
import Container from './Container';

const data = [
  {
    "inbound": 72633,
    "outbound": 74735,
    "from": {
      "name": "19th St. Oakland (19TH)",
      "coordinates": [
        -74.013,
        40.710
      ]
    },
    "to": {
      "name": "12th St. Oakland City Center (12TH)",
      "coordinates": [
        -74.005,
        40.715
      ]
    }
  },
  {
    "inbound": 72633,
    "outbound": 74735,
    "from": {
      "name": "19th St. Oakland (19TH)",
      "coordinates": [
        -74.005,
        40.715
      ]
    },
    "to": {
      "name": "12th St. Oakland City Center (12TH)",
      "coordinates": [
        -73.995,
        40.725
      ]
    }
  },
  {
    "inbound": 72633,
    "outbound": 74735,
    "from": {
      "name": "19th St. Oakland (19TH)",
      "coordinates": [
        -73.995,
        40.725
      ]
    },
    "to": {
      "name": "12th St. Oakland City Center (12TH)",
      "coordinates": [
        -73.990,
        40.725
      ]
    }
  },
];

mapboxgl.accessToken = 'pk.eyJ1IjoiYm95dXJhcnRlbSIsImEiOiJjajBkeWY4ZmwwMDEyMzJseG8wZDI4YW5pIn0.DBEWyIXo3VknCRDcqa7Msg';

// Create a mapbox-compatible deck.gl layer
const arc = new MapboxLayer({
  id: 'my-ArcLayer',
  type: ArcLayer,
  data,
  getStrokeWidth: 12,
  getSourcePosition: d => d.from.coordinates,
  getTargetPosition: d => d.to.coordinates,
  getSourceColor: d => [Math.sqrt(d.inbound), 140, 0],
  getTargetColor: d => [Math.sqrt(d.outbound), 140, 0]
});

const points = new MapboxLayer({
  id: 'my-points',
  type: ScatterplotLayer,
  data,
  getRadius: 30,
  getPosition: d => d.from.coordinates,
  getColor: d => [Math.sqrt(d.outbound), 0, 0]
});

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/boyurartem/cju5r7j0y10k51fo8dwdc8nw6',
      center: [-74.005, 40.715],
      zoom: 15,
      pitch: 45,
      minZoom: 15
    });

    this.map.on('load', () => {
      this.map.addLayer(points);
      this.map.addLayer(arc);
    });
  }

  render() {
    return (
      <Container>
        <div id='map' style={{ width: '100vw', height: '100vh' }} />
      </Container>
    );
  }
}

export default App;
