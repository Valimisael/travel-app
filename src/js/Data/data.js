import australia from '../../img/countries-cards/australia.jpg';
import brazil from '../../img/countries-cards/brazil.jpg';
import england from '../../img/countries-cards/england.jpg';
import greece from '../../img/countries-cards/greece.jpg';
import japan from '../../img/countries-cards/japan.jpg';
import russia from '../../img/countries-cards/russia.jpg';
import sweden from '../../img/countries-cards/sweden.jpg';
import uae from '../../img/countries-cards/uae.jpg';

import greatBritainVideo from '../../video/Great Britain.mp4';

import {australiaGallery} from '../Data/australia';
import {brazilGallery} from '../Data/brazil';
import {englandGallery} from '../Data/england';
import {greeceGallery} from '../Data/greece';
import {japanGallery} from '../Data/japan';
import {russiaGallery} from '../Data/russia';
import {swedenGallery} from '../Data/sweden';
import {uaeGallery} from '../Data/uae';

const currenciesApiURL = currencyCode => `https://www.nbrb.by/api/exrates/rates/${currencyCode}?parammode=1`;

const defaultLanguage = 'en';
const defaultCurrenciesCodes = {
  euro: '978',
  dollar: '840',
}
const decimalPlacesForCurrencies = 2;

const common = {
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
    }
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
    }
  },
  se: {
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
  },
};

const countries = [
    {
      src: australia,
      url: '/australia',
      gallery: australiaGallery,
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
        se: {
          country: 'Australien',
          capital: 'Canberra',
          currencyName: 'Australiska dollar'
        }
      },
      currencyCode: '036'
    },
    {
      src: brazil,
      url: '/brazil',
      gallery: brazilGallery,
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
        se: {
          country: 'Brasilien',
          capital: 'Brasilia',
          currencyName: 'Brasiliansk reais'
        }
      },
      currencyCode: '986'
    },
    {
      src: england,
      url: '/great-britain',
      gallery: englandGallery,
      video: greatBritainVideo,
      poster: england,
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
        se: {
          country: 'Storbritannien',
          capital: 'London',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          currencyName: 'Pund'
        },
      },
      currencyCode: '826'
    },
    {
      src: greece,
      url: '/greece',
      gallery: greeceGallery,
      translations: {
        en: {
          country: 'Greece',
          capital: 'Athens',
          currencyName: 'Евро'
        },
        ru: {
          country: 'Греция',
          capital: 'Афины',
          currencyName: 'Euro'
        },
        se: {
          country: 'Grekland',
          capital: 'Aten',
          currencyName: 'Euro'
        }
      },
      currencyCode: '978'
    },
    {
      src: japan,
      url: '/japan',
      gallery: japanGallery,
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
        se: {
          country: 'Japan',
          capital: 'Tokyo',
          currencyName: 'Yen'
        }
      },
      currencyCode: '392'
    },
    {
      src: russia,
      url: '/russia',
      gallery: russiaGallery,
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
        se: {
          country: 'Ryssland',
          capital: 'Moskva',
          currencyName: 'Ryska rubel'
        }
      },
      currencyCode: '643'
    },
    {
      src: sweden,
      url: '/sweden',
      gallery: swedenGallery,
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
        se: {
          country: 'Sverige',
          capital: 'Stockholm',
          currencyName: 'Svenska kronor'
        }
      },
      currencyCode: '752'
    },
    {
      src: uae,
      url: '/uae',
      gallery: uaeGallery,
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
        se: {
          country: 'UAE',
          capital: 'Abu Dhabi',
          currencyName: 'UAE dirham'
        }
      },
      currencyCode: '784'
    },
  ]

  export { common, countries, defaultLanguage, currenciesApiURL, defaultCurrenciesCodes, decimalPlacesForCurrencies }