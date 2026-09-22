# Hotel Internațional *** – Băile Herculane

Machetă de site pentru Hotel Internațional din Băile Herculane. Nu este site-ul de producție:
e varianta propusă, pusă online ca să poată fi văzută și discutată.

**Live:** https://hotel-international.vercel.app/
**Oglindă pe GitHub Pages:** https://emanuellovin255.github.io/hotel-international/

## Ideea machetei

Site-ul actual ține tarifele scrise de mână în pagina `/tarife`. Aici nu apare **niciun preț**.
Site-ul păstrează doar:

- descrierile și pozele camerelor,
- informațiile despre tratament, SPA, restaurant și facilități,
- informațiile pentru turiști (stațiunea, distanțele, traseele, politicile, întrebările frecvente).

Disponibilitatea și tarifele stau într-un singur loc: **programul de rezervări al hotelului**
(5stardesk), a cărui pagină se numește chiar „Verifica disponibilitatea si tarifele”. Fiecare buton
de rezervare din site duce acolo.

```
Vizitator  ──►  site (descrieri + poze)  ──►  „Verifică disponibilitatea și tarifele”
                                                        │
                                                        ▼
                                          5stardesk.com/b/hotel-international
                                        (camere libere · regimuri de masă · preț)
```

Bara din partea de sus a paginii principale trimite mai departe și perioada aleasă, prin parametrul
`perioada`, așa că motorul se deschide direct la pasul de disponibilitate.

## Unde se schimbă linkul panoului

Într-un singur loc, în [`src/data/site.ts`](src/data/site.ts):

```ts
export const bookingEngine = 'https://www.5stardesk.com/b/hotel-international';
```

Toate butoanele („Verifică disponibilitatea și tarifele”, bara de căutare, cardurile de cameră, bara
de pe mobil, footerul) citesc de acolo, prin componenta [`BookingCTA.astro`](src/components/BookingCTA.astro).

## Tehnologii

- [Astro](https://astro.build) – site static, cu imagini optimizate automat (WebP, srcset)
- Tailwind CSS v4
- GSAP + ScrollTrigger + SplitText (animații la scroll), Lenis (smooth scroll)
- PhotoSwipe (galerie foto cu lightbox)
- Fonturi self-hosted: Bodoni Moda și Instrument Sans

Fără backend și fără bază de date: formularul de contact este un simplu `mailto:`.

## Comenzi

```bash
npm install          # instalează dependențele
npm run dev          # server local pe http://localhost:4321/hotel-international
npm run build        # generează site-ul în dist/
npm run preview      # previzualizează build-ul
npm run deploy       # construiește și publică pe GitHub Pages (ramura gh-pages)
npm run fetch-images # re-descarcă pozele originale în src/assets/photos/_raw
```

## Structură

```
src/
  data/          # tot conținutul: contact, camere, facilități, tratament, recenzii, împrejurimi
  assets/photos/ # pozele, pe categorii (camere/<tip>, exterior, piscina, spa, tratament…)
  components/    # componente reutilizabile (Header, Footer, RoomCard, BookingCTA, Gallery…)
  layouts/       # layout-ul de bază (SEO, meta, JSON-LD)
  pages/         # paginile site-ului
  scripts/       # animații și logica câmpurilor de dată
  styles/        # design system (culori, tipografie, componente CSS)
```

### Actualizarea conținutului

| Ce | Unde |
| --- | --- |
| Linkul programului de rezervări | `src/data/site.ts` → `bookingEngine` |
| Telefon, email, adresă, check-in/out, politici, întrebări frecvente | `src/data/site.ts` |
| Camerele: nume, descriere, dotări, poze | `src/data/rooms.ts` |
| Facilități și dotările camerelor, sala de conferințe | `src/data/facilities.ts` |
| Tratament, SPA, compoziția apei, indicații de cură | `src/data/treatments.ts` |
| Recenzii și scoruri | `src/data/reviews.ts` |
| Distanțe, trasee, despre stațiune | `src/data/nearby.ts` |

**Poze:** puneți fișierele `.jpg` în folderul potrivit din `src/assets/photos/`. Ordinea e dată de
numele fișierului (`01.jpg`, `02.jpg`…), iar prima poză din folderul unei camere devine coperta ei.

> Nu adăugați prețuri în aceste fișiere. Dacă un tarif ajunge în site, trebuie ținut la zi în două
> locuri deodată — exact problema pe care macheta o rezolvă.

## Deploy

Site-ul stă în două locuri:

- **Vercel** – se publică singur la fiecare `git push` pe `main`.
- **GitHub Pages** – manual, cu `npm run deploy` (construiește și împinge `dist/` pe ramura `gh-pages`).

Cele două au nevoie de căi diferite: pe Vercel site-ul stă în rădăcina domeniului, pe GitHub Pages
în `/hotel-international`. `astro.config.mjs` alege singur, după variabila `VERCEL` pe care o pune
Vercel la build:

```js
const onVercel = !!process.env.VERCEL;
base: onVercel ? '/' : '/hotel-international',
```

Dacă build-ul se face cu base-ul greșit, paginile se încarcă goale: HTML fără CSS, fără JS și fără
poze, pentru că toate se cer de la un prefix care nu există.

Pentru un domeniu propriu (`hotel-international.ro`), în `astro.config.mjs` se pune
`site: 'https://hotel-international.ro'` și `base: '/'`.

## Surse de conținut

Texte și fotografii preluate de pe site-ul actual al hotelului (hotel-international.ro) și de pe
pagina proprietății de pe Booking.com. Scorurile și citatele oaspeților sunt cele de pe Booking.com.
