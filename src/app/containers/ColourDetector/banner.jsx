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

const availableImages = {
  ocean,
  human,
  ren,
  bee,
  bear,
  frogs,
  sqr,
};

const contrastWeights = {
  background: 1,
  accent: 0.8,
  gradientPositions: 30,
};

const chooseColour = options => {
  return options.DarkMuted;
};

const chooseAccentColour = options => {
  return options.Vibrant;
};

const buildColour = (colour, contrastModifier, type = 'background') => {
  if (!colour) return;
  const brightness = 1 - contrastModifier * contrastWeights[type];
  const [r, g, b] = colour._rgb;
  return `rgb(${r * brightness}, ${g * brightness}, ${b * brightness})`;
};

const buildGradiant = (colour, contrastModifier) => {
  if (!colour) return;
  const brightness = (1 - contrastModifier) * contrastWeights.background;
  const rgb = colour._rgb.map(col => col * brightness).join(', ');

  const offset = contrastModifier * contrastWeights.gradientPositions;
  return `linear-gradient(
        to right,
        rgba(${rgb}, 1) ${30 + offset}%,
        rgba(${rgb}, 0) ${50 + offset}%,
        rgba(${rgb}, 0) 85%,
        rgba(${rgb}, 1)
      )`;
};

const Heading = styled(Headline)`
  ${({ service }) => service && getSerifRegular(service)}
  font-size: 28px !important;
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
  width: 1320px;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
    [class*='Headline'] {
      text-decoration: underline;
    }
  }
`;

const Chip = styled.div`
  ${({ service }) => service && getSansRegular(service)}
  background: ${({ background }) => background};
  text-transform: uppercase;
  display: inline-block;
  padding: 0.1rem 0.5rem;
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

const Controls = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1000;
`;

const Detector = ({ showControls }) => {
  const [backgroundColour, setBackgroundColour] = useState(null);
  const [accentColour, setAccentColour] = useState(null);
  const [image, setImage] = useState(availableImages.bear);
  const [contrastModifier, setContrastModifier] = useState(0.1);

  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current === image) return;
    imageRef.current = image;
    Vibrant.from(image).getPalette((err, palette) => {
      setBackgroundColour(chooseColour(palette));
      setAccentColour(chooseAccentColour(palette));
    });
  });

  return (
    <>
      <Container
        background={buildColour(
          backgroundColour,
          contrastModifier,
          'background',
        )}
      >
        <Banner background={image}>
          <Overlay
            background={buildGradiant(backgroundColour, contrastModifier)}
          >
            <Typography>
              <Chip
                service="news"
                background={buildColour(
                  accentColour,
                  contrastModifier,
                  'accent',
                )}
              >
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
                "Nulla eget justo quis purus eleifend porta. Ut a molestie
                risus."
              </Footer>
            </Typography>
          </Overlay>
        </Banner>
      </Container>
      {showControls && (
        <Controls>
          {Object.entries(availableImages).map(([key, value]) => {
            return (
              <button type="button" onClick={() => setImage(value)}>
                {key}
              </button>
            );
          })}
          <input
            type="text"
            value={image}
            onChange={e => setImage(e.target.value)}
          />
          <button onClick={() => setContrastModifier(contrastModifier - 0.1)}>
            -
          </button>
          {contrastModifier.toFixed(1)}
          <button onClick={() => setContrastModifier(contrastModifier + 0.1)}>
            +
          </button>
        </Controls>
      )}
    </>
  );
};

export default Detector;
