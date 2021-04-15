/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import * as Vibrant from 'node-vibrant';
import { Headline } from '@bbc/psammead-headings';

import {
  getSansBold,
  getSansRegular,
  getSerifBold,
  getSerifRegular,
} from '@bbc/psammead-styles/font-styles';

import Body from '@bbc/psammead-paragraph';

import { latin } from '@bbc/gel-foundations/scripts';

import ocean from './ocean.png';
import human from './human.png';
import ren from './ren.jpg';
import bee from './bee.png';
import bear from './bear.jpg';
import frogs from './frogs.png';
import sqr from './sqr.png';

const image = sqr;

const brightness = 1;

const chooseColour = options => {
  return options.DarkMuted;
};

const chooseAccentColour = options => {
  return options.Vibrant;
};

const buildColour = colour => {
  if (!colour) return;
  const [r, g, b] = colour._rgb;
  return `rgb(${r * brightness}, ${g * brightness}, ${b * brightness})`;
};

const buildGradiant = colour => {
  if (!colour) return;
  const rgb = colour._rgb.map(col => col * brightness).join(', ');

  return `linear-gradient(
        to right,
        rgba(${rgb}, 1) 30%,
        rgba(${rgb}, ${1 - brightness}) 50%,
        rgba(${rgb}, ${1 - brightness}) 85%,
        rgba(${rgb}, 1)
      )`;
};

const Heading = styled(Headline)`
  ${({ service }) => service && getSerifRegular(service)}
  font-size: 1.6rem !important;
  line-height: 1.3 !important;
  padding: 1rem 0 !important;
`;

const Container = styled.div`
  background: ${({ background }) => background};
`;

const Overlay = styled.div`
  background: ${({ background }) => background};
`;

const Typography = styled.div`
  padding: 0 1rem;
  * {
    color: white !important;
  }

  vertical-align: top;
  display: inline-block;
  max-width: 600px;
`;

const Banner = styled.div`
  background: url('${({ background }) => background}');
  background-position: right center;
  background-size: cover;
  width: 1200px;
  margin: 0 auto;
`;

const Chip = styled.div`
  ${({ service }) => service && getSansRegular(service)}
  background: ${({ background }) => background};
  text-transform: uppercase;
  display: inline-block;
  padding: 0.2rem 1rem;
  margin-top: 2rem;
`;

const Date = styled(Body)`
  padding-bottom: 0.4rem !important;
`;
const Footer = styled(Body)`
  ${({ service }) => service && getSerifRegular(service)}
  margin-bottom: 1rem;
  font-style: italic;
`;

const Detector = () => {
  const [backgroundColour, setBackgroundColour] = useState(null);
  const [accentColour, setAccentColour] = useState(null);

  const vibrantWorker = useRef(null);

  useEffect(() => {
    if (vibrantWorker.current) return;
    vibrantWorker.current = Vibrant.from(image).getPalette((err, palette) => {
      setBackgroundColour(chooseColour(palette));
      setAccentColour(chooseAccentColour(palette));
    });
  });

  return (
    <Container background={buildColour(backgroundColour)}>
      <Banner background={image}>
        <Overlay background={buildGradiant(backgroundColour)}>
          <Typography>
            <Chip service="news" background={buildColour(accentColour)}>
              Lorem Ipsum
            </Chip>
            <Heading service="news" script={latin}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              auctor, augue sed accumsan faucibus
            </Heading>
            <Body script={latin} service="news">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              auctor, augue sed accumsan faucibus, lectus leo imperdiet metus,
              vel scelerisque metus nunc a sapien. Nulla eget justo quis purus
              eleifend porta. Ut a molestie risus.
            </Body>
            <Date script={latin} service="news">
              12th September 2020
            </Date>
            <hr />
            <Footer script={latin} service="news">
              "Nulla eget justo quis purus eleifend porta. Ut a molestie risus."
            </Footer>
          </Typography>
        </Overlay>
      </Banner>
    </Container>
  );
};

export default Detector;
