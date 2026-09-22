/** Apa geotermală a hotelului — compoziția, așa cum e declarată de bază. */
export const water = {
  type: 'termosulfuroasă, sulfhidrică, cloro-bicarbonato-sodico-calcică, hipotonă',
  mineralisation: 'mineralizație totală de 7–8 g/l',
  note: 'conținut ridicat de hidrogen sulfurat',
};

export const pool = {
  area: 30,
  depth: 1.5,
  text: 'Bazinul acoperit al centrului SPA este alimentat cu apă termo-sulfuroasă de la sursă. Poate fi folosit atât de cei care urmează un program de tratament, cât și în scop de agrement.',
};

/** Procedurile bazei de tratament. */
export const procedures = [
  'Electroterapie',
  'Magnetodiaflux',
  'Laser terapeutic',
  'Aerosoli',
  'Hidrokinetoterapie',
  'Kinetoterapie',
  'Baie de sulf',
  'Gimnastică medicală',
  'Masaj',
  'Duș subacval',
];

/** Principalele indicații de cură. */
export const indications = [
  {
    title: 'Afecțiuni reumatismale inflamatorii',
    text: 'Poliartrită, spondilită reumatoidă stadiul I, II și III în afara puseului, spondilită anchilozantă în toate stadiile, artrite reactive.',
  },
  {
    title: 'Afecțiuni reumatismale degenerative',
    text: 'Artroze cu diferite localizări, coxartroze, gonartroze, spondiloze, artroze ale mâinii și piciorului.',
  },
  {
    title: 'Afecțiuni posttraumatice',
    text: 'Fracturi, luxații, entorse, șold sau genunchi protezat, redori posttraumatice.',
  },
  {
    title: 'Nervi periferici și rădăcini nervoase',
    text: 'Hernii de disc, discopatii, nevralgii, paralizii.',
  },
  {
    title: 'Aparat respirator',
    text: 'Sinuzite cronice, rinite cronice, faringite, traheo-bronșite cronice.',
  },
  {
    title: 'Tendoane, ligamente, mușchi',
    text: 'Tendinite, sinovite, fibromialgii.',
  },
  {
    title: 'Afecțiuni dermatologice',
    text: 'Psoriazis, dermatite seboreice.',
  },
  {
    title: 'Alte indicații',
    text: 'Diabet zaharat tip II compensat, tulburări de statică și afecțiuni datorate pozițiilor vicioase la copii și adolescenți.',
  },
];

/** Serviciile centrului SPA. */
export const spaServices = [
  { title: 'Împachetări', text: 'Cu struguri, ceai verde, ciocolată sau ghimbir.' },
  { title: 'Masaj de relaxare', text: 'Pentru serile de după drumeție sau după o zi de proceduri.' },
  { title: 'Reflexoterapie', text: 'Lucru pe zonele reflexogene ale piciorului.' },
  { title: 'Masaj Shiatsu', text: 'Presopunctură pe meridianele energetice.' },
  { title: 'Detoxifiere', text: 'Program de curățare, în completarea curei balneare.' },
  { title: 'Jacuzzi și duș subacval', text: 'Hidromasaj, în cadă și sub apă.' },
];

/** Analizele prin biorezonanță electromagnetică. */
export const bioresonance = [
  'Calitățile fizice de bază',
  'Conținutul de zahăr din sânge',
  'Afecțiuni ale oaselor și densitatea minerală osoasă',
  'Sistemul nervos',
  'Sistemul cardio-vascular și cerebro-vascular',
  'Funcția vezicii biliare',
  'Funcția gastrointestinală',
  'Afecțiuni genito-urinare',
  'Toxine umane',
  'Funcția rinichilor, a ficatului, a plămânilor și a pancreasului',
  'Afecțiuni reumatice',
  'Elemente și vitamine (Ca, Fe, Se, Zn…)',
  'Sistemul endocrin și sistemul imunitar',
  'Testul funcționării pielii',
];
