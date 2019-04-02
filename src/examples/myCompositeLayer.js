export default `import { CompositeLayer } from '@deck.gl/core';
import { ScatterplotLayer, ArcLayer } from '@deck.gl/layers';

export default class MyCompositeLayer extends CompositeLayer {
  renderLayers() {
    const {
      id, data, showPoints, pointRadius,
      pointColor, type, ...arcProps
    } = this.props;

    return [
      showPoints && new ScatterplotLayer({
        id: 'scatterplot-layer-from',
        data,
        filled: true,
        getRadius: pointRadius,
        getFillColor: pointColor,
        getPosition: d => d.from.coordinates,
      }),
      showPoints && new ScatterplotLayer({
        id: 'scatterplot-layer-to',
        ...
        getPosition: d => d.to.coordinates,
      }),
      new ArcLayer({
        id: 'arc-layer',
        data,
        ...arcProps
      })
    ];
  }
}
`;
