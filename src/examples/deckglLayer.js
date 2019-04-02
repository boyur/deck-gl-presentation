export default `
import { MapboxLayer } from '@deck.gl/mapbox';
import { ScatterplotLayer } from '@deck.gl/layers';
import { randomPoint } from '@turf/random';

const layer = new MapboxLayer({
  id: 'scatterplot-layer',
  type: ScatterplotLayer,
  data,
  getRadius: 300,
  getFillColor: [255, 140, 0],
  getPosition: d => d.geometry.coordinates,
});
// -- code --//
this.map.on('load', () => {
  this.map.addLayer(layer);
});
`;
