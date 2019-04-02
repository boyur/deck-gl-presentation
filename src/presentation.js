// Import React
import React, { Component } from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Appear,
  Image,
  List,
  ListItem,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem,
  CodePane
} from 'spectacle';

import TripsDemo from './components/TripsDemo';
import PerformanceDemo from './components/PerformanceDemo';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Images
import after from './images/after.png';
import before from './images/before.png';
import hex from './images/hex.png';
import arc from './images/arc.png';
import models from './images/mesh.png';
import trips from './images/trips.png';
import screengrid from './images/screengrid.png';
import composeLayer from './images/composeLayer.png';

// Code Examples
import mapboxLayer from './examples/mapboxLayer';
import deckglLayer from './examples/deckglLayer';
import compositeLayer from './examples/compositeLayer';
import myCompositeLayer from './examples/myCompositeLayer';
import addMyCompositeLayer from './examples/addMyCompositeLayer';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#253041',
    secondary: '#CECECE',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
    transparent: 'transparent',
    white: 'white'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends Component {
  render() {
    return (
      <Deck
        transitionDuration={500}
        theme={theme}
      >
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="transparent">
          <TripsDemo />
          <Heading size={2} textColor="secondary">
            deck.gl
            <br />
            И как его готовить
          </Heading>
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={5} lineHeight={1.2} textColor="secondary">
            deck.gl - библиотека визуализации данных
            <br/>
            Основанная на WebGL
          </Heading>
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} lineHeight={1.2} textColor="secondary">
            UBER
          </Heading>
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} lineHeight={1.2} textColor="secondary">
            luma.gl
          </Heading>
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={4} textColor="secondary">
            deck.gl
          </Heading>
          <Appear>
            <Heading size={4} textColor="secondary">
              &#8595;
              <br/>
              luma.gl
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="secondary">
              &#8595;
              <br/>
              WebGL
            </Heading>
          </Appear>
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} lineHeight={1.2} textColor="secondary">
            Преимущества
          </Heading>
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary">
          <List textColor="secondary">
            <ListItem>Высокоточные вычисления на GPU</ListItem>
            <Appear>
              <ListItem>Обработка больших объемов данных и быстрая отрисовка</ListItem>
            </Appear>
            <Appear>
              <ListItem>Готовый набор слоев для визуализации данных</ListItem>
            </Appear>
            <Appear>
              <ListItem>Легко создавать новые слои или настраивать существующие</ListItem>
            </Appear>
            <Appear>
              <ListItem>Интеграция с React и Mapbox GL</ListItem>
            </Appear>
          </List>
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} textColor="secondary">
            deck.gl + mapbox-gl
          </Heading>
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="white">
          <Heading size={6} textColor="primary">
            {'mapbox-gl-js'}
            <br />
            <br />
            {'< 0.50.0'}
          </Heading>
          <Image src={after} />
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="white">
          <Heading size={6} textColor="primary">
            {'mapbox-gl-js'}
            <br />
            <br />
            {'0.50.0'}
          </Heading>
          <Image src={before} />
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} textColor="secondary" margin={50}>
            Слои
          </Heading>
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary">
          <Table>
            <TableRow>
              <TableHeaderItem textSize={60}>mapbox</TableHeaderItem>
            </TableRow>
            <Appear>
              <TableRow>
                <TableItem>Circle</TableItem>
              </TableRow>
            </Appear>
            <Appear>
              <TableRow>
                <TableItem>Fill</TableItem>
              </TableRow>
            </Appear>
            <Appear>
              <TableRow>
                <TableItem>Line</TableItem>
              </TableRow>
            </Appear>
            <Appear>
              <TableRow>
                <TableItem>Symbol</TableItem>
              </TableRow>
            </Appear>
            <TableRow>
              <TableItem textColor="primary">-</TableItem>
            </TableRow>
            <TableRow>
              <TableItem textColor="primary">-</TableItem>
            </TableRow>
            <TableRow>
              <TableItem textColor="primary">-</TableItem>
            </TableRow>
            <TableRow>
              <TableItem textColor="primary">-</TableItem>
            </TableRow>
            <TableRow>
              <TableItem textColor="primary">-</TableItem>
            </TableRow>
          </Table>
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary">
          <Table>
            <TableRow>
              <TableHeaderItem textSize={60}>mapbox</TableHeaderItem>
              <TableHeaderItem textSize={60}>deck.gl</TableHeaderItem>
            </TableRow>
            <TableRow>
              <TableItem>Circle</TableItem>
              <TableItem>Scatterplot</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>Fill</TableItem>
              <TableItem>Polygon</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>Line</TableItem>
              <TableItem>Line</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>Symbol</TableItem>
              <TableItem>Icon</TableItem>
            </TableRow>
            <Appear>
              <TableRow>
                <TableItem />
                <TableItem><b>Arc</b></TableItem>
              </TableRow>
            </Appear>
            <Appear>
              <TableRow>
                <TableItem />
                <TableItem><b>Hexagon</b></TableItem>
              </TableRow>
            </Appear>
            <Appear>
              <TableRow>
                <TableItem />
                <TableItem><b>ScreenGrid</b></TableItem>
              </TableRow>
            </Appear>
            <Appear>
              <TableRow>
                <TableItem />
                <TableItem><b>Mesh*</b></TableItem>
              </TableRow>
            </Appear>
            <Appear>
              <TableRow>
                <TableItem />
                <TableItem><b>Trips*</b></TableItem>
              </TableRow>
            </Appear>
          </Table>
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={4} textColor="secondary" margin={50}>
            Arc
          </Heading>
          <Image src={arc} width={800} height={500} />
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={4} textColor="secondary" margin={50}>
            Hexagon
          </Heading>
          <Image src={hex} width={800} height={500} />
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={4} textColor="secondary" margin={50}>
            ScreenGrid
          </Heading>
          <Image src={screengrid} width={800} height={500} />
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={4} textColor="secondary" margin={50}>
            Mesh
          </Heading>
          <Image src={models} width={800} height={500} />
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={4} textColor="secondary" margin={50}>
            Trips
          </Heading>
          <Image src={trips} width={800} height={500} />
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} textColor="secondary" margin={50}>
            Призводительность
          </Heading>
          <Heading size={4} textColor="secondary" margin={50}>
            Mapbox vs deck.gl
          </Heading>
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary" textColor="primary">
          <PerformanceDemo />
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={4} textColor="secondary">
            Отличие в работе со слоями
          </Heading>
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary" align='left'>
          <Heading size={4} textColor="secondary" margin={30}>
            Подключение слоя
          </Heading>
          <Heading size={4} textColor="secondary" margin={30}>
            Mapbox
          </Heading>
          <CodePane
            lang="jsx"
            source={mapboxLayer}
            overflow="overflow"
            textSize={23}
          />
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary" align='left'>
          <Heading size={4} textColor="secondary" margin={30}>
            Подключение слоя
          </Heading>
          <Heading size={4} textColor="secondary" margin={30}>
            deck.gl
          </Heading>
          <CodePane
            lang="jsx"
            source={deckglLayer}
            overflow="overflow"
            textSize={22}
          />
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary" align='left'>
          <Heading size={4} textColor="secondary" margin={50}>
            Основные методы работы со слоями Mapbox
          </Heading>
          <CodePane
            lang="jsx"
            source={`map.setPaintProperty('my-layer', 'fill-color', '#faafee');`}
            overflow="overflow"
            textSize={26}
          />
          <CodePane
            lang="jsx"
            source={`map.setLayoutProperty('my-layer', 'visibility', 'none');`}
            overflow="overflow"
            textSize={26}
          />
          <CodePane
            lang="jsx"
            source={`map.setFilter('my-layer', ['==', 'name', 'USA']);`}
            overflow="overflow"
            textSize={26}
          />
          <CodePane
            lang="jsx"
            source={`
map.getSource('some id').setData({
  "type": "FeatureCollection",
  "features": [{
      "type": "Feature",
      "properties": { "name": "Null Island" },
      "geometry": {
          "type": "Point",
          "coordinates": [ 0, 0 ]
      }
  }]
});
            `}
            overflow="overflow"
            textSize={26}
          />
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary" align='left'>
          <Heading size={4} textColor="secondary" margin={50}>
            Основные методы работы со слоями deck.gl
          </Heading>
          <CodePane
            lang="jsx"
            source={`const layer = new MapboxLayer({
  id: 'scatterplot-layer',
  type: ScatterplotLayer,
  ...
});
          `}
            overflow="overflow"
            textSize={34}
          />

          <CodePane
            lang="jsx"
            source={`layer.setProps({ visible: false });`}
            overflow="overflow"
            textSize={34}
          />
          <CodePane
            lang="jsx"
            source={`layer.setProps({ getRadius: 500 });`}
            overflow="overflow"
            textSize={34}
          />
          <CodePane
            lang="jsx"
            source={`layer.setProps({ data: this.state.data });`}
            overflow="overflow"
            textSize={34}
          />
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} textColor="secondary" margin={50}>
            Composite Layers
          </Heading>
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} textColor="secondary" margin={50}>
            Example
          </Heading>
          <CodePane
            lang="jsx"
            source={compositeLayer}
            overflow="overflow"
            textSize={22}
          />
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary" align={'left'}>
          <CodePane
            lang="jsx"
            source={myCompositeLayer}
            overflow="overflow"
            textSize={22}
          />
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary">
          <CodePane
            lang="jsx"
            source={addMyCompositeLayer}
            overflow="overflow"
            textSize={26}
          />
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary">
          <Image src={composeLayer} width={1000} height={600} />
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} textColor="secondary" margin={50}>
            Конец
          </Heading>
          <List>
            <ListItem>Ссылки на ресурсы</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
