export default `
class MyCompositeLayer extends CompositeLayer {
  renderLayers() {
    return [
      this._renderGroupOfSubLayers(), // returns an array of layers
      this.props.showScatterplot && new ScatterplotLayer(...)
    ];
  }
}
`;
