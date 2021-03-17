import disneyland from '../../../img/sight-seeings/japan/disneyland.jpeg';
import fujiyama from '../../../img/sight-seeings/japan/fujiyama.jpg';
import fushimi from '../../../img/sight-seeings/japan/fushimi.jpg';
import palace from '../../../img/sight-seeings/japan/palace.jpg';
import sakurajima from '../../../img/sight-seeings/japan/sakurajima.jpg';
import skyTree from '../../../img/sight-seeings/japan/sky-tree.jpg';

const japanGallery = [
  {
    original: fujiyama,
    thumbnail: fujiyama,
    translations: {
      en: {
        thumbnailLabel: 'Fujiyama',
        description: 'An active stratovolcano on the Japanese island of Honshu, 90 kilometers southwest of Tokyo.'
      },
      ru: {
        thumbnailLabel: 'Фудзияма',
        description: 'Действующий стратовулкан на японском острове Хонсю в 90 километрах к юго-западу от Токио.'
      },
      sv:{
        thumbnailLabel: 'Fujiyama',
        description: 'En aktiv stratovulkan på den japanska ön Honshu, 90 kilometer sydväst om Tokyo.'
      },
    }
  },
  {
    original: fushimi,
    thumbnail: fushimi,
    translations: {
      en: {
        thumbnailLabel: 'Fushimi Inari',
        description: 'The temple complex and main temple of the goddess Inari, located in the Fushimi area of Kyoto.'
      },
      ru: {
        thumbnailLabel: 'Фусими Инари',
        description: 'Храмовый комплекс и главный храм богини Инари, расположенный в районе Фусими города Киото.'
      },
      sv:{
        thumbnailLabel: 'Fushimi Inari',
        description: 'Tempelkomplexet och gudinnan Inari, som ligger i Fushimi-området i Kyoto.'
      },
    }
  },
  {
    original: palace,
    thumbnail: palace,
    translations: {
      en: {
        thumbnailLabel: 'Tokyo Imperial Palace',
        description: 'The Palace of the Emperor of Japan in the Chiyoda Special District of the Tokyo Metropolis. Located on the grounds of the former Edo castle'
      },
      ru: {
        thumbnailLabel: 'Императорский дворец Токио',
        description: 'Дворец Императора Японии в специальном районе Тиёда метрополии Токио. Расположен на территории бывшего замка Эдо'
      },
      sv:{
        thumbnailLabel: 'Kejserliga palatset i Tokyo',
        description: 'Kejsaren av Japan i Chiyoda Special District i Tokyo Metropolis. Beläget på tomten till det tidigare Edo-slottet'
      },
    }
  },
  {
    original: sakurajima,
    thumbnail: sakurajima,
    translations: {
      en: {
        thumbnailLabel: 'Sakurajima',
        description: 'It is an active stratovolcano and is one of the most dangerous in Japan.'
      },
      ru: {
        thumbnailLabel: 'Сакурадзима',
        description: 'Является активным стратовулканом и входит в число самых опасных в Японии.'
      },
      sv:{
        thumbnailLabel: 'Sakurajima',
        description: 'Det är en aktiv stratovulkan och är en av de farligaste i Japan.'
      },
    }
  },
  {
    original: skyTree,
    thumbnail: skyTree,
    translations: {
      en: {
        thumbnailLabel: 'Tokyo sky tree',
        description: 'The tallest TV tower in the world. Its huge spire is visible from anywhere in the city.'
      },
      ru: {
        thumbnailLabel: 'Телевизионная башня Токио',
        description: 'Самая высокая телебашня в мире. Ее огромный шпиль заметен из любой точки города.'
      },
      sv:{
        thumbnailLabel: 'Tokyo himmelträd',
        description: 'Världens högsta TV-torn. Dess enorma spir är synlig var som helst i staden.'
      },
    }
  },
  {
    original: disneyland,
    thumbnail: disneyland,
    translations: {
      en: {
        thumbnailLabel: 'Disneyland',
        description: 'Disneyland Tokyo was the first to be built outside the United States. This amusement park is one of the main attractions in Japan.'
      },
      ru: {
        thumbnailLabel: 'Диснейленд',
        description: 'Диснейленд в Токио стал первым, построенным за пределами США. Этот парк развлечений — одна из главных достопримечательностей Японии.'
      },
      sv:{
        thumbnailLabel: 'Disneyland',
        description: 'Disneyland Tokyo var det första som byggdes utanför USA. Denna nöjespark är en av de största attraktionerna i Japan.'
      },
    }
  }
];

export {japanGallery};