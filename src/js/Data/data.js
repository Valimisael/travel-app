import australia from '../../img/countries-cards/australia.jpg';
import brazil from '../../img/countries-cards/brazil.jpg';
import england from '../../img/countries-cards/england.jpg';
import greece from '../../img/countries-cards/greece.jpg';
import japan from '../../img/countries-cards/japan.jpg';
import russia from '../../img/countries-cards/russia.jpg';
import sweden from '../../img/countries-cards/sweden.jpg';
import uae from '../../img/countries-cards/uae.jpg';

import {englandGallery} from '../Data/england';

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
    inPhotos: 'in photos'
  },
  ru: {
    placeHolder: 'Поиск',
    languages: [
      "Английский",
      "Русский",
      "Шведский"
    ],
    about: 'О стране',
    inPhotos: 'в фотографиях'
  },
  se: {
    placeHolder: 'Sök',
    languages: [
      "Engelska",
      "Ryska",
      "Svenska"
    ],
    about: 'Om landet',
    inPhotos: 'på fotografier'
  }
}

const countries = [
    {
      src: australia,
      url: '/australia',
      gallery: englandGallery,
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
      gallery: englandGallery,
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
      gallery: englandGallery,
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
      gallery: englandGallery,
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
      gallery: englandGallery,
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
      gallery: englandGallery,
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
      gallery: englandGallery,
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