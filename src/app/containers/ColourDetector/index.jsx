import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { Headline } from '@bbc/psammead-headings';

import { Helmet } from 'react-helmet';

import { latin } from '@bbc/gel-foundations/scripts';

import * as Vibrant from 'node-vibrant';

import joro from './ocean.png';

const buildBg = ([r, g, b]) => {
  console.log(r, g, b);

  return `rgba(${r}, ${g}, ${b})`;
};

const LinearGradient = styled.div`
  width: 300px;
  height: 300px;
  background: linear-gradient(#e66465, #9198e5);
`;

const Swatch = styled.div`
  width: 100px;
  height: 100px;
  background: ${({ color }) => buildBg(color)};
  margin: 0 1rem 0 0;
  display: inline-block;
`;

const Fade = styled.div`
  background: url('${joro}');
  position: relative;
  height: 100px;
  width: 100px;
  background-size: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  xbackground: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;

const Detector = ({ children }) => {
  const [joroPalette, setJoroPalette] = useState(null);

  const vibrantWorker = useRef(null);

  useEffect(() => {
    if (vibrantWorker.current) return;
    vibrantWorker.current = Vibrant.from(joro).getPalette((err, palette) => {
      setJoroPalette(palette);
    });
  });

  console.log(
    'joro',
    joroPalette,
    'statue',
    // statuePalette
  );

  // /*{Object.values(joroPalette).map(([key, value], index))}*/

  return (
    <div>
      <div>
        {Object.entries(joroPalette || {}).map(([key, value], index) => {
          return <Swatch color={value.rgb}>{key}</Swatch>;
        })}
      </div>
      <Fade>
        <Overlay />
      </Fade>
    </div>
  );
};

export default Detector;
