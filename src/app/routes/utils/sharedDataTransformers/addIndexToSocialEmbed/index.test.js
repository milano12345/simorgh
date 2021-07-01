import addIndexToSocialEmbed from '.';
import actual from './actual.json';
import expected from './expected.json';

it('should return the index of the embed type', () => {
  expect(addIndexToSocialEmbed(actual)).toEqual(expected);
});
