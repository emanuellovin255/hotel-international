// Descarcă pozele originale ale hotelului (site-ul vechi + Booking.com) în src/assets/photos/_raw
// Rulare: npm run fetch-images
// Site-ul vechi refuză cererile fără User-Agent de browser, de aceea headerul de mai jos.
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const OUT = 'src/assets/photos/_raw';
const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36';

const WP = 'https://hotel-international.ro/wp-content/uploads/';

/** Pozele de pe hotel-international.ro, cu numele sub care le salvăm. */
const SITE = [
  ...Array.from({ length: 15 }, (_, i) => [`galerie-${String(i + 1).padStart(2, '0')}.jpg`, `2021/02/Hotel-International-${i + 1}-1.jpg`]),
  ['hero-fatada.jpeg', '2024/07/International2024-scaled.jpeg'],
  ['exterior-hotel.jpg', '2014/08/hotel-exterior-scaled.jpg'],
  ['exterior-slide.jpg', '2015/05/slide1.jpg'],
  ['restaurant-sala.jpg', '2014/08/Restaurant-1-1.jpg'],
  ['restaurant-detaliu.jpg', '2014/08/6Foto_027717-1.jpg'],
  ['conferinte-sala.jpg', '2014/08/sala_de_conferinte_hotel_international_baile_herculane.jpg'],
  ['piscina-termala.jpg', '2014/08/Piscina-Interioara-Cu-Apa-Termosulfuroasa-1.jpg'],
  ['spa-jacuzzi.jpg', '2014/08/Jacuzzi_Hotel_International_Baile_Herculane_Spa.jpg'],
  ['spa-dus-subacval.jpg', '2014/08/baile_herculane_centru_spa_hotel_international_dus_subacval-1.jpg'],
  ['spa-masaj.jpg', '2014/08/baile_herculane_tratament_centru_spa_baile_herculane_masaj_relaxare_hotel_international.jpg'],
  ['tratament-electroterapie.jpg', '2014/08/tratament_baile_herculane_electroterapie.jpg'],
  ['tratament-ultrasunete.jpg', '2014/08/tratament_baile_herculane_ultrasunete.jpg'],
  ['tratament-biorezonanta.jpg', '2014/08/biorezonanta_electromagnetica_analize_tratament_baile_herculane_hotel_international.jpg'],
  ['sigla.png', '2024/07/cropped-sigla-noua-site-1.png'],
];

/** Pozele proprietății de pe Booking.com: [id, cheie]. */
const BOOKING = [
  ['366199024', '2e7ed49d8f07f08cb35b9c0123e6785ede8081634820aec648b91cee26b2996b'],
  ['366199062', 'c1d7da65431814cb22694d316b359c52bd36e4c57d0efdeff5b39e0b1851deb4'],
  ['366199071', 'd2ed9e6823b722acb3b69842a47b5c7448b7447d525ffe2354cd77e81fbea822'],
  ['366199089', 'adfda16ae5a05a9f6ee3495f3274d0bc23a0005f9cd882c087de1ab82a24fbfd'],
  ['366199099', 'a9bf30350c04b7b2c2f49f76cda5dfedfc9c3d41928194b4238744c2a809f837'],
  ['366208320', 'bd7ed4bac1133f5cd1836766c383e85f435840122cee0efe6eed8c85fd73c15b'],
  ['569040676', 'd29f18449c2ac68f915816542936e644a6836aea7dc007450a8d19849040fb39'],
  ['569040696', 'c40495ebec039b7c16788677d0d5e8619f821a0b422da2acd971cdd9060986e4'],
  ['569040702', '1bc2ac1d96e027696e4a65084ab957ec06c3a8116c63adf42bc2c1e5bf10a247'],
];

async function grab(name, url) {
  const res = await fetch(url, { headers: { 'User-Agent': UA, Referer: 'https://hotel-international.ro/' } });
  if (!res.ok) {
    console.warn(`  ✗ ${name} — HTTP ${res.status}`);
    return false;
  }
  await writeFile(join(OUT, name), Buffer.from(await res.arrayBuffer()));
  console.log(`  ✓ ${name}`);
  return true;
}

await mkdir(OUT, { recursive: true });

console.log('hotel-international.ro');
for (const [name, path] of SITE) await grab(name, WP + path);

console.log('Booking.com');
for (const [id, k] of BOOKING) {
  await grab(`booking-${id}.jpg`, `https://cf.bstatic.com/xdata/images/hotel/max1280x900/${id}.jpg?k=${k}`);
}

console.log(`\nGata. Pozele sunt în ${OUT}/ — mutați-le în folderele pe categorii.`);
