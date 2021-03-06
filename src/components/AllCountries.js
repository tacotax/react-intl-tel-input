// Tell JSHint to ignore this warning: 'character may get silently deleted by one or more browsers'
// jshint -W100

// Array of country objects for the flag dropdown.
// Each contains a name, country code (ISO 3166-1 alpha-2) and dial code.

// Originally from https://github.com/mledoze/countries
// then with a couple of manual re-arrangements to be alphabetical
// then changed Kazakhstan from +76 to +7
// and Vatican City from +379 to +39 (see issue 50)
// and Caribean Netherlands from +5997 to +599
// and Curacao from +5999 to +599
// Removed:  Kosovo, Pitcairn Islands, South Georgia

// UPDATE Sept 12th 2015
// List of regions that have iso2 country codes, which I have chosen to omit:
// (based on this information: https://en.wikipedia.org/wiki/List_of_country_calling_codes)
// AQ - Antarctica - all different country codes depending on which 'base'
// BV - Bouvet Island - no calling code
// GS - South Georgia and the South Sandwich Islands -
// 'inhospitable collection of islands' - same flag and calling code as Falkland Islands
// HM - Heard Island and McDonald Islands - no calling code
// PN - Pitcairn - tiny population (56), same calling code as New Zealand
// TF - French Southern Territories - no calling code
// UM - United States Minor Outlying Islands - no calling code

// UPDATE the criteria of supported countries or territories (see issue 297)
// Have an iso2 code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
// Have a country calling code: https://en.wikipedia.org/wiki/List_of_country_calling_codes
// Have a flag
// Must be supported by libphonenumber: https://github.com/googlei18n/libphonenumber

// Update: converted objects to arrays to save bytes!
// Update: added 'priority' for countries with the same dialCode as others
// Update: added array of area codes for countries with the same dialCode as others

