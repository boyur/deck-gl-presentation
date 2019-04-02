export default `import { MapboxLayer } from '@deck.gl/mapbox';
import MyCompositeLayer from './MyCompositeLayer';

const layer = new MapboxLayer({
  id: 'MyCompositeLayer',
  type: MyCompositeLayer,
  data,
  pointRadius: 3000,
  pointColor: [255, 140, 0],
  getSourcePosition: d => d.from.coordinates,
  getTargetPosition: d => d.to.coordinates,
  getSourceColor: [255, 73, 124],
  getTargetColor: [0, 136, 255],
  getStrokeWidth: 5,
  showPoints: true
});
// -- code -- //
this.map.on('load', () => {
  this.map.addLayer(layer);
});
`;
