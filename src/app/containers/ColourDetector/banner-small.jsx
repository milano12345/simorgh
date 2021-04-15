/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { Headline } from '@bbc/psammead-headings';

import Body from '@bbc/psammead-paragraph';

import { latin } from '@bbc/gel-foundations/scripts';

import * as Vibrant from 'node-vibrant';

// import image from './ocean.png';
import image from './joro.jpg';

const chooseColour = options => {
  console.log(options);
  return options.DarkVibrant;
};

const buildBackground = colour => {
  if (!colour) return;
  console.log(colour);
  const [r, g, b] = colour._rgb;
  return `rgb(${r}, ${g}, ${b})`;
};

const buildGradiant = colour => {
  if (!colour || !image) return;
  const rgb = colour._rgb.join(', ');

  return `linear-gradient(
    to right,
    rgba(${rgb}, 1) 0%,
    rgba(${rgb}, 0) 60%,
    rgba(${rgb}, 1)
  )`;
};

const Container = styled.div`
  display: flex;
  background: ${({ background }) => background};
`;
const Typography = styled.div`
  padding: 0 1rem;
  * {
    color: white !important;
  }
  width: 50%;
  vertical-align: top;
  display: inline-block;
  max-width: 800px;
`;

const Right = styled.div`
  display: inline-block;
  width: 50%;
  background-image: ${({ background }) => `url("${background}")`};
  background-size: cover;
  background-position: center;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ background }) => background};
`;

const Detector = () => {
  const [colour, setColour] = useState(null);

  const vibrantWorker = useRef(null);

  useEffect(() => {
    if (vibrantWorker.current) return;
    vibrantWorker.current = Vibrant.from(image).getPalette((err, palette) => {
      setColour(chooseColour(palette));
    });
  });

  return (
    <Container background={buildBackground(colour)}>
      <Typography>
        <Headline service="news" script={latin}>
          Hello World
        </Headline>
        <Body script={latin} service="news">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          auctor, augue sed accumsan faucibus, lectus leo imperdiet metus, vel
          scelerisque metus nunc a sapien. Nulla eget justo quis purus eleifend
          porta. Ut a molestie risus. Nullam vel blandit lectus. Morbi cursus
          ipsum eget ligula viverra pharetra. Phasellus non lorem vel metus
          aliquet tincidunt non posuere mauris. Pellentesque quis ligula at urna
          tempor semper vel sit amet urna.
        </Body>
      </Typography>
      <Right background={image}>
        <Overlay background={buildGradiant(colour)} />
      </Right>
    </Container>
  );
};

export default Detector;
