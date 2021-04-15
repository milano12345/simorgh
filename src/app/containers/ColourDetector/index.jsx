/* eslint-disable import/first */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';

import * as Vibrant from 'node-vibrant';

const buildBg = ([r, g, b]) => `rgba(${r}, ${g}, ${b})`;

const Img = styled.img`
  width: 700px;
  margin-bottom: 1rem;
`;

const Swatches = styled.div`
  width: 700px;
  display: flex;
  justify-content: space-between;
`;

const Swatch = styled.div`
  display: inline-block;
`;

const SwatchColor = styled.div`
  width: 100px;
  height: 100px;
  background: ${({ color }) => buildBg(color)};
`;

const SwatchLabel = styled.div`
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
  margin-top: 0.5rem;
`;

import ocean from './ocean.png';
import frogs from './frogs.png';

const image = ocean;

const Detector = () => {
  const [palette, setPalette] = useState(null);

  const vibrantWorker = useRef(null);

  useEffect(() => {
    if (vibrantWorker.current) return;
    vibrantWorker.current = Vibrant.from(image).getPalette((err, colours) => {
      setPalette(colours);
    });
  });

  return (
    <div>
      <Img src={image} />
      <Swatches>
        {Object.entries(palette || {}).map(([key, value]) => {
          return (
            <Swatch>
              <SwatchColor color={value.rgb} />
              <SwatchLabel>{key}</SwatchLabel>
            </Swatch>
          );
        })}
      </Swatches>
    </div>
  );
};

export default Detector;
