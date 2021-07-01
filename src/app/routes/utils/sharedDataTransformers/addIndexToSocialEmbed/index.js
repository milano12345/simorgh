import pathOr from 'ramda/src/pathOr';

const addIndexToSocialEmbed = jsonRaw => {
  // WHAT WE WANT:
  // We want to replace the JSON value associated with the ID key
  // We want to replace this ID value with an integer that increases for every twitter embed in the block
  // We want to Map over each object in the block for the change

  // HOW WE DO IT:
  // We will use pathOr to point to the location of the ID within the jsonRaw object so that we can access the ID
  // We will map to generate the ID for each ID key in the block
  // Generate an ID as an integer which increases based on every Twitter embed that is rendered for that service
  // For each twitter > iterate by 1
  // retur
  return jsonRaw;
};

export default addIndexToSocialEmbed;
