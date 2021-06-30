import socialEmbed from '.';
import pageData from './fixtures';

const pageDataFixture =
  '{"metadata":{"id":"urn:bbc:ares::article:cv6n0064n5vo","locators":{"optimoUrn":"urn:bbc:optimo:asset:cv6n0064n5vo","canonicalUrl":"https://www.bbc.com/mundo/articles/cv6n0064n5vo"},"type":"article","createdBy":"Mundo","language":"es","lastUpdated":1618842529790,"firstPublished":1618842525611,"lastPublished":1618842525611,"timestamp":1618842525611,"options":{},"analyticsLabels":{},"passport":{"language":"es","home":"http://www.bbc.co.uk/ontologies/passport/home/Mundo","locator":"urn:bbc:optimo:asset:cv6n0064n5vo","availability":"AVAILABLE","taggings":[],"schemaVersion":"1.2.0","publishedState":"PUBLISHED"},"tags":{},"version":"v1.3.11","blockTypes":["headline","text","paragraph","fragment","social","renditions","aresOEmbed"],"suitableForSyndication":true,"readTime":1},"content":{"model":{"blocks":[{"type":"headline","model":{"blocks":[{"type":"text","model":{"blocks":[{"type":"paragraph","model":{"text":"Test story for WS social","blocks":[{"type":"fragment","model":{"text":"Test story for WS social","attributes":[]}}]}}]}}]}},{"type":"text","model":{"blocks":[{"type":"paragraph","model":{"text":"This story has a Twitter social embed block below this text block.","blocks":[{"type":"fragment","model":{"text":"This story has a Twitter social embed block below this text block.","attributes":[]}}]}}]}},{"type":"social","model":{"source":"https://twitter.com/BBCNews/status/1384138850478346243?s=20","blocks":[{"type":"renditions","model":{"locator":"urn:bbc:optimo:social:2777c9b9-b3d3-4d53-b36c-be749aa528c9","blocks":[{"type":"aresOEmbed","model":{"oembed":{"version":"1.0","author_name":"BBC News (UK)","author_url":"https://twitter.com/BBCNews","provider_name":"Twitter","provider_url":"https://twitter.com","url":"https://twitter.com/BBCNews/status/1384138850478346243","html":"<blockquote class=\\"twitter-tweet\\"><p lang=\\"en\\" dir=\\"ltr\\">Greta Thunberg says meeting fellow climate campaigner Sir David Attenborough was &quot;indescribable&quot; <a href=\\"https://t.co/xz93WmAdfR\\">https://t.co/xz93WmAdfR</a></p>&mdash; BBC News (UK) (@BBCNews) <a href=\\"https://twitter.com/BBCNews/status/1384138850478346243?ref_src=twsrc%5Etfw\\">April 19, 2021</a></blockquote>\\n","width":550}}}]}}]}}]}},"promo":{"locators":{"optimoUrn":"urn:bbc:optimo:asset:cv6n0064n5vo","canonicalUrl":"https://www.bbc.com/mundo/articles/cv6n0064n5vo"},"timestamp":1618842525611,"suitableForSyndication":true,"language":"es","headlines":{"seoHeadline":"Test story for WS social","promoHeadline":{"blocks":[{"type":"text","model":{"blocks":[{"type":"paragraph","model":{"text":"Test story for WS social","blocks":[{"type":"fragment","model":{"text":"Test story for WS social","attributes":[]}}]}}]}}]}},"images":{},"summary":{"blocks":[{"type":"text","model":{"blocks":[{"type":"paragraph","model":{"text":"Test story for WS social","blocks":[{"type":"fragment","model":{"text":"Test story for WS social","attributes":[]}}]}}]}}]},"passport":{"language":"es","home":"http://www.bbc.co.uk/ontologies/passport/home/Mundo","locator":"urn:bbc:optimo:asset:cv6n0064n5vo","availability":"AVAILABLE","taggings":[],"schemaVersion":"1.2.0","publishedState":"PUBLISHED"},"id":"urn:bbc:ares::article:cv6n0064n5vo","type":"optimo"},"relatedContent":{"site":{"subType":"site","name":"Mundo","uri":"/mundo","type":"simple"},"groups":[]}}';

describe('socialEmbed', () => {
  const { blocks } = pageData.content;
  const twitter = blocks[1];
  const twitterNoEmbed = blocks[3];

  it.only('should convert a social_embed block to Optimo format', () => {
    expect(socialEmbed(twitter, pageData)).toEqual({
      model: {
        blocks: [
          {
            model: {
              embed: {
                fallback_image: {
                  alt_text:
                    'Twitter post by Miley Ray Cyrus: Australia: Due to the recommendations of local, state, federal and international government authorities, including the Center for Disease Control, to reduce potential health risks in response to the current global health crisis, we are no longer traveling to Aus for the show.',
                  fallback_image_height: 279,
                  fallback_image_width: 465,
                },
                oembed: {
                  author_name: 'Miley Ray Cyrus',
                  author_url: 'https://twitter.com/MileyCyrus',
                  cache_age: '3153600000',
                  height: null,
                  html:
                    '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Australia: Due to the recommendations of local, state, federal and international government authorities, including the Center for Disease Control, to reduce potential health risks in response to the current global health crisis, we are no longer traveling to Aus for the show.</p>&mdash; Miley Ray Cyrus (@MileyCyrus) <a href="https://twitter.com/MileyCyrus/status/1237210910835392512?ref_src=twsrc%5Etfw">March 10, 2020</a></blockquote>',
                  provider_name: 'Twitter',
                  provider_url: 'https://twitter.com',
                  type: 'rich',
                  url:
                    'https://twitter.com/MileyCyrus/status/1237210910835392512',
                  version: '1.0',
                  width: 550,
                },
              },
              href: 'https://twitter.com/MileyCyrus/status/1237210910835392512',
              id: '1237210910835392512',
            },
            type: 'twitter',
            indexOfType: 0,
          },
        ],
      },
      type: 'social_embed',
    });

    expect(socialEmbed(twitterNoEmbed, pageData)).toEqual({
      model: {
        blocks: [
          {
            model: {
              href: 'https://twitter.com/MileyCyrus/status/1237210910835392512',
              id: '1237210910835392512',
            },
            type: 'twitter',
            indexOfType: 1,
          },
        ],
      },
      type: 'social_embed',
    });
  });

  it('should blah', () => {
    const fixture = {
      type: 'social',
      model: {
        source: 'https://twitter.com/BBCNews/status/1384138850478346243?s=20',
        blocks: [
          {
            type: 'renditions',
            model: {
              locator:
                'urn:bbc:optimo:social:2777c9b9-b3d3-4d53-b36c-be749aa528c9',
              blocks: [
                {
                  type: 'aresOEmbed',
                  model: {
                    oembed: {
                      version: '1.0',
                      author_name: 'BBC News (UK)',
                      author_url: 'https://twitter.com/BBCNews',
                      provider_name: 'Twitter',
                      provider_url: 'https://twitter.com',
                      url:
                        'https://twitter.com/BBCNews/status/1384138850478346243',
                      html:
                        '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Greta Thunberg says meeting fellow climate campaigner Sir David Attenborough was &quot;indescribable&quot; <a href="https://t.co/xz93WmAdfR">https://t.co/xz93WmAdfR</a></p>&mdash; BBC News (UK) (@BBCNews) <a href="https://twitter.com/BBCNews/status/1384138850478346243?ref_src=twsrc%5Etfw">April 19, 2021</a></blockquote>\n',
                      width: 550,
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    };

    expect(socialEmbed(fixture, JSON.parse(pageDataFixture)));
  });
});
