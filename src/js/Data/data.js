import { IMAGES, THUMBS, GALLERY, VIDEO, LOGOS} from './media';

const CURRENCIESAPIURL = currencyCode => `https://www.nbrb.by/api/exrates/rates/${currencyCode}?parammode=1`;

const DEFAULTLANGUAGE = 'en';
const DEFAULTCURRENCIESCODES = {
  euro: '978',
  dollar: '840',
}
const DECIMALPLACESFORCURRENCIES = 2;

const COMMON = {
  en: {
    placeHolder: 'Search',
    languages: [
      "English",
      "Russian",
      "Swedish"
    ],
    about: 'About country',
    inPhotos: 'in photos',
    video: 'Video tour',
    currencies: {
      euro: "Euro",
      dollar: 'Dollar',
      ruble: 'Belorussian Ruble'
    },
    error: 'Ooops! Something went wrong!'
  },
  ru: {
    placeHolder: 'Поиск',
    languages: [
      "Английский",
      "Русский",
      "Шведский"
    ],
    about: 'О стране',
    inPhotos: 'в фотографиях',
    video: 'Видео-тур',
    currencies: {
      euro: "Евро",
      dollar: 'Доллар',
      ruble: 'Белорусский рубль'
    },
    error: 'Ой-ой! Что-то пошло не так!'
  },
  sv: {
    placeHolder: 'Sök',
    languages: [
      "Engelska",
      "Ryska",
      "Svenska"
    ],
    about: 'Om landet',
    inPhotos: 'på fotografier',
    video: 'Videoturnér',
    currencies: {
      euro: "Euro",
      dollar: 'Dollar',
      ruble: 'Vitryska rubel'
    },
    error: 'Oj! Något gick fel!'
  },
};

const COUNTRIES = [
    {
      name: 'australia',
      src: IMAGES.australia,
      thumb: THUMBS.australiaThumb,
      url: '/australia',
      gallery: GALLERY.australiaGallery,
      timeZone: 'Australia/Canberra',
      translations: {
        en: {
          country: 'Australia',
          capital: 'Canberra',
          currencyName: 'Australian Dollars'
        },
        ru: {
          country: 'Австралия',
          capital: 'Канберра',
          currencyName: 'Австралийских долларов'
        },
        sv: {
          country: 'Australien',
          capital: 'Canberra',
          currencyName: 'Australiska dollar'
        }
      },
      currencyCode: '036'
    },
    {
      name: 'brazil',
      src: IMAGES.brazil,
      thumb: THUMBS.brazilThumb,
      url: '/brazil',
      gallery: GALLERY.brazilGallery,
      timeZone: 'Brazil/East',
      translations: {
        en: {
          country: 'Brazil',
          capital: 'Brasília',
          currencyName: 'Brazilian reais'
        },
        ru: {
          country: 'Бразилия',
          capital: 'Бразилиа',
          currencyName: 'Бразильских реалов'
        },
        sv: {
          country: 'Brasilien',
          capital: 'Brasilia',
          currencyName: 'Brasiliansk reais'
        }
      },
      currencyCode: '986'
    },
    {
      name: 'great-britain',
      src: IMAGES.england,
      thumb: THUMBS.englandThumb,
      url: '/great-britain',
      gallery: GALLERY.englandGallery,
      video: VIDEO.greatBritainVideo,
      poster: IMAGES.england,
      timeZone: 'Europe/London',
      translations: {
        en: {
          country: 'Great Britain',
          capital: 'London',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          currencyName: 'Pounds'
        },
        ru: {
          country: 'Великобритания',
          capital: 'Лондон',
          description: 'Лорэм ипсум долор сит амет)',
          currencyName: 'Фунтов стерлингов'
        },
        sv: {
          country: 'Storbritannien',
          capital: 'London',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          currencyName: 'Pund'
        },
      },
      currencyCode: '826'
    },
    {
      name: 'greece',
      src: IMAGES.greece,
      thumb: THUMBS.greeceThumb,
      url: '/greece',
      gallery: GALLERY.greeceGallery,
      timeZone: 'Europe/Athens',
      translations: {
        en: {
          country: 'Greece',
          capital: 'Athens',
          currencyName: 'Euro'
        },
        ru: {
          country: 'Греция',
          capital: 'Афины',
          currencyName: 'Евро'
        },
        sv: {
          country: 'Grekland',
          capital: 'Aten',
          currencyName: 'Euro'
        }
      },
      currencyCode: '978'
    },
    {
      name: 'japan',
      src: IMAGES.japan,
      thumb: THUMBS.japanThumb,
      url: '/japan',
      gallery: GALLERY.japanGallery,
      timeZone: 'Japan',
      translations: {
        en: {
          country: 'Japan',
          capital: 'Tokio',
          currencyName: 'Yen'
        },
        ru: {
          country: 'Япония',
          capital: 'Токио',
          currencyName: 'Иен'
        },
        sv: {
          country: 'Japan',
          capital: 'Tokyo',
          currencyName: 'Yen'
        }
      },
      currencyCode: '392'
    },
    {
      name: 'russia',
      src: IMAGES.russia,
      thumb: THUMBS.russiaThumb,
      url: '/russia',
      gallery: GALLERY.russiaGallery,
      timeZone: 'Europe/Moscow',
      translations: {
        en: {
          country: 'Russia',
          capital: 'Moscow',
          currencyName: 'Russian Rubles'
        },
        ru: {
          country: 'Россия',
          capital: 'Москва',
          currencyName: 'Российских рублей'
        },
        sv: {
          country: 'Ryssland',
          capital: 'Moskva',
          currencyName: 'Ryska rubel'
        }
      },
      currencyCode: '643'
    },
    {
      name: 'sweden',
      src: IMAGES.sweden,
      thumb: THUMBS.swedenThumb,
      url: '/sweden',
      gallery: GALLERY.swedenGallery,
      timeZone: 'Europe/Stockholm',
      translations: {
        en: {
          country: 'Sweden',
          capital: 'Stockholm',
          currencyName: 'Swedish crowns'
        },
        ru: {
          country: 'Швеция',
          capital: 'Стокгольм',
          currencyName: 'Шведских крон'
        },
        sv: {
          country: 'Sverige',
          capital: 'Stockholm',
          currencyName: 'Svenska kronor'
        }
      },
      currencyCode: '752'
    },
    {
      name: 'uae',
      src: IMAGES.uae,
      thumb: THUMBS.uaeThumb,
      url: '/uae',
      gallery: GALLERY.uaeGallery,
      timeZone: 'Asia/Dubai',
      translations: {
        en: {
          country: 'UAE',
          capital: 'Abu Dhabi',
          currencyName: 'UAE dirham'
        },
        ru: {
          country: 'ОАЭ',
          capital: 'Абу-Даби',
          currencyName: 'Дирхам ОАЭ'
        },
        sv: {
          country: 'UAE',
          capital: 'Abu Dhabi',
          currencyName: 'UAE dirham'
        }
      },
      currencyCode: '784'
    },
  ]

  const FOOTER = {
    author: [
      {
        name: 'Valimisael',
        link: 'https://github.com/Valimisael',
      },
      {
        name: 'Jimmba',
        link: 'https://github.com/Jimmba',
      },
    ],
    logo: {
      img: LOGOS.footerLogo,
      alt: 'RSSchool JS',
      link: 'https://rs.school/js/',
    },
    year: '2021',
  }

  export { COMMON, COUNTRIES, DEFAULTLANGUAGE, CURRENCIESAPIURL, DEFAULTCURRENCIESCODES, DECIMALPLACESFORCURRENCIES, FOOTER }