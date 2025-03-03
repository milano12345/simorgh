import React from 'react';
import { render } from '@testing-library/react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { ServiceContextProvider } from '#contexts/ServiceContext';
import Gist from '.';
import fixtureData, { fixtureDataOneItem } from './fixtures';

// eslint-disable-next-line react/prop-types
const GistWithContext = ({ blocks = fixtureData }) => (
  <ServiceContextProvider dir="ltr" service="news" lang="en-GB">
    <Gist blocks={blocks} />
  </ServiceContextProvider>
);

describe('Gist', () => {
  it('should render the gist heading', () => {
    const { getByText } = render(<GistWithContext />);
    const gistCaption = getByText('At a glance');

    expect(gistCaption).toBeInTheDocument();
  });

  it('should render an unordered list', () => {
    const { container } = render(<GistWithContext />);

    expect(container.querySelectorAll('li').length).toEqual(5);
  });

  shouldMatchSnapshot(
    'should render the gist with multiple list items',
    <GistWithContext />,
  );

  shouldMatchSnapshot(
    'should render the gist with one list item',
    <GistWithContext blocks={fixtureDataOneItem} />,
  );
});
