// Import React
import React, { Component } from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Appear,
  Image
} from 'spectacle';

import TripsDemo from './components/TripsDemo';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import after from './images/after.png';
import before from './images/before.png';

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
        {/* Slide 1 */}
        <Slide transition={['fade']} bgColor="transparent">
          <TripsDemo />
          <Heading size={2} textColor="secondary">
            deck.gl
            <br />
            И как его готовить
          </Heading>
        </Slide>
        {/* Slide 2 */}
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={4} textColor="secondary">
            Как это работает
          </Heading>
        </Slide>
        {/* Slide 3 */}
        <Slide transition={['fade']} bgColor="primary">
            <Heading size={4} textColor="secondary">
              deck.gl
            </Heading>
            <Appear fid="1">
              <Heading size={4} textColor="secondary">
                &#8595;
                <br/>
                luma.gl
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={4} textColor="secondary">
                &#8595;
                <br/>
                WebGL
              </Heading>
            </Appear>
        </Slide>
        {/* Slide 4 */}
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={4} textColor="secondary">
            deck.gl + mapbox-gl-js
          </Heading>
        </Slide>
        {/* Slide 5 */}
        <Slide transition={['fade']} bgColor="white">
          <Heading size={6} textColor="primary">
            {'mapbox-gl-js'}
            <br />
            <br />
            {'< 0.50.0'}
          </Heading>
          <Image src={after} />
        </Slide>
        {/* Slide 6 */}
        <Slide transition={['fade']} bgColor="white">
          <Heading size={6} textColor="primary">
            {'mapbox-gl-js'}
            <br />
            <br />
            {'0.50.0'}
          </Heading>
          <Image src={before} />
        </Slide>
      </Deck>
    );
  }
}
