export default `
import { randomPoint } from '@turf/random';
// -- code --//
const points = randomPoint(100);

this.map.on('load', () => {
  this.map.addSource('points', { type: 'geojson', data: points });

  this.map.addLayer({
    id: 'points',
    type: 'circle',
    source: 'points',
    paint: {
      'circle-radius': 6,
      'circle-color': '#1978c8'
    }
  })
});
`;
