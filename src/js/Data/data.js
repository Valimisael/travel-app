import { IMAGES, THUMBS, GALLERY, VIDEO, LOGOS } from './media';

const CURRENCIESAPIURL = currencyCode => `https://www.nbrb.by/api/exrates/rates/${currencyCode}?parammode=1`;

const WEATHERKEY = '8e0be7a2327d38ca94a270674c50b6ff';
const WEATHERAPIURL = (city, lang) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=${WEATHERKEY}`;
const WEATHERICONURL = iconId => `http://openweathermap.org/img/wn/${iconId}@2x.png`;

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
    map: 'on the map',
    currencies: {
      euro: "Euro",
      dollar: 'Dollar',
      ruble: 'Belorussian Ruble'
    },
    error: 'Ooops! Something went wrong!',
    weather : {
      temp: 'temp',
      feelsLike: 'feels like',
      humidity: 'humidity',
      wind: 'wind',
      windSpeed: 'm/s'
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
    map: 'на карте',
    currencies: {
      euro: "Евро",
      dollar: 'Доллар',
      ruble: 'Белорусский рубль'
    },
    error: 'Ой-ой! Что-то пошло не так!',
    weather: {
      temp: "температура",
      feelsLike: "ощущается",
      humidity: "влажность",
      wind: "ветер",
      windSpeed: "м/с",
    }
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
    map: 'på kartan',
    currencies: {
      euro: "Euro",
      dollar: 'Dollar',
      ruble: 'Vitryska rubel'
    },
    error: 'Oj! Något gick fel!',
    weather: {
      temp: "temperatur",
      feelsLike: "känt",
      humidity: "fuktighet",
      wind: "vind",
      windSpeed: "m/s"
    }
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
      geo: [-35.2835, 149.128],
      zoom: 11,
      translations: {
        en: {
          country: 'Australia',
          capital: 'Canberra',
          description: 'A state in the Southern Hemisphere, located on the continent of the same name, as well as the nearby islands of the Pacific and Indian Oceans. When describing Australia, people often talk about the uniqueness of this or that fact. Even the very location of this country is unique - Australia is the only state in the world that occupies the territory of the entire continent. The largest island of Tasmania lies south of the continent. The official name of the country is the Australian Union.',
          currencyName: 'Australian Dollars'
        },
        ru: {
          country: 'Австралия',
          capital: 'Канберра',
          description: 'Государство в Южном полушарии, расположенное на одноимённом материке, а также близлежащих островах Тихого и Индийского океанов. При описании Австралии люди часто говорят об уникальности того или иного факта. Даже само расположение этой страны уникально — Австралия единственное в мире государство, занимающее территорию всего материка. Самый крупный остров Тасмания лежит к югу от континента. Официальное название страны — Австралийский союз.',
          currencyName: 'Австралийских долларов'
        },
        sv: {
          country: 'Australien',
          capital: 'Canberra',
          description: 'En stat på södra halvklotet, belägen på kontinenten med samma namn, liksom de närliggande öarna i Stilla havet och Indiska oceanen. När man beskriver Australien talar folk ofta om det unika med detta eller det faktum. Till och med själva detta lands läge är unikt - Australien är den enda staten i världen som upptar hela kontinentens territorium. Den största ön Tasmanien ligger söder om kontinenten. Landets officiella namn är Australian Union.',
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
      geo: [-15.7797, -47.9297],
      zoom: 10,
      translations: {
        en: {
          country: 'Brazil',
          capital: 'Brasília',
          description: 'One of the most attractive states of the South American continent in terms of tourism. Luxurious beaches with the purest golden sand and transparent ocean water, impenetrable jungle of the mysterious Amazon, the roar of waterfalls, the world famous Brazilian carnival - hardly any other country can boast of such a set of wonders. And if you add the subtle aroma of local coffee to this list and imagine a passionate Brazilian woman performing samba, it becomes clear why every year millions of guests from all over the world strive to visit these amazing places.',
          currencyName: 'Brazilian reais'
        },
        ru: {
          country: 'Бразилия',
          capital: 'Бразилиа',
          description: 'Одно из самых привлекательных с точки зрения туризма государств южноамериканского континента. Роскошные пляжи с чистейшим золотым песком и прозрачной океанской водой, непроходимые дебри таинственной Амазонки, рокот водопадов, знаменитый на весь мир бразильский карнавал — таким набором чудес вряд ли может похвастаться какая-либо другая страна. А если к этому перечню добавить тонкий аромат местного кофе и представить себе страстную бразильянку, исполняющую самбу, становится понятно, почему ежегодно миллионы гостей со всего мира стремятся побывать в этих удивительных местах.',
          currencyName: 'Бразильских реалов'
        },
        sv: {
          country: 'Brasilien',
          capital: 'Brasilia',
          description: 'En av de mest attraktiva staterna på den sydamerikanska kontinenten när det gäller turism. Lyxiga stränder med den renaste gyllene sanden och genomskinligt havsvatten, ogenomtränglig djungel i det mystiska Amazonas, vattenfallets brus, den världsberömda brasilianska karnevalen - knappast något annat land kan skryta med en sådan uppsättning underverk. Och om du lägger till den subtila aromen av lokalt kaffe i den här listan och föreställer dig en passionerad brasiliansk kvinna som utför samba, blir det klart varför varje år miljontals gäster från hela världen strävar efter att besöka dessa fantastiska platser.',
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
      geo: [51.5085, -0.12574],
      zoom: 10,
      translations: {
        en: {
          country: 'Great Britain',
          capital: 'London',
          description: 'A small state in the northwest of Europe. The full name of the country is the United Kingdom of Great Britain and Northern Ireland. In just a day, you can drive 1,440 km, separating the Lands End on the southwestern coast of Cornwall from the town of John O\'Groats in the north-east of Scotland. However, this small group of islands to the northwest of Europe has had a huge impact on the development of world culture. And now, despite its size, Great Britain is one of the most authoritative states in the world, a nuclear power, a permanent member of the UN Security Council. Heir to the British Empire, the largest in history, and existed in the XIX - early XX centuries.',
          currencyName: 'Pounds'
        },
        ru: {
          country: 'Великобритания',
          capital: 'Лондон',
          description: 'Небольшое государство на северо-западе Европы. Полное название страны — Соединённое Королевство Великобритании и Северной Ирландии. Всего за сутки можно проехать 1440 км, отделяющих мыс Лендс-Энд на юго-западном побережье Корнуолла от городка Джон-о\'Гротс на северо-востоке Шотландии. Однако это небольшая группа островов к северо-западу от Европы оказала огромное влияние на развитие мировой культуры. И сейчас, несмотря на свой размер, Великобритания — одно из авторитетнейших государств в мире, ядерная держава, постоянный член Совета Безопасности ООН. Наследница Британской империи, крупнейшей в истории, и существовавшей в XIX — начале XX веков.',
          currencyName: 'Фунтов стерлингов'
        },
        sv: {
          country: 'Storbritannien',
          capital: 'London',
          description: 'En liten stat i nordvästra Europa. Landets fullständiga namn är Storbritannien och Nordirland. På bara en dag kan du köra 1440 km och separera Lands End på Cornwalls sydvästra kust från staden John O\'Groats i nordöstra Skottland. Denna lilla grupp öar nordväst om Europa har dock haft en enorm inverkan på utvecklingen av världskulturen. Och nu, trots sin storlek, är Storbritannien en av de mest auktoritära staterna i världen, en kärnkraft, en permanent medlem av FN: s säkerhetsråd. Arvtagare till det brittiska imperiet, det största i historien, och existerade under XIX - tidigt XX-tal.',
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
      geo: [37.9838, 23.7278],
      zoom: 12,
      translations: {
        en: {
          country: 'Greece',
          capital: 'Athens',
          description: 'One of the most amazing and unique in its beauty countries in Europe. Located in the south of the continent, on the Balkan Peninsula, it is small both in terms of territory - the area, together with the islands adjacent to the coast of Asia Minor, is 131,994 km², and in terms of population, which totals 10.3 million people. However, in terms of historical, cultural, archaeological and linguistic heritage, not every large state can compare with Greece. The capital Athens is the oldest and most beautiful city in the world, a metropolis with a population of 4 million, founded around the 7th millennium BC.',
          currencyName: 'Euro'
        },
        ru: {
          country: 'Греция',
          capital: 'Афины',
          description: 'Одна из самых удивительных и неповторимых по своей красоте стран Европы. Расположенная на юге континента, на Балканском полуострове, она является небольшой как по территории – площадь вместе с прилегающими к побережью Малой Азии островами составляет 131 994 км², так и по населению, которое насчитывает 10,3 млн человек. Однако по историческому, культурному, археологическому и языковому наследию с Грецией может сравниться далеко не каждое крупное государство. Столица Афины – древнейший и красивейший город мира, мегаполис с 4-миллионным населением, основанный примерно в 7 тысячелетии до нашей эры.',
          currencyName: 'Евро'
        },
        sv: {
          country: 'Grekland',
          capital: 'Aten',
          description: 'En av de mest fantastiska och unika i sina skönhetsländer i Europa. Beläget på södra delen av kontinenten, på Balkanhalvön, är det litet både när det gäller territorium - området, tillsammans med öarna intill Mindre Asiens kust, är 131 994 km² och i termer av befolkningen, som totalt uppgår till 10,3 miljoner människor. Men när det gäller historiskt, kulturellt, arkeologiskt och språkligt arv kan inte alla stora stater jämföra sig med Grekland. Huvudstaden Aten är den äldsta och vackraste staden i världen, en metropol med en befolkning på 4 miljoner, grundad runt det 7: e årtusendet f.Kr.',
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
      geo: [35.6895, 139.692],
      zoom: 9,
      translations: {
        en: {
          country: 'Japan',
          capital: 'Tokio',
          description: 'One of the most developed countries in the world with a thousand-year history, distinctive culture and traditions. It is a land of contrasts: rice-growing rural hinterland and multimillion-dollar Tokyo, Buddhist monks and fashion-obsessed teenagers, solemn religious rituals and the noise of pachinko gambling halls, exquisite temple architecture and multi-story concrete boxes. Japan is located in East Asia, on 6852 islands. The largest: Honshu, Hokkaido, Kyushu and Shikoku, which make up 97% of the entire territory. The Japanese archipelago originates from the Sea of ​​Okhotsk in the north and extends far south to the East China Sea and the island of Taiwan. Despite the relatively small area of ​​377,944 km², the country is densely populated. As of 2018, 126,225,000 people live here. According to this indicator, small Japan is inferior to huge Russia by only 17.2 million people.',
          currencyName: 'Yen'
        },
        ru: {
          country: 'Япония',
          capital: 'Токио',
          description: 'Одно из самых развитых государств мира с тысячелетней историей, самобытной культурой и традициями. Это страна контрастов: возделывающей рис сельской глубинки и многомиллионного Токио, буддистских монахов и одержимых модой тинейджеров, торжественных религиозных ритуалов и шума игорных залов патинко, изысканной храмовой архитектуры и многоэтажных бетонных коробок. Япония расположена в Восточной Азии, на 6852 островах. Самые крупные: Хонсю, Хоккайдо, Кюсю и Сикоку, составляющие 97% всей территории. Японский архипелаг берет свое начало от Охотского моря на севере и простирается далеко на юг до Восточно-Китайского моря и острова Тайвань. Несмотря на сравнительно небольшую площадь – 377 944 км², страна густо населена. По данным 2018 года, здесь проживает 126 225 000 человек. По этому показателю маленькая Япония уступает огромной России всего на 17,2 млн человек.',
          currencyName: 'Иен'
        },
        sv: {
          country: 'Japan',
          capital: 'Tokyo',
          description: 'Ett av de mest utvecklade länderna i världen med en tusenårig historia, distinkt kultur och traditioner. Det är ett land med kontraster: risodlande landsbygdens inlandet och flera miljoner dollar Tokyo, buddhistiska munkar och modebesatta tonåringar, högtidliga religiösa ritualer och bullret från pachinkos spelhallar, utsökt tempelarkitektur och flera våningar i betonglådor. Japan ligger i Östasien, på 6852 öar. Den största: Honshu, Hokkaido, Kyushu och Shikoku, som utgör 97% av hela territoriet. Den japanska skärgården har sitt ursprung i Okhotskhavet i norr och sträcker sig långt söderut till Östra Kina och ön Taiwan. Trots det relativt lilla området 377 944 km² är landet tätbefolkat. Från och med 2018 bor 126 225 000 människor här. Enligt denna indikator är det lilla Japan sämre än det enorma Ryssland med endast 17,2 miljoner människor.',
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
      geo: [55.7522, 37.6156],
      zoom: 10,
      translations: {
        en: {
          country: 'Russia',
          capital: 'Moscow',
          description: 'The largest state in the world, occupying 1/8 of the land area and located in the northeast of Eurasia. Russia is a country with a long history, rich cultural heritage and generous nature. In Russia, you can find almost everything that a traveler meets individually in a particular country - sunny beaches of the subtropics and snowy mountain peaks, endless steppes and deep forests, turbulent rivers and warm seas.',
          currencyName: 'Russian Rubles'
        },
        ru: {
          country: 'Россия',
          capital: 'Москва',
          description: 'Крупнейшее в мире государство, занимающее 1/8 часть суши и расположенное на северо-востоке Евразии. Россия — страна с многовековой историей, богатым культурным наследием и щедрой природой. В России можно найти почти всё то, что встречает путешественник по отдельности в той или иной стране — солнечные пляжи субтропиков и снежные горные вершины, бескрайние степи и глухие леса, бурные реки и тёплые моря.',
          currencyName: 'Российских рублей'
        },
        sv: {
          country: 'Ryssland',
          capital: 'Moskva',
          description: 'Den största staten i världen, som upptar 1/8 av landområdet och ligger i nordöstra Eurasien. Ryssland är ett land med en lång historia, rikt kulturarv och generös natur. I Ryssland kan du hitta nästan allt som en resenär möter individuellt i ett visst land - soliga stränder med subtropiska och snöiga bergstoppar, oändliga stäpper och djupa skogar, turbulenta floder och varma hav.',
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
      geo: [59.3326, 18.0649],
      zoom: 11,
      translations: {
        en: {
          country: 'Sweden',
          capital: 'Stockholm',
          description: 'Sweden or the Kingdom of Sweden is the fifth largest state in Europe, occupying the eastern and southern parts of the Scandinavian Peninsula and washed by the Baltic Sea. Every tourist who has successfully registered Schengen in Sweden hopes to meet here with something of his own. For some, the undying fame of ABBA remains the main incentive to travel. In front of others, the birthplace of the Nobel Prize opens up broad prospects for acquaintance with the local cuisine and national mentality. And still others are attracted by the atmosphere of good old fairy tales. However, if you dig deeper, it becomes clear that the cliches mentioned are just the tip of the Swedish iceberg of sights and distinctive phenomena, skillfully hidden under the thickness of Scandinavian restraint.',
          currencyName: 'Swedish crowns'
        },
        ru: {
          country: 'Швеция',
          capital: 'Стокгольм',
          description: 'Швеция или Королевство Швеция – пятое по величине государство Европы, занимающее восточную и южную части Скандинавского полуострова и омываемое Балтийским морем. Каждый турист, благополучно оформивший шенген в Швецию, надеется встретиться здесь с чем-то своим. Для одних главным стимулом для путешествия остается немеркнущая слава «АББА». Перед другими родина Нобелевской премии открывает широкие перспективы для знакомства с местной кухней и национальным менталитетом. Ну а третьих притягивает сюда атмосфера старых добрых сказок. Однако, если копнуть глубже, станет понятно, что упомянутые клише – лишь макушка шведского айсберга достопримечательностей и самобытных явлений, искусно скрытых под толщей скандинавской сдержанности.',
          currencyName: 'Шведских крон'
        },
        sv: {
          country: 'Sverige',
          capital: 'Stockholm',
          description: 'Sverige eller Konungariket Sverige är den femte största staten i Europa, som ockuperar de östra och södra delarna av den skandinaviska halvön och tvättas av Östersjön. Varje turist som framgångsrikt har registrerat Schengen i Sverige hoppas kunna träffas här med något eget. För vissa är ABBA: s odödliga berömmelse det främsta incitamentet att resa. Framför andra öppnar Nobelprisets födelseort stora möjligheter för bekantskap med det lokala köket och den nationella mentaliteten. Och ännu andra lockas av atmosfären av gamla goda sagor. Men om du gräver djupare blir det klart att de nämnda klichéerna bara är toppen av det svenska isberget av sevärdheter och distinkta fenomen, skickligt gömda under tjockleken på skandinavisk återhållsamhet.',
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
      geo: [24.4667, 54.3667],
      zoom: 12,
      translations: {
        en: {
          country: 'UAE',
          capital: 'Abu Dhabi',
          description: 'The most spectacular showcase of the Middle East and one of the best vacation spots on the planet, is located in the northeast of the Arabian Peninsula and washed by the azure waters of the Persian and Oman Gulfs. El-Emirat al-Arabiya el-Muttahida, as its inhabitants call their country, is a federal state and includes 7 emirates: Abu Dhabi, Dubai, Sharjah, Ras al-Khaimah, Fujairah, Umm al-Qaiwain and Ajman ... Each of them has its own flavor, its own customs and natural characteristics.',
          currencyName: 'UAE dirham'
        },
        ru: {
          country: 'ОАЭ',
          capital: 'Абу-Даби',
          description: 'Самая эффектная витрина Ближнего Востока и одно из лучших мест отдыха на планете, расположились на северо-востоке Аравийского полуострова и омываются лазурными водами Персидского и Оманского заливов. Эль-Имарат эль-Арабия эль-Муттахида, как называют свою страну ее жители, является федеративным государством и включает в себя 7 эмиратов: Абу-Даби, Дубай, Шарджу, Рас-эль-Хайм, Фуджейру, Умм-эль-Кайвайн и Аджман. У каждого из них – своя изюминка, свои нравы и природные особенности.',
          currencyName: 'Дирхам ОАЭ'
        },
        sv: {
          country: 'UAE',
          capital: 'Abu Dhabi',
          description: 'Den mest spektakulära utställningen i Mellanöstern och en av de bästa semesterplatserna på planeten, ligger i nordöstra delen av Arabiska halvön och tvättas av det persiska och Oman Gulfs azurblå vatten. El-Emirat al-Arabiya el-Muttahida, som dess invånare kallar sitt land, är en federal stat och omfattar 7 emirat: Abu Dhabi, Dubai, Sharjah, Ras al-Khaimah, Fujairah, Umm al-Qaiwain och Ajman ... Var och en av dem har sin egen smak, sina egna seder och naturliga egenskaper.',
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

  export { COMMON, COUNTRIES, DEFAULTLANGUAGE, CURRENCIESAPIURL, DEFAULTCURRENCIESCODES, DECIMALPLACESFORCURRENCIES, FOOTER, WEATHERAPIURL, WEATHERICONURL }