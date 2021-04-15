import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { Headline } from '@bbc/psammead-headings';

import { latin } from '@bbc/gel-foundations/scripts';

import * as Vibrant from 'node-vibrant';

import joro from './joro.jpg';

const Typography = styled.div`
  display: inline-block;
  width: 70%;
  max-width: 600px;
`;

const Image = styled.img`
  display: inline-block;
  width: 30%;
`;

const Banner = styled.div``;

const buildBg = palette => {
  console.log(palette);

  return `green`;
};

const Detector = () => {
  const [joroPalette, setJoroPalette] = useState(null);

  const vibrantWorker = useRef(null);

  useEffect(() => {
    if (vibrantWorker.current) return;
    vibrantWorker.current = Vibrant.from(joro).getPalette((err, palette) => {
      setJoroPalette(palette);
    });
  });

  return (
    <Banner background={buildBg(joroPalette)}>
      <Typography>
        <Headline service="news" script={latin}>
          Hello World
        </Headline>
      </Typography>
      <Image src={joro} />
    </Banner>
  );
};

export default Detector;
