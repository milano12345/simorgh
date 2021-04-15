import React from 'react';
import { storiesOf } from '@storybook/react';

import Detector from '.';
import Banner from './banner';

import BannerSmall from './banner-small';

storiesOf('Components/Detector', module).add('default', () => {
  return <Detector>hey</Detector>;
});

storiesOf('Components/Banner', module).add('default', () => {
  return <Banner>hey</Banner>;
});

storiesOf('Components/BannerSmall', module).add('default', () => {
  return <BannerSmall>hey</BannerSmall>;
});
