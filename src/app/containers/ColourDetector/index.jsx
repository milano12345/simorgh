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
  font-weightx: bold;
  margin-top: 0.5rem;
  font-size: 0.9rem;

  color: rgba(0, 0, 0, 0.7);
  text-transform: uppercase;
`;

const SwatchSubLabel = styled.div`
  text-align: center;
  font-family: sans-serif;
  margin-top: 0.1rem;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.4);
  font-weight: bold;
  font-size: 0.7rem;
`;

const Spacer = styled.div`
  border-left: 2px rgba(0, 0, 0, 0.3) solid;
`;

const Controls = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1000;
  background: white;
  padding: 2px;
  * {
    font-family: sans-serif;
  }
`;

import ocean from './ocean.png';
import frogs from './frogs.png';

const availableImages = {
  ocean,
  frogs,
};

const image = frogs;

const Detector = () => {
  const [palette, setPalette] = useState(null);

  const [image, setImage] = useState(availableImages.ocean);
  const [contrastModifier, setContrastModifier] = useState(0.1);

  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current === image) return;
    imageRef.current = image;
    Vibrant.from(image).getPalette((err, colours) => {
      setPalette(colours);
    });
  });

  const keyToName = {
    LightVibrant: ['Accent', 'Light'],
    Vibrant: ['Accent', 'Mid'],
    DarkVibrant: ['Accent', 'Dark'],
    LightMuted: ['Muted', 'Light'],
    Muted: ['Muted', 'Mid'],
    DarkMuted: ['Muted', 'Dark'],
  };

  if (!palette) return null;

  const arr = Object.entries(palette);

  const first = [arr[0], arr[1], arr[2]];

  const second = [arr[3], arr[4], arr[5]];

  return (
    <div>
      <Img src={image} />
      <Swatches>
        {first.map(([key, value]) => {
          return (
            <Swatch>
              <SwatchColor color={value.rgb} />
              <SwatchLabel>{keyToName[key][0]}</SwatchLabel>
              <SwatchSubLabel>{keyToName[key][1]}</SwatchSubLabel>
            </Swatch>
          );
        })}
        <Spacer />
        {second.map(([key, value]) => {
          return (
            <Swatch>
              <SwatchColor color={value.rgb} />
              <SwatchLabel>{keyToName[key][0]}</SwatchLabel>
              <SwatchSubLabel>{keyToName[key][1]}</SwatchSubLabel>
            </Swatch>
          );
        })}
      </Swatches>
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
          style={{ width: 500 }}
        />
      </Controls>
    </div>
  );
};

export default Detector;
