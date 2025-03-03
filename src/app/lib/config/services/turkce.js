import {
  C_POSTBOX,
  C_WHITE,
  C_GHOST,
  C_POSTBOX_30,
} from '@bbc/psammead-styles/colours';
import { latinDiacritics } from '@bbc/gel-foundations/scripts';
import {
  F_REITH_SANS_BOLD,
  F_REITH_SANS_BOLD_ITALIC,
  F_REITH_SANS_ITALIC,
  F_REITH_SANS_REGULAR,
  F_REITH_SERIF_MEDIUM,
  F_REITH_SERIF_MEDIUM_ITALIC,
  F_REITH_SERIF_LIGHT,
} from '@bbc/psammead-styles/fonts';
import { turkce as brandSVG } from '@bbc/psammead-assets/svgs';
import '@bbc/moment-timezone-include/tz/Asia/Istanbul';
import withContext from '../../../contexts/utils/withContext';
import 'moment/locale/tr';

export const service = {
  default: {
    lang: `tr`,
    articleAuthor: `https://www.facebook.com/bbcnews`,
    articleTimestampPrefix: 'Güncelleme',
    articleTimestampSuffix: '',
    atiAnalyticsAppName: 'news-turkce',
    atiAnalyticsProducerId: '92',
    chartbeatDomain: 'turkish.bbc.co.uk', // this is meant to be different to the service name
    brandName: 'BBC News Türkçe',
    product: 'BBC News',
    serviceLocalizedName: 'Türkçe',
    defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/turkce.png',
    defaultImageAltText: 'BBC News Türkçe',
    dir: `ltr`,
    externalLinkText: ', Dış Link',
    imageCaptionOffscreenText: 'Fotoğraf altı yazısı, ',
    videoCaptionOffscreenText: 'Video altyazısı, ',
    audioCaptionOffscreenText: 'Ses dosyası altyazısı, ',
    defaultCaptionOffscreenText: 'Altyazı, ',
    imageCopyrightOffscreenText: 'Kaynak, ',
    locale: `tr-TR`,
    // valid ISO 639-1 code - this is not the same as lang! see explanation in #3405
    isoLang: 'tr',
    datetimeLocale: `tr-tr`,
    service: 'turkce',
    serviceName: 'News Türkçe',
    languageName: 'Turkish',
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@bbcturkce',
    twitterSite: '@bbcturkce',
    noBylinesPolicy:
      'https://www.bbc.com/turkce/kurumsal-50221017#authorexpertise',
    publishingPrinciples: 'https://www.bbc.com/turkce/kurumsal-50221017',
    isTrustProjectParticipant: true,
    script: latinDiacritics,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle: 'Haberler',
    theming: {
      brandBackgroundColour: `${C_POSTBOX}`,
      brandLogoColour: `${C_WHITE}`,
      brandForegroundColour: `${C_GHOST}`,
      brandHighlightColour: `${C_WHITE}`,
      brandBorderColour: `${C_POSTBOX_30}`,
    },
    showAdPlaceholder: true,
    showRelatedTopics: true,
    translations: {
      ads: {
        advertisementLabel: 'Reklam',
      },
      recommendationTitle: 'Bunlar da ilginizi çekebilir',
      seeAll: 'Hepsini görüntüle',
      home: 'Ana sayfa',
      currentPage: 'Bulunduğunuz sayfa',
      skipLinkText: 'İçeriğe götür',
      relatedContent: 'İlgili haberler',
      relatedTopics: 'İlgili Konular',
      navMenuText: 'Kategoriler',
      mediaAssetPage: {
        mediaPlayer: 'Media player',
        audioPlayer: 'Audio player',
        videoPlayer: 'Video player',
      },
      gist: 'Özet',
      error: {
        404: {
          statusCode: '404',
          title: 'Sayfa bulunamadı',
          message:
            'Üzgünüz aradığınız sayfayı görüntüleyemiyoruz. Lütfen şunları deneyin:',
          solutions: [
            'URL uzantısına çift tıklayın',
            'Tarayıcınızın yenile butonuna basın',
            'BBC arama çubuğunu kullanarak bu sayfayı arayın',
          ],
          callToActionFirst: 'Alternatif olarak ana sayfaya dönün ',
          callToActionLinkText: 'BBC News Türkçe',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/turkce',
        },
        500: {
          statusCode: '500',
          title: 'İç sunucu hatası',
          message:
            'Üzgünüz aradığınız sayfayı görüntüleyemiyoruz. Lütfen şunları deneyin:',
          solutions: [
            'Tarayıcınızın yenile butonuna basın',
            'Daha sonra tekrar deneyin',
          ],
          callToActionFirst: 'Alternatif olarak ana sayfaya dönün ',
          callToActionLinkText: 'BBC News Türkçe',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/turkce',
        },
      },
      consentBanner: {
        privacy: {
          title: 'Gizlilik ve çerez politikamızı güncelledik',
          description: {
            uk: {
              first:
                'Gizlilik ve çerez politikalarımız konusunda bazı önemli değişiklikler yaptık. Bu değişikliklerin ne olduğunu ve sizin için ne anlama geldiğini bilmenizi istiyoruz.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                'Gizlilik ve çerez politikalarımız konusunda bazı önemli değişiklikler yaptık. Bu değişikliklerin ne olduğunu ve sizin için ne anlama geldiğini bilmenizi istiyoruz.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'Tamam',
          reject: 'Neler değişti?',
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          amp: {
            accept: 'Veri toplanmaya izin ver ve devam et',
            reject: 'Veri toplamayı reddet ve devam et',
            initial: {
              title:
                'AMP ile veri toplamaya onay verip vermediğinizi bize bildirin.',
              description: {
                first: 'Biz ve ortaklarımız ',
                linkText: 'çerezleri gibi',
                last:
                  ' teknolojiler kullanıyoruz ve size en iyi çevrimiçi hizmeti sunabilmek adına internet tarama verilerini topluyoruz. Bu yolla içerik ve reklamları kişiselleştiriyoruz. Eğer kabul ediyorsanız lütfen bizi bilgilendirin.',
                linkUrl:
                  'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
              },
              manage: 'Ayarlarımı yönet',
            },
            manage: {
              title: 'AMP ayarlarını yönet',
              description: {
                para1:
                  'Bu ayarlar sadece hızlandırılmış mobil sayfalar (AMP) için geçerli. Eğer AMP özelliği olmayan bir BBC sayfasını ziyaret ederseniz bu seçimleri yeniden yapmanız istenebilir.',
                para2:
                  'Ziyaret ettiğiniz mobil sayfa, Google AMP teknolojisi kullanılarak geliştirilmiştir.',
                heading2: 'Zorunlu veri toplama',
                para3:
                  'İnternet sayfalarımızın düzgün çalışabilmesi için sizin rıcanız olmadan sınırlı düzeyde veri toplamamız gerekiyor.',
                para4: {
                  text:
                    'Sayfalarımızın çalışması için gereken veri toplama süreci hakkında detaylı bilgi almak için tıklayın.',
                  url:
                    'https://www.bbc.co.uk/usingthebbc/strictly-necessary-cookies/',
                },
                para5:
                  'Lokal veri saklama yöntemi ile vermiş olduğunuz izinlerin bilgilerini telefonunuzda saklıyoruz.',
                heading3: 'Tercihe dayalı veri toplama',
                para6:
                  'AMP üzerinden veri toplamaya izin verdiğinizde kişiselleştirilmiş reklamların sunulmasına onay vermiş oluyorsunuz.',
                para7: {
                  text:
                    "BBC'nin ve reklam ortaklarının kişiselleştirilmiş reklamları nasıl oluşturduğunu okumak için tıklayın.",
                  url:
                    'https://www.bbc.com/usingthebbc/cookies/how-does-the-bbc-use-cookies-for-advertising/',
                },
                para8:
                  "Kişiselleştirilmiş reklamları görmek istemiyorsanız 'Veri toplamayı reddet ve devam et' seçeneğini tıklayabilirsiniz. Yine de reklamları görmeye devam edeceksiniz ancak bu reklamlar kişiselleştirilmemiş olacak.",
                para9:
                  "Ayarları 'Reklam seçenekleri/Verilerimi satma' seçeneği altında dilediğiniz zaman değiştirebilirsiniz.",
              },
            },
          },
          canonical: {
            title: 'Çerez politikasını onayladığınızı bize iletin',
            description: {
              uk: {
                first: 'Size en iyi çevrimiçi deneyimi sunabilmek için ',
                linkText: 'çerezler',
                last:
                  ' ullanıyoruz. Çerezleri kabul ediyorsanız lütfen bizi bilgilendirin.',
                linkUrl:
                  'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
              },
              international: {
                first: 'Size en iyi çevrimiçi deneyimi sunabilmek için ',
                linkText: 'çerezler',
                last:
                  ' ullanıyoruz. Çerezleri kabul ediyorsanız lütfen bizi bilgilendirin.',
                linkUrl:
                  'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
              },
            },
            accept: 'Evet, kabul ediyorum',
            reject: 'Hayır, beni ayarlara götür',
            rejectUrl:
              'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
          },
        },
      },
      media: {
        noJs: 'Cihazınızda ses/video gösterim programı bulunamadı',
        contentExpired: 'Bu içerik artık oynatılabilir durumda değil.',
        contentNotYetAvailable: 'Bu program henüz oynatılmaya hazır değil.',
        audio: 'Ses dosyası',
        photogallery: 'Fotoğraf galerisi',
        video: 'Video',
        listen: 'Listen',
        watch: 'İzle',
        liveLabel: 'CANLI',
        nextLabel: 'NEXT',
        previousRadioShow: 'Previous radio show',
        nextRadioShow: 'Next radio show',
        duration: 'Duration',
        recentEpisodes: 'Diğerleri',
      },
      socialEmbed: {
        caption: {
          textPrefixVisuallyHidden: 'Video altyazısı: ',
          text:
            'Uyarı: Üçüncü tarafların sağladığı içerikte reklam bulunabilir.',
        },
        fallback: {
          text: 'İçerik bulunamadı',
          linkText: 'Daha fazlası için %provider_name%',
          linkTextSuffixVisuallyHidden: ' Dış Link',
          warningText:
            'BBC, link verilen internet sitelerinin içeriğinden sorumlu değildir.',
        },
        skipLink: {
          text: '%provider_name% paylaşımını geçin',
          endTextVisuallyHidden: '%provider_name% paylaşımının sonu',
        },
      },
      include: {
        errorMessage:
          'Maalesef haberin bu bölümünü mobil sayfada görüntüleyemiyoruz',
        linkText: 'Tüm içeriği görmek için sayfanın tüm sürümünü görüntüleyin ',
      },
      topStoriesTitle: 'Manşet haber',
      featuresAnalysisTitle: 'Seçtiklerimiz',
    },
    brandSVG,
    mostRead: {
      header: 'En çok okunanlar',
      lastUpdated: 'Son güncelleme:',
      numberOfItems: 10,
      hasMostRead: true,
    },
    mostWatched: {
      header: 'En fazla izlenen içerik',
      numberOfItems: 5,
      hasMostWatched: true,
    },
    radioSchedule: {
      hasRadioSchedule: false,
    },
    recommendations: {
      hasStoryRecommendations: true,
      skipLink: {
        text: 'Haberin başlığını atlayın ve okumaya devam edin',
        endTextVisuallyHidden: 'Haberin sonu',
      },
    },
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/turkce/kurumsal-50221017',
        text: "Neden BBC'ye güvenebilirsiniz",
      },
      externalLink: {
        href:
          'https://www.bbc.co.uk/editorialguidelines/guidance/feeds-and-links',
        text: 'Link verilen internet sitelerine yaklaşımımız.',
      },
      links: [
        {
          href: 'https://www.bbc.com/turkce/kurumsal-36765772',
          text: 'Kullanım koşulları',
        },
        {
          href: 'https://www.bbc.com/turkce/kurumsal-36765774',
          text: 'Gizlilik politikası',
        },
        {
          href: 'https://www.bbc.com/usingthebbc/cookies/',
          text: 'Çerezler',
        },
        {
          href: 'https://www.bbc.co.uk/send/u50853841',
          text: "BBC'yle temas kurun",
        },
        {
          id: 'COOKIE_SETTINGS',
          href:
            'https://www.bbc.com/usingthebbc/cookies/how-does-the-bbc-use-cookies-for-advertising/',
          text: 'AdChoices / Do Not Sell My Info',
          lang: 'en-GB',
        },
      ],
      copyrightText:
        'BBC. BBC, link verilen internet sitelerinin içeriğinden sorumlu değildir.',
    },
    fonts: [
      F_REITH_SANS_BOLD,
      F_REITH_SANS_BOLD_ITALIC,
      F_REITH_SANS_ITALIC,
      F_REITH_SANS_REGULAR,
      F_REITH_SERIF_MEDIUM,
      F_REITH_SERIF_MEDIUM_ITALIC,
      F_REITH_SERIF_LIGHT,
    ],
    timezone: 'Asia/Istanbul',
    navigation: [
      {
        title: 'Haberler',
        url: '/turkce',
      },
      {
        title: 'Video',
        url: '/turkce/media/video',
      },
      {
        title: 'Spor',
        url: '/turkce/topics/c340qx04vwwt',
      },
      {
        title: 'Ekonomi',
        url: '/turkce/topics/cg726y2k82dt',
      },
      {
        title: 'Bilim',
        url: '/turkce/topics/c404v74nk56t',
      },
      {
        title: 'Teknoloji',
        url: '/turkce/topics/c2dwqnwkvnqt',
      },
      {
        title: 'Sağlık',
        url: '/turkce/topics/cnq68n6wgzdt',
      },
    ],
  },
};

export default withContext(service);
