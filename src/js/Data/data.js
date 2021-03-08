import australia from '../../img/countries-cards/australia.jpg';
import brazil from '../../img/countries-cards/brazil.jpg';
import england from '../../img/countries-cards/england.jpg';
import greece from '../../img/countries-cards/greece.jpg';
import japan from '../../img/countries-cards/japan.jpg';
import russia from '../../img/countries-cards/russia.jpg';
import sweden from '../../img/countries-cards/sweden.jpg';
import uae from '../../img/countries-cards/uae.jpg';

const defaultLanguage = 'en';

const header = {
  en: {
    placeHolder: 'Search',
    languages: [
      "English",
      "Russian",
      "Swedish"
    ]
  },
  ru: {
    placeHolder: 'Поиск',
    languages: [
      "Английский",
      "Русский",
      "Шведский"
    ]
  },
  se: {
    placeHolder: 'Sök',
    languages: [
      "Engelska",
      "Ryska",
      "Svenska"
    ]
  }
}

const countries = [
    {
      src: australia,
      url: '/',
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
      url: '/',
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
      url: '/',
      translations: {
        en: {
          country: 'Great Britain',
          capital: 'London',
        },
        ru: {
          country: 'Великобритания',
          capital: 'Лондон',
        },
        se: {
          country: 'Storbritannien',
          capital: 'London',
        }
      }
    },
    {
      src: greece,
      url: '/',
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
      url: '/',
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
      url: '/',
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
      url: '/',
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
      url: '/',
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

  export { header, countries, defaultLanguage }