import React from 'react';
import {shouldMatchSnapshot, isNullComponent} from '../../helpers/tests/testHelpers';
import Text from './index';

describe('Text', () => {
  describe('with no data', () => {
    isNullComponent(
      'should return null',
      <Text />,
    );
  });

  describe('with data', () => {
    const paragraphBlock = (blockId, text) => ({
      blockId,
      model: {
        text,
      },
    });

    const data = {
      blocks: [
        paragraphBlock('01', 'This is a paragraph.'),
        paragraphBlock('02', 'This is another paragraph.'),
        paragraphBlock('03', 'This is a final paragraph.'),
      ],
    };

    shouldMatchSnapshot(
      'should render correctly',
      <Text {...data} />,
    );
  });
});
