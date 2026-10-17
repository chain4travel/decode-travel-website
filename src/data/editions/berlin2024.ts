import type { Edition } from '../types';

import cardImage from '../../images/decode-berlin-2024/240426120607_munirwerner_03014.jpg';
import heroImage from '../../images/decode-berlin-2024/240426120607_munirwerner_03014.jpg';
import g1 from '../../images/decode-berlin-2024/240423185359_munirwerner_02410.jpg';
import g2 from '../../images/decode-berlin-2024/240425173326_munirwerner_02584.jpg';
import g3 from '../../images/decode-berlin-2024/240426115157_munirwerner_01815.jpg';
import g4 from '../../images/decode-berlin-2024/240426120607_munirwerner_03014.jpg';
import g5 from '../../images/decode-berlin-2024/240426120623_munirwerner_03017.jpg';
import g6 from '../../images/decode-berlin-2024/240426131552_munirwerner_03142.jpg';
import fvwImage from '../../images/berlinlinksarticle.jpeg';
import caminoImage from '../../images/berlinlinkscamino.webp';

import Chain4Travel from '../../images/logo-chain4travel.png';
import CompanionD from '../../images/logo-companion.png';
import YourInsight from '../../images/logo-yourinsight.png';
import Hexens from '../../images/logo-hexens.png';
import Vir from '../../images/logo-vir.png';
import CaminoScan from '../../images/logo-camino-scan.png';
import Sleap from '../../images/logo-sleap.png';
import A3M from '../../images/logo-a3m.png';
import ITKompass from '../../images/logo-it-kompass.png';
import Triend from '../../images/logo-triend.png';
import Utravel from '../../images/logo-utravel.png';
import Iso from '../../images/logo-iso.png';
import Alpitour from '../../images/logo-alpitour.png';
import Bytepitch from '../../images/logo-bytepitch.png';
import CNF from '../../images/logo-caminonetworkfoundation.png';
import Holidaycheck from '../../images/logo-holidaycheck.png';
import Polygonid from '../../images/logo-polygonid.png';
import Avra from '../../images/logo-avra.png';
import Universal from '../../images/logo-universal.png';
import Dfns from '../../images/logo-dfns.png';
import Gpsolutions from '../../images/logo-gpsolutions.png';
import Cortex from '../../images/logo-cortex.png';

const org = 'https://github.com/DecodeTravel';
const yt = (id: string) => ({ label: 'Pitch video', url: `https://www.youtube.com/watch?v=${id}` });

