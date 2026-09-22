export const site = {
  name: 'Hotel Internațional',
  shortName: 'Hotel Internațional',
  stars: 3,
  tagline: 'Hotel de tratament și odihnă în Băile Herculane',
  description:
    'Hotel de 3 stele în Băile Herculane, cu bază proprie de tratament, bazin cu apă termo-sulfuroasă, centru SPA și restaurant. Camere și apartamente cu vedere la Munții Domogled.',
  phone: '0784 258 852',
  phoneHref: 'tel:+40784258852',
  phone2: '0784 258 853',
  phone2Href: 'tel:+40784258853',
  email: 'office@hotel-international.ro',
  address: {
    street: 'Aleea Florilor nr. 1A',
    city: 'Băile Herculane',
    county: 'Caraș-Severin',
    zip: '325200',
    country: 'România',
  },
  mapsQuery: 'Hotel International, Aleea Florilor 1A, Băile Herculane',
  languages: ['Română', 'Engleză'],
  checkIn: '15:00 – 18:00',
  checkOut: '09:00 – 11:30',
  opened: 2010,
  award: 'Cel mai Fashion Complex Turistic din Banat — Fashion România Awards',
  bookingComUrl: 'https://www.booking.com/hotel/ro/international-baile-herculane1.ro.html',
};

/**
 * Motorul de rezervare al hotelului (5stardesk) — singurul loc în care stau
 * disponibilitatea și tarifele. Site-ul nu afișează niciun preț: toate butoanele
 * de rezervare trimit aici, în câmpul „Verifica disponibilitatea si tarifele”.
 *
 * Dacă hotelul schimbă programul de administrare, se modifică doar linia de mai jos.
 */
export const bookingEngine = 'https://www.5stardesk.com/b/hotel-international';

/** Eticheta folosită peste tot pentru butonul care duce în motorul de rezervare. */
export const bookingLabel = 'Verifică disponibilitatea și tarifele';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** Formatul cerut de motor pentru o dată: `22 Sep 2026`. */
function engineDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

/**
 * Link către motorul de rezervare. Cu date (ISO, `2026-09-22`), motorul deschide
 * direct pasul de disponibilitate pentru perioada aleasă.
 */
export function bookingUrl(checkIn?: string, checkOut?: string): string {
  if (!checkIn || !checkOut) return bookingEngine;
  const params = new URLSearchParams({
    noframe: '0',
    perioada: `${engineDate(checkIn)} - ${engineDate(checkOut)}`,
  });
  return `${bookingEngine}?${params}`;
}

export const fullAddress = `${site.address.street}, ${site.address.city}, jud. ${site.address.county}, ${site.address.zip}`;

export const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&z=15&output=embed`;
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;

export const nav = [
  { href: '/camere', label: 'Camere' },
  { href: '/tratament', label: 'Tratament' },
  { href: '/spa-si-piscina', label: 'SPA & Piscină' },
  { href: '/restaurant', label: 'Restaurant' },
  { href: '/facilitati', label: 'Facilități' },
  { href: '/imprejurimi', label: 'Împrejurimi' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/informatii-utile', label: 'Informații' },
];

/** Regimurile de masă, descrise fără tarife — prețurile se văd în motorul de rezervare. */
export const meals = [
  { name: 'Mic dejun', text: 'Bufet cald și rece, servit în restaurantul hotelului. Inclus în majoritatea pachetelor.' },
  { name: 'Demipensiune', text: 'Mic dejun și încă o masă principală, în regim de fișă cont.' },
  { name: 'Pensiune completă', text: 'Trei mese pe zi, tot în regim de fișă cont, pentru sejururile de tratament.' },
];

export const mealNote =
  'Masa se decontează în regim de fișă cont: alegeți din meniu, iar consumul se adună pe nota camerei. Regimurile disponibile și costul lor apar la pasul de rezervare.';

export const policies = [
  {
    title: 'Check-in',
    text: 'Între 15:00 și 18:00. Dacă ajungeți mai târziu, anunțați-ne la telefon. La sosire se prezintă un act de identitate cu fotografie.',
  },
  { title: 'Check-out', text: 'Între 09:00 și 11:30.' },
  {
    title: 'Copii',
    text: 'Copiii de orice vârstă sunt bineveniți. De la 18 ani se aplică tariful de adult. Nu sunt disponibile pătuțuri.',
  },
  {
    title: 'Pat suplimentar',
    text: 'La cerere, în funcție de disponibilitate și de tipul de cameră. Se adaugă separat, la rezervare.',
  },
  { title: 'Animale de companie', text: 'Nu sunt acceptate.' },
  { title: 'Plata', text: 'Se acceptă card. Plățile în numerar nu sunt acceptate.' },
  { title: 'Fumat', text: 'Hotelul are camere pentru nefumători.' },
  { title: 'Lift', text: 'Toate etajele, inclusiv baza de tratament, sunt accesibile cu liftul.' },
];

export const faq = [
  {
    q: 'Unde văd tarifele și disponibilitatea?',
    a: `În programul de rezervări al hotelului, la „${bookingLabel}”. Acolo apar camerele libere pentru perioada aleasă, regimurile de masă și prețul final — actualizate în timp real de recepție.`,
  },
  {
    q: 'Cum rezerv o cameră?',
    a: `Alegeți perioada în bara din partea de sus a site-ului, apăsați „${bookingLabel}” și continuați direct în programul hotelului. Dacă preferați să vorbiți cu cineva, sunați la ${site.phone}.`,
  },
  {
    q: 'Există bază de tratament în hotel?',
    a: 'Da. Hotelul are bază proprie de tratament, cu electroterapie, magnetodiaflux, laser terapeutic, aerosoli, hidrokinetoterapie și kinetoterapie, sub supravegherea unui personal specializat. Liftul ajunge până la ea.',
  },
  {
    q: 'Bazinul cu apă termală este inclus?',
    a: 'Accesul la bazinul cu apă termo-sulfuroasă, la saună (cu program) și la sala de fitness este gratuit pentru oaspeții hotelului.',
  },
  {
    q: 'Ce proceduri se fac la centrul SPA?',
    a: 'Împachetări cu struguri, ceai verde, ciocolată sau ghimbir, masaj de relaxare, reflexoterapie, masaj Shiatsu, detoxifiere, jacuzzi și duș subacval.',
  },
  {
    q: 'Se servește mic dejun?',
    a: 'Da, în restaurantul hotelului. Regimul de masă (mic dejun, demipensiune sau pensiune completă) se alege la rezervare.',
  },
  {
    q: 'Există parcare?',
    a: 'Da, parcare privată gratuită la hotel, fără rezervare prealabilă.',
  },
  {
    q: 'Sunt acceptate animalele de companie?',
    a: 'Nu, animalele de companie nu sunt acceptate.',
  },
  {
    q: 'Care este programul de check-in și check-out?',
    a: `Check-in între ${site.checkIn}, check-out între ${site.checkOut}.`,
  },
  {
    q: 'Ce limbi se vorbesc la recepție?',
    a: 'Română și engleză.',
  },
];
