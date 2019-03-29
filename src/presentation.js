// Import React
import React, { Component } from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Appear,
} from 'spectacle';

import TripsDemo from './components/TripsDemo';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#253041',
    secondary: '#CECECE',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
    transparent: 'transparent'
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
        <Slide transition={['zoom']} bgColor="transparent">
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
      </Deck>
    );
  }
}
