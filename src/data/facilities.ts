import {
  Waves,
  HeartPulse,
  Sparkles,
  Utensils,
  Wine,
  Presentation,
  Dumbbell,
  Flame,
  SquareParking,
  Wifi,
  ArrowUpDown,
  ShieldCheck,
  Mountain,
  CigaretteOff,
  Thermometer,
  ConciergeBell,
} from '@lucide/astro';

export const facilities = [
  { icon: Waves, title: 'Bazin termo-sulfuros', text: 'Bazin acoperit de 30 mp, alimentat cu apă geotermală de la sursă. Acces gratuit pentru oaspeți.' },
  { icon: HeartPulse, title: 'Bază de tratament proprie', text: 'Electroterapie, magnetodiaflux, laser, aerosoli, kinetoterapie — cu personal specializat.' },
  { icon: Sparkles, title: 'Centru SPA', text: 'Împachetări, masaje, reflexoterapie, jacuzzi și duș subacval.' },
  { icon: Flame, title: 'Saună', text: 'Saună uscată, cu program afișat la recepție. Inclusă în sejur.' },
  { icon: Dumbbell, title: 'Sală de fitness', text: 'Acces gratuit pentru oaspeții hotelului.' },
  { icon: Utensils, title: 'Restaurant', text: 'Bucătărie tradițională românească, 40 de locuri, cu aer condiționat.' },
  { icon: Wine, title: 'Bar de zi și terasă', text: 'Terasă în aer liber pentru serile calde de vară.' },
  { icon: Presentation, title: 'Sală de conferințe', text: '40 de locuri, videoproiector, ecran de proiecție, flipchart și internet.' },
  { icon: Mountain, title: 'Vedere la munte', text: 'Camerele dau spre Domogled, spre Valea Cernei și spre stațiune.' },
  { icon: SquareParking, title: 'Parcare privată gratuită', text: 'La hotel, fără rezervare prealabilă.' },
  { icon: ArrowUpDown, title: 'Lift', text: 'Toate etajele, inclusiv baza de tratament.' },
  { icon: Wifi, title: 'Internet gratuit', text: 'În toate camerele, în spațiile comune și în sala de conferințe.' },
  { icon: ShieldCheck, title: 'Seif la recepție', text: 'Plus detectoare de fum și sistem de prevenire a incendiilor în toate zonele publice.' },
  { icon: Thermometer, title: 'Încălzire centrală', text: 'În tot hotelul, pentru sejururile de extrasezon.' },
  { icon: CigaretteOff, title: 'Camere pentru nefumători', text: 'Aer curat, în toate camerele.' },
  { icon: ConciergeBell, title: 'Recepție', text: 'Se vorbește română și engleză.' },
];

/** Dotările camerelor, grupate ca pe fișa proprietății. */
export const roomAmenities = [
  { group: 'Baie', items: ['Baie privată', 'Cabină de duș', 'Articole de toaletă gratuite', 'Halat de baie și papuci', 'Prosoape', 'Uscător de păr'] },
  { group: 'Dormitor', items: ['Lenjerie de pat', 'Garderobă sau dulap', 'Priză lângă pat', 'Suport pentru haine'] },
  { group: 'Confort', items: ['Aer condiționat', 'Încălzire', 'Izolare fonică', 'Plasă de țânțari', 'Zonă de living', 'Birou'] },
  { group: 'Media', items: ['TV cu ecran plat', 'Canale prin cablu', 'Telefon', 'Radio cu ceas deșteptător', 'Internet gratuit'] },
  { group: 'Altele', items: ['Frigider', 'Vedere la munte', 'Terasă sau balcon (la anumite camere)'] },
];

export const conference = {
  name: 'Sala „Internațional”',
  seats: 40,
  equipment: ['Videoproiector', 'Ecran de proiecție', 'Flipchart', 'Acces la internet', 'Aer condiționat'],
  catering: ['Coffee break', 'Gustări calde', 'Gustări reci'],
  text: 'Fiecare detaliu al evenimentului poate fi controlat: aranjamentul sălii, luminozitatea, compartimentarea spațiului și echipamentul.',
};
