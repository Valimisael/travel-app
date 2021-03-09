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

const defaultLanguage = 'en';

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
    video: 'Video tour'
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
    video: 'Видео-тур'
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
    video: 'Videoturnér'
  }
}

const countries = [
    {
      src: australia,
      url: '/australia',
      gallery: australiaGallery,
      translations: {
        en: {
          country: 'Australia',
          capital: 'Canberra',
        },
        ru: {
          country: 'Австралия',
          capital: 'Канберра',
        },
        se: {
          country: 'Australien',
          capital: 'Canberra',
        }
      }
    },
    {
      src: brazil,
      url: '/brazil',
      gallery: brazilGallery,
      translations: {
        en: {
          country: 'Brazil',
          capital: 'Brasília',
        },
        ru: {
          country: 'Бразилия',
          capital: 'Бразилиа',
        },
        se: {
          country: 'Brasilien',
          capital: 'Brasilia',
        }
      }
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
        },
        ru: {
          country: 'Великобритания',
          capital: 'Лондон',
          description: 'Лорэм ипсум долор сит амет)',
        },
        se: {
          country: 'Storbritannien',
          capital: 'London',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        }
      }
    },
    {
      src: greece,
      url: '/greece',
      gallery: greeceGallery,
      translations: {
        en: {
          country: 'Greece',
          capital: 'Athens',
        },
        ru: {
          country: 'Греция',
          capital: 'Афины',
        },
        se: {
          country: 'Grekland',
          capital: 'Aten',
        }
      }
    },
    {
      src: japan,
      url: '/japan',
      gallery: japanGallery,
      translations: {
        en: {
          country: 'Japan',
          capital: 'Tokio',
        },
        ru: {
          country: 'Япония',
          capital: 'Токио',
        },
        se: {
          country: 'Japan',
          capital: 'Tokyo',
        }
      }
    },
    {
      src: russia,
      url: '/russia',
      gallery: russiaGallery,
      translations: {
        en: {
          country: 'Russia',
          capital: 'Moscow',
        },
        ru: {
          country: 'Россия',
          capital: 'Москва',
        },
        se: {
          country: 'Ryssland',
          capital: 'Moskva',
        }
      }
    },
    {
      src: sweden,
      url: '/sweden',
      gallery: swedenGallery,
      translations: {
        en: {
          country: 'Sweden',
          capital: 'Stockholm',
        },
        ru: {
          country: 'Швеция',
          capital: 'Стокгольм',
        },
        se: {
          country: 'Sverige',
          capital: 'Stockholm',
        }
      }
    },
    {
      src: uae,
      url: '/uae',
      gallery: uaeGallery,
      translations: {
        en: {
          country: 'UAE',
          capital: 'Abu Dhabi',
        },
        ru: {
          country: 'ОАЭ',
          capital: 'Абу-Даби',
        },
        se: {
          country: 'UAE',
          capital: 'Abu Dhabi',
        }
      }
    },
  ]

  export { common, countries, defaultLanguage }