const BYTEME = 'A treasure hunt on Mallorca’s beaches: walkers find NFC-tagged objects, collect them with a chat bot, earn a unique pixel-art reward and are invited to support the restoration of the island’s undersea ecosystem.';
export const berlin2024: Edition = {
  slug: 'berlin2024',
  number: 1,
  name: 'Berlin 2024',
  city: 'Berlin',
  country: 'Germany',
  flag: '🇩🇪',
  dates: 'April 23-26, 2024',
  year: 2024,
  venue: 'w3.hub Berlin',
  heroTitle: 'The hackathon for travel tech innovation',
  headline: 'That’s a wrap! Thank you to everyone who joined us at w3.hub Berlin. Here’s how it went.',
  intro: [
    {
      text: 'The first Decode Travel brought more than 50 international tech, travel and Web3 experts to w3.hub Berlin, hosted by Chain4Travel. From product managers to backend and blockchain developers, eight teams tackled four challenges posed by well-known travel and Web3 companies, and built their solutions on Camino Network, the travel-focused blockchain infrastructure.',
    },
  ],
  cardPlace: 'w3.hub Berlin, 🇩🇪 Germany',
  cardImage,
  heroImage,
  cardStats: ['50+ experts', '8 teams', '4 challenges'],
  stats: [
    { value: '50+', label: 'tech, travel and Web3 experts' },
    { value: '10+', label: 'countries' },
    { value: '8', label: 'teams' },
    { value: '4', label: 'challenges' },
    { value: '5,000', label: 'lines of code written' },
    { value: '~1,000', label: 'pretzels devoured' },
  ],
  agendaTitle: 'Decode Travel in 4 days',
  agenda: [
    {
      day: 'Day 01', date: 'April 23', title: 'Kick-off',
      items: [
        { time: '14:00', text: 'Kick-off at w3.hub challenge presentations, team get-together' },
        { time: '19:00', text: 'Pizza Night sponsored by CaminoScan' },
      ],
    },
    {
      day: 'Day 02', date: 'April 24', title: 'Hacking',
      items: [{ time: '09:00', text: 'Breakfast' }, { time: '09:00', text: 'Hackathon' }],
    },
    {
      day: 'Day 03', date: 'April 25', title: 'Hacking',
      items: [
        { time: '09:00', text: 'Breakfast' },
        { time: '09:00', text: 'Hackathon' },
        { time: '19:00', text: 'Pitch Deadline' },
        { time: '20:00', text: 'Ramen Night sponsored by GP Solutions' },
      ],
    },
    {
      day: 'Day 04', date: 'April 26', title: 'Pitches',
      items: [
        { time: '09:00', text: 'Breakfast' },
        { time: '10:00', text: 'Pitch kick-off' },
        { time: '14:00', text: 'Award ceremony' },
      ],
    },
  ],
  challengesTitle: 'Tackle real pain points from travel companies.',
  challengesIntro: {
    text: 'All the challenges presented at Decode Travel were crafted to address real business bottlenecks faced by participating companies directly. Hence, the hackathon was highly productive and resulted in the development of applicable solutions relevant to the needs of the companies and the industry.',
  },
  challenges: [
    {
      sponsor: 'Alpitour World Group',
      logo: Alpitour,
      theme: 'Payment',
      title: 'Cryptocurrency payments for local partners',
      summary: [
        'Digital payments are hard where banks are missing and local currencies are unstable. Teams were asked to let travelers pay local guides in cryptocurrency through the UTravel app, with smart contracts releasing the payment only once the tour is completed, proven by GPS.',
      ],
      body: [
        'Alpitour World Group, a well-known innovator in the world of travel, has recently launched UTravel — a new brand aimed at Gen-Z travelers. Founded with a vision to reimagine the journey, the new brand provides access to a diverse range of activities and services through its app, tapping into local Destination Management Companies (DMCs) and community-based partners, many of whom lack digital presence. For travelers, UTravel offers unique and genuine experiences that positively impact local economies.',
      ],
    },
    {
      sponsor: 'Polygon ID',
      logo: Polygonid,
      theme: 'Digital identity',
      summary: [
        'Three challenges built on self-sovereign identity: personalization without giving away personal data, preferential rates proven with verifiable credentials, and one-click identity checks at every travel touchpoint.',
      ],
      body: [
        'Polygon ID provides an innovative set of tools for identity management in the travel industry through the concept of Self-Sovereign Identity (SSI). Using the SDK, developers can securely create, issue, and authenticate verifiable credentials using blockchain technology and zero-knowledge proofs. Now, travelers can prove personal attributes needed for various travel-related processes without compromising their privacy.',
        'Challenge 1: privacy and personalization in travel. Travelers often need to share personal data to receive customized services. Polygon ID enables travelers to manage and share their preferences selectively, without compromising privacy. With this technology travel service providers as hotels or airlines can create and scale personalized offers without accessing personal information broadly. The challenge includes implementing a KYC process, allowing hotels to verify identity and booking ownership without full data exposure, and deploying local verification systems for higher data security.',
        'Challenge 2: preferential rates for travelers. Travelers often miss out on preferential rates because service providers can\'t verify their eligibility without personal data. Polygon ID allows suppliers to verify a traveler\'s eligibility for special rates and offers based on nationality or residency through secure, verifiable credentials. This system supports privacy-preserving verification at any point, from booking to check-in. Thus, travelers can access special rates without unnecessary personal data disclosure.',
        'Challenge 3: Seamless identity verification across travel touchpoints. The multiple identity checks during travel are often inefficient and repetitive. Polygon ID offers an approach where travelers can verify their identity and booking details with a single click at each checkpoint, securely proving identity and details. It is fast and satisfying for a traveler.',
      ],
    },
    {
      sponsor: 'Universal Mallorca Travel',
      logo: Universal,
      theme: 'Climate compensation',
      title: 'Marine restoration sponsorship program',
      summary: [
        'Getting guests involved in protecting the Mediterranean sea: a solution that motivates them to sponsor the restoration of local ecosystems, with flexible amounts and areas, promoted at reception, in restaurants and through digital media.',
      ],
      body: [
        'Universal Mallorca Travel’s brand Universal Beach Hotels is the company managing a group of 17 hotels. As a family-owned Swiss company, they place a strong emphasis on Corporate Social Responsibility (CSR), actively participating in sustainability projects like the Plastic Free Traveller Movement and the Cleanwave Foundation\'s Medgardens project for seagrass restoration. They are keen to extend environmental practices with the help of digital technologies, engaging more travelers in the process of restoration of ecosystems in and around Mallorca.',
      ],
    },
    {
      sponsor: 'HolidayCheck',
      logo: Holidaycheck,
      theme: 'Verified reviews',
      title: 'Proof-of-stay when submitting reviews',
      summary: [
        'Review systems are easy to manipulate, and fake reviews deceive consumers. Using Camino Network and zero-knowledge proofs, teams were asked to prove that a reviewer had genuinely stayed at the hotel.',
      ],
    },
    {
      sponsor: 'Camino Network Foundation',
      logo: CNF,
      title: 'Optimizing the booking process with Camino Messenger',
      summary: [
        'Reshape travel distribution with wallet-to-wallet communication on Camino Messenger, replacing fragmented systems, multiple APIs and manual processes with a unified travel standard.',
      ],
    },
  ],
  jury: [
    { name: 'Konark Modi', role: 'VP of Technology at HolidayCheck' },
    { name: 'Sylvia Aran', role: 'Director of Technical Sales at Polygon ID' },
    { name: 'Ralf Usbeck', role: 'CEO of Chain4Travel' },
    { name: 'Manuel Posch', role: 'Director of Marketing & IT at Universal Mallorca Travel' },
    { name: 'Francesco Ciuccarelli', role: 'CIO & CTO of the Alpitour Group' },
    { name: 'Beat Blaser', role: 'Co-Founder and Managing Partner of Falkensteiner Ventures' },
    { name: 'Tom Dillon', role: 'CEO of A3M Global Monitoring' },
  ],
  awards: [
    {
      award: 'HolidayCheck challenge',
      team: 'CEEBF',
      description: { text: 'A mobile app that uses zero-knowledge proofs to confirm a real hotel stay when a review is submitted, while protecting the reviewer’s privacy. Check-in becomes the proof of stay: a QR code opens the HolidayCheck app linked to the traveler’s wallet, so reviews can be matched to actual stays wherever the hotel was booked.' },
      repos: [{ label: 'berlin-2024-team-ceebf', url: `${org}/berlin-2024-team-ceebf` }],
      video: yt('peQIW787dYg'),
    },
    {
      award: 'Alpitour World challenge',
      team: '0xDone',
      description: { text: 'Crypto payments for the Utravel marketplace: scanning a QR code opens a chat in a messenger like Telegram, linked to the traveler’s wallet, and a smart contract pays the guide directly from the traveler’s wallet.' },
      repos: [{ label: 'berlin-2024-team-0xDone', url: `${org}/berlin-2024-team-0xDone` }],
      video: yt('7xoCOnWgQjM'),
    },
    {
      award: 'Universal challenge',
      team: 'Has Left the Building',
      description: { text: 'Marine restoration turned into a game: guests hunt for hidden QR codes or NFC tags in the group’s hotels, donate to marine restoration through the app and earn NFTs that reward their loyalty.' },
      repos: [{ label: 'berlin-2024-team-has-left-the-building', url: `${org}/berlin-2024-team-has-left-the-building` }],
      video: yt('9TNqgC4bKP4'),
    },
    {
      award: 'Polygon ID challenge',
      team: 'Leaving Early',
      description: { text: 'No more queueing at hotel check-in: travelers scan a QR code at reception and, thanks to Web3 and self-sovereign identity, the hotel only sees the data it needs from their wallet. The same flow can carry personalized information and rates.' },
      repos: [{ label: 'berlin-2024-team-leaving-early', url: `${org}/berlin-2024-team-leaving-early` }],
      video: yt('KFepHRS6vOc'),
    },
    {
      award: 'Camino Messenger bonus challenge',
      team: 'Byte Me Blockheads',
      description: { text: BYTEME },
      repos: [{ label: 'berlin-2024-team-byte-me-blockheads', url: `${org}/berlin-2024-team-byte-me-blockheads` }],
      video: yt('3CWZ2hjZXuU'),
    },
  ],
  teamsTitle: 'Teams and pitch videos',
  teams: [
    { team: 'Leaving Early', description: { text: 'Book a room through the Camino Messenger bot and receive a Polygon ID credential that proves the booking at the hotel.' }, challenge: 'Polygon ID', video: yt('KFepHRS6vOc'), repos: [{ label: 'berlin-2024-team-leaving-early', url: `${org}/berlin-2024-team-leaving-early` }] },
    { team: 'DASH', description: { text: 'PIP, the Polygon ID Passport: a smoother car rental with digital keys guests can share, plus loyalty points, all tied to a verified digital identity.' }, challenge: 'Polygon ID', video: yt('dTdjPTaAato'), repos: [{ label: 'berlin-2024-team-dash', url: `${org}/berlin-2024-team-dash` }] },
    { team: 'CEEBF', challenge: 'HolidayCheck', video: yt('peQIW787dYg'), repos: [{ label: 'berlin-2024-team-ceebf', url: `${org}/berlin-2024-team-ceebf` }] },
    { team: 'Maverick Minds', challenge: 'HolidayCheck', video: yt('NyBA295KD-Y') },
    { team: 'Block Shackle', description: { text: 'Paying local guides in digital currency: a smart contract set up by the tour operator holds the tour, its checkpoints, the travelers and the guide, and takes care of the payment.' }, challenge: 'Alpitour', video: yt('7WCw9_M3zys'), repos: [{ label: 'berlin-2024-team-black-shackle', url: `${org}/berlin-2024-team-black-shackle` }] },
    { team: '0xDone', description: { text: 'Crypto payments as easy as a chat message: a Telegram bot that lets two parties send and receive payments on Camino Network.' }, challenge: 'Alpitour', video: yt('7xoCOnWgQjM'), repos: [{ label: 'berlin-2024-team-0xDone', url: `${org}/berlin-2024-team-0xDone` }] },
    { team: 'Has Left the Building', challenge: 'Universal', video: yt('9TNqgC4bKP4'), repos: [{ label: 'berlin-2024-team-has-left-the-building', url: `${org}/berlin-2024-team-has-left-the-building` }] },
    { team: 'Byte Me Blockheads', challenge: 'Universal', description: { text: BYTEME }, video: yt('3CWZ2hjZXuU'), repos: [{ label: 'berlin-2024-team-byte-me-blockheads', url: `${org}/berlin-2024-team-byte-me-blockheads` }] },
  ],
  quotes: [
    {
      text: 'The creativity and dedication displayed by all participants have been truly inspiring. This hackathon’s output demonstrates impressively how fast innovation based on Web3 can have an immense impact on the bright future of travel tech and the travel industry. Web3 enables new service approaches and impressive savings for participating companies, especially first movers.',
      author: 'Pablo Castillo',
      role: 'CTO of Chain4Travel',
    },
    {
      text: 'It was great to see how every project made such a big step forward code-wise. This time, teams all brought different tech stacks, which was nice to see through various interesting approaches and technologies used. I\'ve learned a lot from hackers just by looking through their projects. Guys supporting the hackers did a great job; most teams, in the end, had working projects that integrated a wide range of technologies. Even though I couldn\'t be present there, from my perspective, the organization levelled up as well. Looking forward to events in the future and hope I can be present at the next ones.',
      author: 'Daniel',
      role: 'Bytepitch',
    },
  ],
  gallery: [
    { src: g1, alt: '2 teams of the hackathon in discussion of technical details of their challenges' },
    { src: g2, alt: 'Decode Travel Berlin 2024' },
    { src: g3, alt: 'Decode Travel Berlin 2024' },
    { src: g4, alt: 'Decode Travel Berlin 2024' },
    { src: g5, alt: 'Decode Travel Berlin 2024' },
    { src: g6, alt: 'Decode Travel Berlin 2024' },
  ],
  partners: [
    {
      group: 'Partners & Sponsors',
      items: [
        { name: 'Chain4Travel', logo: Chain4Travel, url: 'https://chain4travel.com/', logoClass: 'h-5 lg:h-8 w-auto' },
        { name: 'Companion D', logo: CompanionD, url: 'https://www.companiond.com/', logoClass: 'h-4 lg:h-6 w-auto' },
        { name: 'YourInsight', logo: YourInsight, url: 'https://yourinsight.digital/', logoClass: 'h-5 lg:h-10 w-auto' },
        { name: 'Hexens', logo: Hexens, url: 'https://hexens.io/', logoClass: 'h-5 lg:h-8 w-auto' },
        { name: 'VIR', logo: Vir, logoClass: 'h-5 lg:h-10 w-auto' },
        { name: 'CaminoScan', logo: CaminoScan, url: 'https://caminoscan.com/', logoClass: 'h-5 lg:h-8 w-auto' },
        { name: 'Sleap', logo: Sleap, url: 'https://sleap.io/', logoClass: 'h-5 lg:h-10 w-auto' },
        { name: 'A3M', logo: A3M, url: 'https://www.global-monitoring.com/', logoClass: 'h-5 lg:h-10 w-auto' },
        { name: 'IT-Kompass', logo: ITKompass, url: 'https://www.it-kompass.com/', logoClass: 'h-5 lg:h-10 w-auto' },
        { name: 'Triend', logo: Triend, logoClass: 'h-5 lg:h-10 w-auto' },
        { name: 'Utravel', logo: Utravel, url: 'https://utravel.it/', logoClass: 'h-5 lg:h-10 w-auto' },
        { name: 'ISO', logo: Iso, url: 'https://www.isotravel.com/', logoClass: 'h-5 lg:h-10 w-auto' },
        { name: 'Alpitour', logo: Alpitour, url: 'https://www.alpitour.it/', logoClass: 'h-5 lg:h-8 w-auto' },
        { name: 'Bytepitch', logo: Bytepitch, url: 'https://bytepitch.com/', logoClass: 'h-5 lg:h-10 w-auto' },
        { name: 'Camino Network Foundation', logo: CNF, url: 'https://foundation.camino.network/', logoClass: 'h-5 lg:h-10 w-auto' },
        { name: 'HolidayCheck', logo: Holidaycheck, url: 'https://www.holidaycheck.com/', logoClass: 'h-5 lg:h-10 w-auto' },
        { name: 'Polygon ID', logo: Polygonid, url: 'https://www.polygonid.com/', logoClass: 'h-5 lg:h-9 w-auto' },
        { name: 'Avra', logo: Avra, url: 'https://www.avratours.gr/', logoClass: 'h-5 lg:h-10 w-auto grayscale' },
        { name: 'Universal', logo: Universal, url: 'https://www.universalbeachhotels.com/', logoClass: 'h-5 lg:h-9 w-auto' },
        { name: 'Dfns', logo: Dfns, url: 'https://www.dfns.co/', logoClass: 'h-5 lg:h-10 w-auto' },
        { name: 'GP Solutions', logo: Gpsolutions, url: 'https://www.software.travel/', logoClass: 'h-5 lg:h-8 w-auto' },
        { name: 'Cortex', logo: Cortex, url: 'https://www.cortex-ag.com/en/', logoClass: 'h-5 lg:h-8 w-auto' },
      ],
    },
  ],
  links: [
    {
      kind: 'FVW Article',
      title: 'Innovationen beim "Decode Travel"-Hackathon',
      excerpt: 'Mehr als 50 Tech-, Reise- und Web3-Experten tüftelten beim "Decode Travel"-Hackathon des Blockchain-Start-ups Chain4Travel an insgesamt vier Challenges. Darum ging es bei den Aufgaben, die von Alpitour World, Holidaycheck, Universal Mallorca Travel und Polygon ID kamen.',
      url: 'https://www.fvw.de/touristik/technologie/camino-blockchain-innovationen-beim-decode-travel-hackathon-242766',
      image: fvwImage,
    },
    {
      kind: 'RECAP',
      title: 'Camino Network Article - Decode Travel Hackathon',
      excerpt: 'Decode Travel hackathon organized by Chain4Travel in April 2024 became the opening for a series of events to be held around the globe. The event was well-aligned with the mission of the Camino Network Foundation, which is to encourage a collaborative environment that helps traditional travel businesses smoothly join the web3 travel ecosystem.',
      url: 'https://camino.network/decode-travel-recap/',
      image: caminoImage,
    },
    { kind: 'Photos', title: 'More photos', url: 'https://photos.app.goo.gl/X6Cv6CsP8tudvPa5A' },
    { kind: 'GitHub', title: 'Decode Travel Github', url: org },
    { kind: 'GitHub', title: 'Berlin 2024 Resource Hub', url: `${org}/berlin-2024-resource-hub` },
  ],
};
