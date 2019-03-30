// Import React
import React, { Component } from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  SlideSet,
  Appear,
  Image,
  List,
  ListItem,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem
} from 'spectacle';

import TripsDemo from './components/TripsDemo';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Images
import after from './images/after.png';
import before from './images/before.png';
import hex from './images/hex.png';
import deckLine from './images/deck-line.png';

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
          <List textColor="secondary">
            <ListItem>Готовый набор слоев для визуализации данных</ListItem>
            <Appear>
              <ListItem>Высокоточные вычисления на GPU</ListItem>
            </Appear>
            <Appear>
              <ListItem>Интеграция с React и Mapbox GL</ListItem>
            </Appear>
          </List>
        </Slide>
        {/* --------------- */}
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={5} lineHeight={1.2} textColor="secondary">
            Как это работает
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
        <SlideSet>
          <Slide transition={['fade']} bgColor="primary">
            <Heading size={4} textColor="secondary">
              deck.gl + mapbox-gl-js
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
              Layers
            </Heading>
            <Heading size={4} textColor="secondary" margin={50}>
              Mapbox vs deck.gl
            </Heading>
          </Slide>
          {/* --------------- */}
          <Slide transition={['fade']} bgColor="primary">
            <Table>
              <TableRow>
                <TableHeaderItem>mapbox</TableHeaderItem>
                <TableHeaderItem>deck.gl</TableHeaderItem>
              </TableRow>
              <Appear>
                <TableRow>
                  <TableItem>Circle</TableItem>
                  <TableItem>Scatterplot</TableItem>
                </TableRow>
              </Appear>
              <Appear>
                <TableRow>
                  <TableItem>Fill</TableItem>
                  <TableItem>Polygon</TableItem>
                </TableRow>
              </Appear>
              <Appear>
                <TableRow>
                  <TableItem>Line</TableItem>
                  <TableItem>Line</TableItem>
                </TableRow>
              </Appear>
              <Appear>
                <TableRow>
                  <TableItem>Symbol</TableItem>
                  <TableItem>Icon</TableItem>
                </TableRow>
              </Appear>
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
                  <TableItem><b>Grid</b></TableItem>
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
        </SlideSet>
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
            Line
          </Heading>
          <Image src={deckLine} width={800} height={500} />
        </Slide>
      </Deck>
    );
  }
}
