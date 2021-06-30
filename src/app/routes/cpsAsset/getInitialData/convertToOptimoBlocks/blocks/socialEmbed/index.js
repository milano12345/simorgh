import path from 'ramda/src/path';
import hasPath from 'ramda/src/hasPath';

const getCpsEmbed = (map, block) => {
  const { type, source } = block;

  if (type === 'social_embed') {
    const hasSource = Boolean(map[source]);

    console.log({
      ...map,
      [source]: hasSource ? [...map[source], block] : [block],
    });

    return {
      ...map,
      [source]: hasSource ? [...map[source], block] : [block],
    };
  }
  return map;
};

const getSourceFromUrl = url => {
  if (url.startsWith('https://twitter.com')) {
    return 'twitter';
  }
};

const getOptimo = (acc, block) => {
  const { model, type } = block;
  const { source: sourceUrl } = model;

  if (type === 'social') {
    const source = getSourceFromUrl(sourceUrl);
    const hasSource = Boolean(source);

    console.log('sourceUrl', sourceUrl);

    console.log('cccc', {
      ...acc,
      [source]: hasSource ? [...acc[source], block] : [block],
    });

    return {
      ...acc,
      [source]: hasSource ? [...acc[source], block] : [block],
    };
  }

  return acc;
};

const convertSocialEmbed = (block, pageData) => {
  const promoType = path(['promo', 'type'], pageData);
  const isOptimo = promoType === 'optimo';
  const blocks = path(
    isOptimo ? ['content', 'model', 'blocks'] : ['content', 'blocks'],
    pageData,
  );
  console.log('blocks', blocks);
  const socialEmbedMap = blocks.reduce(isOptimo ? getOptimo : getCpsEmbed, {});

  const { type, source, ...rest } = block;

  console.log('xxxx', source);
  const indexOfType = socialEmbedMap[source].indexOf(block);

  return {
    type,
    model: {
      blocks: [
        {
          type: source,
          indexOfType,
          model: {
            ...rest,
          },
        },
      ],
    },
  };
};

export default convertSocialEmbed;
