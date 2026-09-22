export interface Room {
  slug: string;
  name: string;
  /** Numele pe scurt, pentru carduri și liste. */
  short: string;
  guests: number;
  beds: string[];
  /** Varianta scurtă, pentru cardurile de cameră. */
  bedShort: string;
  highlight: string;
  intro: string;
  description: string;
  views: string[];
  features: string[];
  note?: string;
  /** Folderul de poze din src/assets/photos/camere/ */
  folder: string;
}

/**
 * Tipurile de unități, exact cum apar în programul de rezervări al hotelului.
 * Fără tarife: prețul și disponibilitatea se văd doar acolo.
 */
export const rooms: Room[] = [
  {
    slug: 'camera-dubla-cu-balcon',
    name: 'Cameră dublă cu balcon',
    short: 'Dublă cu balcon',
    guests: 2,
    beds: ['2 paturi de o persoană sau 1 pat matrimonial'],
    bedShort: 'Dublu sau twin',
    highlight: 'Balcon spre munte',
    intro: 'Camera cu care începe aproape orice sejur la Internațional.',
    description:
      'Cameră spațioasă, cu balcon propriu și vedere spre Munții Domogled și spre stațiune. Are baie proprie cu cabină de duș, birou, televizor cu ecran plat, aer condiționat și încălzire. Paturile pot fi aranjate separat sau apropiate, după cum vă e mai comod.',
    views: ['Munte', 'Stațiune', 'Grădină'],
    features: [
      'Balcon propriu',
      'Baie proprie cu cabină de duș',
      'Aer condiționat și încălzire',
      'TV cu ecran plat, canale prin cablu',
      'Birou',
      'Frigider',
      'Uscător de păr',
      'Halate de baie și papuci de interior',
      'Telefon și radio cu ceas deșteptător',
      'Internet gratuit',
      'Garderobă',
      'Izolare fonică',
    ],
    folder: 'camere/dubla-balcon',
  },
  {
    slug: 'apartament-cu-2-terase',
    name: 'Apartament cu 2 terase',
    short: 'Apartament cu 2 terase',
    guests: 4,
    beds: ['1 pat dublu mare', '1 canapea extensibilă'],
    bedShort: 'Dublu + canapea',
    highlight: 'Două terase',
    intro: 'Cel mai luminos spațiu al hotelului, cu terase pe două laturi.',
    description:
      'Apartament cu dormitor și living separate și două terase, una spre munte și una spre stațiune. Livingul are canapea extensibilă, fotoliu și masă, iar dimineața puteți alege terasa după cum bate soarele. Potrivit pentru o familie sau pentru un sejur mai lung de tratament.',
    views: ['Munte', 'Stațiune', 'Parc'],
    features: [
      'Două terase',
      'Dormitor și living separate',
      'Canapea extensibilă',
      'Baie proprie cu cabină de duș',
      'Aer condiționat și încălzire',
      'TV cu ecran plat, canale prin cablu',
      'Frigider',
      'Birou și zonă de living',
      'Halate de baie și papuci de interior',
      'Uscător de păr',
      'Internet gratuit',
      'Izolare fonică',
    ],
    folder: 'camere/apartament-2-terase',
  },
  {
    slug: 'apartament-fara-terasa',
    name: 'Apartament fără terasă',
    short: 'Apartament fără terasă',
    guests: 4,
    beds: ['1 pat dublu mare', '1 canapea extensibilă'],
    bedShort: 'Dublu + canapea',
    highlight: 'Două camere',
    intro: 'Același spațiu de apartament, la un pas de bazinul termal.',
    description:
      'Apartament cu dormitor și zonă de living separate, gândit pentru cei care stau mai mult timp în hotel decât pe terasă. Are ferestre mari spre vale, baie proprie, frigider și tot ce trebuie pentru un sejur de o săptămână de tratament.',
    views: ['Munte', 'Stațiune'],
    features: [
      'Dormitor și living separate',
      'Canapea extensibilă',
      'Baie proprie cu cabină de duș',
      'Aer condiționat și încălzire',
      'TV cu ecran plat, canale prin cablu',
      'Frigider',
      'Birou și zonă de living',
      'Halate de baie și papuci de interior',
      'Uscător de păr',
      'Internet gratuit',
      'Garderobă',
    ],
    folder: 'camere/apartament-fara-terasa',
  },
  {
    slug: 'camera-single',
    name: 'Cameră single',
    short: 'Single',
    guests: 1,
    beds: ['1 pat'],
    bedShort: '1 pat',
    highlight: 'Pentru o persoană',
    intro: 'Camera potrivită pentru cine vine singur la tratament.',
    description:
      'Cameră pentru o persoană, cu baie proprie cu cabină de duș, birou, televizor și tot confortul celorlalte camere. La cazarea a două sau mai multe persoane, camera se taxează ca dublă.',
    views: ['Munte', 'Stațiune'],
    features: [
      'Baie proprie cu cabină de duș',
      'Aer condiționat și încălzire',
      'TV cu ecran plat, canale prin cablu',
      'Birou',
      'Frigider',
      'Halate de baie și papuci de interior',
      'Uscător de păr',
      'Telefon și radio cu ceas deșteptător',
      'Internet gratuit',
    ],
    note: 'La cazarea a două sau mai multe persoane, camera se taxează la tarif de cameră dublă.',
    folder: 'camere/single',
  },
];

/** Închirierea întregii unități, disponibilă tot din programul de rezervări. */
export const wholeProperty = {
  name: 'Toată unitatea',
  text: 'Pentru grupuri, evenimente de familie sau serii de tratament, hotelul se poate rezerva integral. Perioadele libere și condițiile apar tot în programul de rezervări.',
};

export function roomBySlug(slug: string): Room | undefined {
  return rooms.find((r) => r.slug === slug);
}
