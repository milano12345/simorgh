import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import { renderProgramCard as Component } from '../testHelpers/helper';

export default {
  title: 'Components/Radio Schedule/Program Card',
  Component,
  decorators: [withKnobs, withServicesKnob()],
};

export const OnDemand = props => <Component {...props} state="onDemand" />;
export const Live = props => <Component {...props} state="live" />;
export const Next = props => <Component {...props} state="next" />;