// So each country array has the following information:
// [
//    Country name,
//    iso2 code,
//    International dial code,
//    Order (if >1 country with same dial code),
//    Area codes (if >1 country with same dial code)
// ]
const defaultCountriesData = [
  [
    'Afghanistan',
    'af',
    '93',
  ],
  [
    'Afrique du Sud',
    'za',
    '27',
  ],
  [
    'Albanie',
    'al',
    '355',
  ],
  [
    'Algérie',
    'dz',
    '213',
  ],
  [
    'Allemagne',
    'de',
    '49',
  ],
  [
    'Andorre',
    'ad',
    '376',
  ],
  [
    'Angola',
    'ao',
    '244',
  ],
  [
    'Anguilla',
    'ai',
    '1264',
  ],
  [
    'Antigua-et-Barbuda',
    'ag',
    '1268',
  ],
  [
    'Arabie Saoudite',
    'sa',
    '966',
  ],
  [
    'Argentine',
    'ar',
    '54',
  ],
  [
    'Arménie',
    'am',
    '374',
  ],
  [
    'Aruba',
    'aw',
    '297',
  ],
  [
    'Australie',
    'au',
    '61',
    0,
  ],
  [
    'Autriche',
    'at',
    '43',
  ],
  [
    'Azerbaïdjan',
    'az',
    '994',
  ],
  [
    'Bahamas',
    'bs',
    '1242',
  ],
  [
    'Bahreïn',
    'bh',
    '973',
  ],
  [
    'Bangladesh',
    'bd',
    '880',
  ],
  [
    'Barbade',
    'bb',
    '1246',
  ],
  [
    'Belgique',
    'be',
    '32',
  ],
  [
    'Belize',
    'bz',
    '501',
  ],
  [
    'Bénin',
    'bj',
    '229',
  ],
  [
    'Bermudes',
    'bm',
    '1441',
  ],
  [
    'Bhoutan',
    'bt',
    '975',
  ],
  [
    'Biélorussie',
    'by',
    '375',
  ],
  [
    'Bolivie',
    'bo',
    '591',
  ],
  [
    'Bosnie-Herzégovine',
    'ba',
    '387',
  ],
  [
    'Botswana',
    'bw',
    '267',
  ],
  [
    'Brésil',
    'br',
    '55',
  ],
  [
    'Brunei',
    'bn',
    '673',
  ],
  [
    'Bulgarie',
    'bg',
    '359',
  ],
  [
    'Burkina Faso',
    'bf',
    '226',
  ],
  [
    'Burundi ',
    'bi',
    '257',
  ],
  [
    'Cambodge',
    'kh',
    '855',
  ],
  [
    'Cameroun',
    'cm',
    '237',
  ],
  [
    'Canada',
    'ca',
    '1',
    1,
    [
      '204',
      '226',
      '236',
      '249',
      '250',
      '289',
      '306',
      '343',
      '365',
      '387',
      '403',
      '416',
      '418',
      '431',
      '437',
      '438',
      '450',
      '506',
      '514',
      '519',
      '548',
      '579',
      '581',
      '587',
      '604',
      '613',
      '639',
      '647',
      '672',
      '705',
      '709',
      '742',
      '778',
      '780',
      '782',
      '807',
      '819',
      '825',
      '867',
      '873',
      '902',
      '905',
    ],
  ],
  [
    'Cap-Vert',
    'cv',
    '238',
  ],
  [
    'Chili',
    'cl',
    '56',
  ],
  [
    'Chine',
    'cn',
    '86',
  ],
  [
    'Christmas',
    'cx',
    '61',
    2,
  ],
  [
    'Chypre',
    'cy',
    '357',
  ],
  [
    'Cocos',
    'cc',
    '61',
    1,
  ],
  [
    'Colombie',
    'co',
    '57',
  ],
  [
    'Comores',
    'km',
    '269',
  ],
  [
    'Congo',
    'cd',
    '243',
  ],
  [
    'Congo (RD)',
    'cg',
    '242',
  ],
  [
    'Corée du Nord',
    'kp',
    '850',
  ],
  [
    'Corée du Sud',
    'kr',
    '82',
  ],
  [
    'Costa Rica',
    'cr',
    '506',
  ],
  [
    'Côte d’Ivoire',
    'ci',
    '225',
  ],
  [
    'Croatie',
    'hr',
    '385',
  ],
  [
    'Cuba',
    'cu',
    '53',
  ],
  [
    'Curaçao',
    'cw',
    '599',
    0,
  ],
  [
    'Danemark',
    'dk',
    '45',
  ],
  [
    'Djibouti',
    'dj',
    '253',
  ],
  [
    'Dominique',
    'dm',
    '1767',
  ],
  [
    'Egypte',
    'eg',
    '20',
  ],
  [
    'Emirats arabes unis',
    'ae',
    '971',
  ],
  [
    'Equateur',
    'ec',
    '593',
  ],
  [
    'Erythrée',
    'er',
    '291',
  ],
  [
    'Espagne',
    'es',
    '34',
  ],
  [
    'Estonie',
    'ee',
    '372',
  ],
  [
    'Etats-Unis',
    'us',
    '1',
    0,
  ],
  [
    'Ethiopie',
    'et',
    '251',
  ],
  [
    'Féroé',
    'fo',
    '298',
  ],
  [
    'Fidji',
    'fj',
    '679',
  ],
  [
    'Finlande',
    'fi',
    '358',
    0,
  ],
  [
    'France',
    'fr',
    '33',
  ],
  [
    'Gabon',
    'ga',
    '241',
  ],
  [
    'Gambie',
    'gm',
    '220',
  ],
  [
    'Géorgie',
    'ge',
    '995',
  ],
  [
    'Ghana',
    'gh',
    '233',
  ],
  [
    'Gibraltar',
    'gi',
    '350',
  ],
  [
    'Grèce',
    'gr',
    '30',
  ],
  [
    'Grenade',
    'gd',
    '1473',
  ],
  [
    'Groenland',
    'gl',
    '299',
  ],
  [
    'Guadeloupe',
    'gp',
    '590',
    0,
  ],
  [
    'Guam',
    'gu',
    '1671',
  ],
  [
    'Guatemala',
    'gt',
    '502',
  ],
  [
    'Guernesey',
    'gg',
    '44',
    1,
  ],
  [
    'Guinée',
    'gn',
    '224',
  ],
  [
    'Guinée Bissau',
    'gw',
    '245',
  ],
  [
    'Guinée équatoriale',
    'gq',
    '240',
  ],
  [
    'Guyana',
    'gy',
    '592',
  ],
  [
    'Guyane française',
    'gf',
    '594',
  ],
  [
    'Haïti',
    'ht',
    '509',
  ],
  [
    'Honduras',
    'hn',
    '504',
  ],
  [
    'Hong Kong',
    'hk',
    '852',
  ],
  [
    'Hongrie',
    'hu',
    '36',
  ],
  [
    'Inde',
    'in',
    '91',
  ],
  [
    'Indonésie',
    'id',
    '62',
  ],
  [
    'Iran',
    'ir',
    '98',
  ],
  [
    'Iraq',
    'iq',
    '964',
  ],
  [
    'Irlande',
    'ie',
    '353',
  ],
  [
    'Islande',
    'is',
    '354',
  ],
  [
    'Israël',
    'il',
    '972',
  ],
  [
    'Italie',
    'it',
    '39',
    0,
  ],
  [
    'Jamaïque',
    'jm',
    '1876',
  ],
  [
    'Japon',
    'jp',
    '81',
  ],
  [
    'Jersey',
    'je',
    '44',
    3,
  ],
  [
    'Jordanie',
    'jo',
    '962',
  ],
  [
    'Kazakhstan',
    'kz',
    '7',
    1,
  ],
  [
    'Kenya',
    'ke',
    '254',
  ],
  [
    'Kirghistan',
    'kg',
    '996',
  ],
  [
    'Kiribati',
    'ki',
    '686',
  ],
  [
    'Kosovo',
    'xk',
    '383',
  ],
  [
    'Koweit',
    'kw',
    '965',
  ],
  [
    'La Réunion',
    're',
    '262',
    0,
  ],
  [
    'Laos',
    'la',
    '856',
  ],
  [
    'Lesotho',
    'ls',
    '266',
  ],
  [
    'Lettonie',
    'lv',
    '371',
  ],
  [
    'Liban',
    'lb',
    '961',
  ],
  [
    'Liberia',
    'lr',
    '231',
  ],
  [
    'Libye',
    'ly',
    '218',
  ],
  [
    'Liechtenstein',
    'li',
    '423',
  ],
  [
    'Lituanie',
    'lt',
    '370',
  ],
  [
    'Luxembourg',
    'lu',
    '352',
  ],
  [
    'Macao',
    'mo',
    '853',
  ],
  [
    'Macédoine',
    'mk',
    '389',
  ],
  [
    'Madagascar',
    'mg',
    '261',
  ],
  [
    'Malaisie',
    'my',
    '60',
  ],
  [
    'Malawi',
    'mw',
    '265',
  ],
  [
    'Maldives',
    'mv',
    '960',
  ],
  [
    'Mali',
    'ml',
    '223',
  ],
  [
    'Malte',
    'mt',
    '356',
  ],
  [
    'Maroc',
    'ma',
    '212',
    0,
  ],
  [
    'Martinique',
    'mq',
    '596',
  ],
  [
    'Maurice',
    'mu',
    '230',
  ],
  [
    'Mauritanie',
    'mr',
    '222',
  ],
  [
    'Mayotte',
    'yt',
    '262',
    1,
  ],
  [
    'Mexique',
    'mx',
    '52',
  ],
  [
    'Micronésie',
    'fm',
    '691',
  ],
  [
    'Moldavie',
    'md',
    '373',
  ],
  [
    'Monaco',
    'mc',
    '377',
  ],
  [
    'Mongolie',
    'mn',
    '976',
  ],
  [
    'Monténégro',
    'me',
    '382',
  ],
  [
    'Montserrat',
    'ms',
    '1664',
  ],
  [
    'Mozambique',
    'mz',
    '258',
  ],
  [
    'Myanmar',
    'mm',
    '95',
  ],
  [
    'Namibie',
    'na',
    '264',
  ],
  [
    'Nauru',
    'nr',
    '674',
  ],
  [
    'Népal',
    'np',
    '977',
  ],
  [
    'Nicaragua',
    'ni',
    '505',
  ],
  [
    'Niger',
    'ne',
    '227',
  ],
  [
    'Nigeria',
    'ng',
    '234',
  ],
  [
    'Niue',
    'nu',
    '683',
  ],
  [
    'Norvège',
    'no',
    '47',
    0,
  ],
  [
    'Nouvelle-Calédonie',
    'nc',
    '687',
  ],
  [
    'Nouvelle-Zélande',
    'nz',
    '64',
  ],
  [
    'Oman',
    'om',
    '968',
  ],
  [
    'Ouganda',
    'ug',
    '256',
  ],
  [
    'Ouzbékistan',
    'uz',
    '998',
  ],
  [
    'Pakistan',
    'pk',
    '92',
  ],
  [
    'Palaos',
    'pw',
    '680',
  ],
  [
    'Palestine',
    'ps',
    '970',
  ],
  [
    'Panama',
    'pa',
    '507',
  ],
  [
    'Papouasie-Nouvelle-Guinée',
    'pg',
    '675',
  ],
  [
    'Paraguay',
    'py',
    '595',
  ],
  [
    'Pays-Bas',
    'nl',
    '31',
  ],
  [
    'Pérou',
    'pe',
    '51',
  ],
  [
    'Philippines',
    'ph',
    '63',
  ],
  [
    'Pologne',
    'pl',
    '48',
  ],
  [
    'Polynésie française',
    'pf',
    '689',
  ],
  [
    'Porto Rico',
    'pr',
    '1',
    3,
    ['787', '939'],
  ],
  [
    'Portugal',
    'pt',
    '351',
  ],
  [
    'Qatar',
    'qa',
    '974',
  ],
  [
    'République centrafricaine',
    'cf',
    '236',
  ],
  [
    'République Dominicaine',
    'do',
    '1',
    2,
    ['809', '829', '849'],
  ],
  [
    'République Tchèque',
    'cz',
    '420',
  ],
  [
    'Roumanie',
    'ro',
    '40',
  ],
  [
    'Royaume-Uni',
    'gb',
    '44',
    0,
  ],
  [
    'Russie',
    'ru',
    '7',
    0,
  ],
  [
    'Rwanda',
    'rw',
    '250',
  ],
  [
    'Saint-Barthélemy',
    'bl',
    '590',
    1,
  ],
  [
    'Sainte-Hélène',
    'sh',
    '290',
  ],
  [
    'Saint-Kitts-et-Nevis',
    'kn',
    '1869',
  ],
  [
    'Sainte-Lucie',
    'lc',
    '1758',
  ],
  [
    'Saint-Marin',
    'sm',
    '378',
  ],
  [
    'Saint-Martin',
    'sx',
    '1721',
  ],
  [
    'Saint-Martin (France)',
    'mf',
    '590',
    2,
  ],
  [
    'Saint-Pierre-et-Miquelon',
    'pm',
    '508',
  ],
  [
    'Saint-Vincent-Grenadines',
    'vc',
    '1784',
  ],
  [
    'Salvador',
    'sv',
    '503',
  ],
  [
    'Samoa',
    'ws',
    '685',
  ],
  [
    'Sao Tomé-et-Príncipe',
    'st',
    '239',
  ],
  [
    'Sénégal',
    'sn',
    '221',
  ],
  [
    'Serbie',
    'rs',
    '381',
  ],
  [
    'Seychelles',
    'sc',
    '248',
  ],
  [
    'Sierra Leone',
    'sl',
    '232',
  ],
  [
    'Singapour',
    'sg',
    '65',
  ],
  [
    'Slovaquie',
    'sk',
    '421',
  ],
  [
    'Slovénie',
    'si',
    '386',
  ],
  [
    'Somalie',
    'so',
    '252',
  ],
  [
    'Soudan',
    'sd',
    '249',
  ],
  [
    'Soudan du Sud',
    'ss',
    '211',
  ],
  [
    'Sri Lanka',
    'lk',
    '94',
  ],
  [
    'Suède',
    'se',
    '46',
  ],
  [
    'Suisse',
    'ch',
    '41',
  ],
  [
    'Suriname',
    'sr',
    '597',
  ],
  [
    'Swaziland',
    'sz',
    '268',
  ],
  [
    'Syrie',
    'sy',
    '963',
  ],
  [
    'Tadjikistan',
    'tj',
    '992',
  ],
  [
    'Taïwan',
    'tw',
    '886',
  ],
  [
    'Tanzanie',
    'tz',
    '255',
  ],
  [
    'Tchad',
    'td',
    '235',
  ],
  [
    'Thaïlande',
    'th',
    '66',
  ],
  [
    'Timor oriental',
    'tl',
    '670',
  ],
  [
    'Togo',
    'tg',
    '228',
  ],
  [
    'Tokelau',
    'tk',
    '690',
  ],
  [
    'Tonga',
    'to',
    '676',
  ],
  [
    'Trinité-et-Tobago',
    'tt',
    '1868',
  ],
  [
    'Tunisie',
    'tn',
    '216',
  ],
  [
    'Turkmenistan',
    'tm',
    '993',
  ],
  [
    'Turquie',
    'tr',
    '90',
  ],
  [
    'Tuvalu',
    'tv',
    '688',
  ],
  [
    'Ukraine',
    'ua',
    '380',
  ],
  [
    'Uruguay',
    'uy',
    '598',
  ],
  [
    'Vanuatu',
    'vu',
    '678',
  ],
  [
    'Vatican',
    'va',
    '39',
    1,
  ],
  [
    'Venezuela',
    've',
    '58',
  ],
  [
    'Vietnam',
    'vn',
    '84',
  ],
  [
    'Wallis-et-Futuna',
    'wf',
    '681',
  ],
  [
    'Yémen',
    'ye',
    '967',
  ],
  [
    'Zambie',
    'zm',
    '260',
  ],
  [
    'Zimbabwe',
    'zw',
    '263',
  ]
];

let countries;

function _formatCountriesData(countriesData) {
  return countriesData.map((country) => ({
    name: country[0],
    iso2: country[1],
    dialCode: country[2],
    priority: country[3] || 0,
    areaCodes: country[4] || null,
  }));
}

function initialize(externalCountriesList) {
  countries = _formatCountriesData(externalCountriesList || defaultCountriesData);
}

function getCountries() {
  if (!countries) {
    initialize();
  }

  return countries;
}

const AllCountries = {
  initialize,
  getCountries,
};

export default AllCountries;
