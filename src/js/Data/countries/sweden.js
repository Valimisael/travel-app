import arena from '../../../img/sight-seeings/sweden/arena.jpg';
import bridge from '../../../img/sight-seeings/sweden/bridge.jpg';
import castle from '../../../img/sight-seeings/sweden/castle.jpg';
import hall from '../../../img/sight-seeings/sweden/hall.jpg';
import palace from '../../../img/sight-seeings/sweden/palace.jpg';
import torso from '../../../img/sight-seeings/sweden/torso.jpg';

const swedenGallery = [
  {
    original: arena,
    thumbnail: arena,
    translations: {
      en: {
        thumbnailLabel: 'Globe Arena',
        description: 'The largest spherical structure in the world, a venue for concerts and sporting events.'
      },
      ru: {
        thumbnailLabel: 'Глобен-Арена',
        description: 'Крупнейшее сферическое сооружение в мире, место проведения концертов и спортивных мероприятий.'
      },
      sv:{
        thumbnailLabel: 'Globen Arena',
        description: 'Den största sfäriska strukturen i världen, en plats för konserter och sportevenemang.'
      },
    }
  },
  {
    original: bridge,
    thumbnail: bridge,
    translations: {
      en: {
        thumbnailLabel: 'Øresund Bridge',
        description: 'Combined bridge-tunnel, including a double-track railway and a four-lane highway. Connects Denmark and Sweden.'
      },
      ru: {
        thumbnailLabel: 'Эресуннский мост',
        description: 'Совмещённый мост-тоннель, включающий двухпутную железную дорогу и четырёхполосную автомагистраль. Соединяет Данию и Швецию.'
      },
      sv:{
        thumbnailLabel: 'Øresundsbron',
        description: 'Kombinerad brotunnel, inklusive en dubbelspårig järnväg och en fyrfältig motorväg. Ansluter Danmark och Sverige.'
      },
    }
  },
  {
    original: castle,
    thumbnail: castle,
    translations: {
      en: {
        thumbnailLabel: 'Kalmar Castle',
        description: 'One of the most significant works of Northern European fortification art of the Renaissance.'
      },
      ru: {
        thumbnailLabel: 'Кальмарский замок',
        description: 'Одно из наиболее значительных произведений североевропейского фортификационного искусства эпохи Ренессанса.'
      },
      sv:{
        thumbnailLabel: 'Kalmar slott',
        description: 'Ett av de mest betydelsefulla verken av nordeuropeisk befästningskonst under renässansen.'
      },
    }
  },
  {
    original: hall,
    thumbnail: hall,
    translations: {
      en: {
        thumbnailLabel: 'Stockholm City Hall',
        description: 'The symbol of the Swedish capital, banquets and balls in honor of the Nobel laureates are held here.'
      },
      ru: {
        thumbnailLabel: 'Стокгольмская ратуша',
        description: 'Символ шведской столицы, здесь устраиваются банкеты и балы в честь Нобелевских лауретов.'
      },
      sv:{
        thumbnailLabel: 'Stockholms stadshus',
        description: 'Här hålls symbolen för den svenska huvudstaden, banketter och bollar för att hedra Nobelpristagarna.'
      },
    }
  },
  {
    original: palace,
    thumbnail: palace,
    translations: {
      en: {
        thumbnailLabel: 'Royal Palace in Stockholm',
        description: 'The official residence of the Swedish monarchs on the front promenade of Stadholmen Island in the center of Stockholm.'
      },
      ru: {
        thumbnailLabel: 'Королевский дворец в Стокгольме',
        description: 'Официальная резиденция шведских монархов на парадной набережной острова Стадхольмен в центре Стокгольма.'
      },
      sv:{
        thumbnailLabel: 'Kungliga slottet i Stockholm',
        description: 'De svenska monarkernas officiella bostad på strandpromenaden på Stadholmen Island i centrala Stockholm.'
      },
    }
  },
  {
    original: torso,
    thumbnail: torso,
    translations: {
      en: {
        thumbnailLabel: 'Turning Torso',
        description: 'The Turning Torso is a neo-futurist residential skyscraper in Sweden and the tallest building in Scandinavia.'
      },
      ru: {
        thumbnailLabel: 'Turning Torso',
        description: 'Небоскреб Turning Torso (Закрученный Торс) - это неофутурист жилой небоскреб в Швеции и самое высокое здание в Скандинавии.'
      },
      sv:{
        thumbnailLabel: 'Vrid torso',
        description: 'Turning Torso är en nyfuturistisk bostadsskyskrapa i Sverige och den högsta byggnaden i Skandinavien.'
      },
    }
  }
];

export {swedenGallery};