/* global window */
import React, {Component} from 'react';
import { StaticMap } from 'react-map-gl';
import DeckGL, { ScatterplotLayer, ArcLayer } from 'deck.gl';
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

export const INITIAL_VIEW_STATE = {
  longitude: -74,
  latitude: 40.710,
  zoom: 15,
  maxZoom: 18,
  minZoom: 15,
  pitch: 45,
  bearing: 0
};

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
  }

  _renderLayers() {
    return [
      new ArcLayer({
        id: 'arc-layer',
        data,
        getStrokeWidth: 12,
        getSourcePosition: d => d.from.coordinates,
        getTargetPosition: d => d.to.coordinates,
        getSourceColor: d => [Math.sqrt(d.inbound), 140, 0],
        getTargetColor: d => [Math.sqrt(d.outbound), 140, 0]
      }),
      new ScatterplotLayer({
        id: 'points',
        data,
        getRadius: 30,
        getPosition: d => d.from.coordinates,
        getColor: d => [Math.sqrt(d.outbound), 0, 0]
      })
    ];
  }

  render() {
    const {viewState, controller = true, baseMap = true} = this.props;

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
              mapStyle='mapbox://styles/boyurartem/cju5r7j0y10k51fo8dwdc8nw6'
              preventStyleDiffing={true}
              mapboxApiAccessToken={'pk.eyJ1IjoiYm95dXJhcnRlbSIsImEiOiJjajBkeWY4ZmwwMDEyMzJseG8wZDI4YW5pIn0.DBEWyIXo3VknCRDcqa7Msg'}
            />
          )}
        </DeckGL>
      </Container>
    );
  }
}

export default App;
