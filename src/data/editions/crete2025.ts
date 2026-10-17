import type { Edition } from '../types';

import cardImage from '../../images/crete-beach.jpg';
import jury from '../../images/editions/crete2025/jury.jpg';
import winners from '../../images/editions/crete2025/winning-team-hermes.jpg';
import kickoff from '../../images/editions/crete2025/kickoff.jpg';
import hacking from '../../images/editions/crete2025/hacking.jpg';
import pitches from '../../images/editions/crete2025/pitches.jpg';

import Chain4Travel from '../../images/logo-chain4travel.png';
import Avra from '../../images/logo-avra.png';
import Universal from '../../images/logo-universal.png';
import A3M from '../../images/logo-a3m.png';
import Cyberlogic from '../../images/logo-cyberlogic.png';
import Juice from '../../images/logo-juice.png';
import SHDigital from '../../images/logo-shdigital.png';

const org = 'https://github.com/DecodeTravel';
export const crete2025: Edition = {
  slug: 'crete2025',
  number: 3,
  name: 'Crete 2025',
  city: 'Crete',
  country: 'Greece',
  flag: '🇬🇷',
  dates: 'May 6-9, 2025',
  year: 2025,
  venue: 'Crete',
  heroTitle: 'The hackathon for travel tech innovation',
  headline: 'That’s a wrap! Thank you to everyone who joined us in Heraklion, Crete. Here’s how it went.',
  intro: [
    {
      text: 'After the events in Antalya, Chain4Travel teamed up with Avra Tours and Cyberlogic for another Web3 hackathon, this time in the heart of Heraklion. In a relaxed setting of Greek hospitality and sea views, three teams of developers and travel experts built three working prototypes in just two days. Camino committed to supporting the teams beyond the hackathon and to feeding some of their ideas into the development of its own platform.',
    },
  ],
  cardPlace: 'Crete, 🇬🇷 Greece',
  cardImage,
  heroImage: kickoff,
  cardStats: ['25+ builders', '3 teams', '3 prototypes'],
  stats: [
    { value: '25+', label: 'builders' },
    { value: '3', label: 'teams' },
    { value: '3', label: 'working prototypes in two days' },
  ],
  agendaTitle: 'Decode Travel Greece in 4 days',
  agenda: [
    {
      day: 'Day 01', date: 'May 6', title: 'Kick-off',
      items: [
        { time: '14:00', text: 'Kick-off in Crete, challenge presentations, team get-together' },
        { time: '19:00', text: 'Welcome Dinner' },
      ],
    },
    { day: 'Day 02', date: 'May 7', title: 'Hacking', items: [{ time: '09:00', text: 'Breakfast' }, { time: '09:00', text: 'Hackathon' }] },
    {
      day: 'Day 03', date: 'May 8', title: 'Hacking',
      items: [{ time: '09:00', text: 'Breakfast' }, { time: '09:00', text: 'Hackathon' }, { time: '19:00', text: 'Pitch Deadline' }],
    },
    {
      day: 'Day 04', date: 'May 9', title: 'Pitches',
      items: [{ time: '09:00', text: 'Breakfast' }, { time: '10:00', text: 'Pitch kick-off' }, { time: '14:00', text: 'Award ceremony' }],
    },
  ],
  challengesTitle: 'Tackle real pain points from travel companies.',
  challenges: [
    { sponsor: 'Avra', logo: Avra, theme: 'Travel Technology' },
    { sponsor: 'Universal', logo: Universal, theme: 'Travel Innovation' },
    {
      theme: 'Micropayments',
      summary: ['Small bookings involve many hands: tour operators, local agencies, transfer and activity providers all keep their own copy of the booking, and splitting a small payment between them often ends in disputes and manual reconciliation. The challenge was to build a smart contract on Camino Network that shares each payment between all parties automatically and transparently.'],
      takenBy: 'Block Busters',
    },
    {
      theme: 'Messenger',
      summary: ['Camino Messenger lets travel businesses talk to each other and trade directly, and this challenge asked teams to build something new on top of it.'],
      takenBy: 'Hermes',
    },
    {
      theme: 'Airline refunds',
      title: 'Bring your own challenge',
      summary: ['Refund requests between travel sellers and airlines pass through many channels and can easily be claimed twice.'],
      takenBy: 'CAMpensation',
    },
  ],
  challengesOther: [
    { title: 'Personalization', summary: 'Privacy-preserving identity for travellers with EUDI wallets and zero-knowledge proofs, for example for car rental.' },
    { title: 'Networking', summary: 'The Camino Partner Showroom as a B2B networking platform for travel companies.' },
    { title: 'Lottery', summary: 'Win YOUR DREAM Trip: a verifiable raffle with NFTs.' },
  ],
  jury: [
    { name: 'Nikos Mariolis', role: 'CPO (Chief Product Owner) Cyberlogic' },
    { name: 'Yannis Dimitriadis', role: 'CEO AVRA Travel' },
    { name: 'Michael Hasler', role: 'CEO Juice' },
    { name: 'Konstantinos Vassakis', role: 'Assistant Professor of the Hellenic Mediterranean University and Co-founder of Bizrupt' },
  ],
  juryNote: { text: 'The jury was joined by Michele Ruberl and Sam Jaarsma of the Chain4Travel team.' },
  awardsIntro: 'The prize: $CAM & honor.',
  awards: [
    {
      award: 'Innovation & Blockchain · Market Viability',
      team: 'Hermes',
      challenge: 'Messenger',
      description: { text: 'Event-based travel at the push of a button. Travelers sign up for event categories; destination management companies worldwide feed the events into a decentralized database, and travelers automatically get matching hotels and offers near the venue. The app used Camino Network’s blockchain entirely through Camino Messenger, without touching the blockchain directly.' },
      repos: [
        { label: 'crete-2025-team-hermes-events-service', url: `${org}/crete-2025-team-hermes-events-service` },
        { label: 'crete-2025-team-hermes-backend', url: `${org}/crete-2025-team-hermes-backend` },
      ],
    },
    {
      award: 'Technical Excellence',
      team: 'BlockBuster',
      challenge: 'Micropayments',
      description: { text: 'Smarter micropayments for travel bookings: a digital escrow that settles exactly what happens to payouts and commissions when a supplier or an intermediary cancels, avoiding the chain reactions of manual processes when several suppliers share one booking. The working demo ran on the Camino blockchain: travelers book with a digital wallet and receive an NFT as booking confirmation.' },
      repos: [{ label: 'crete-2025-team-block-busters', url: `${org}/crete-2025-team-block-busters` }],
    },
  ],
  teamsTitle: 'Teams',
  teams: [
    {
      team: 'CAMpensation',
      description: { text: 'Faster refunds for airlines: one shared channel between travel distribution and suppliers, where smart contracts keep a single, verifiable record of every refund claim and its status. This prevents duplicate claims, allows payouts in digital currencies and could bring in digital identities and legal intermediaries to identify travelers.' },
      repos: [{ label: 'crete-2025-team-campensation', url: `${org}/crete-2025-team-campensation` }],
    },
  ],
  quotes: [
    {
      text: 'This hackathon shows once again how practical solutions that decisively advance the digitalization of the travel industry can emerge in a very short time. The ideas and implementations from Greece have enormous potential to make existing processes simpler, more secure and more sustainable, and we look forward to developing some of these approaches further together with our partners.',
      author: 'Pablo Castillo',
      role: 'CEO of Chain4Travel and co-initiator of Camino Network',
      note: 'Translated from the German press release',
    },
  ],
  gallery: [
    { src: jury, alt: 'The jury with Michele Ruberl and Sam Jaarsma of Chain4Travel' },
    { src: winners, alt: 'Team Hermes, winner of two awards' },
    { src: kickoff, alt: 'Kick-off in Crete' },
    { src: hacking, alt: 'Day 3 of #DecodeTravel' },
    { src: pitches, alt: 'Sneak peek from the pitch floor' },
  ],
  partners: [
    {
      group: 'Organizers',
      items: [
        { name: 'Chain4Travel', logo: Chain4Travel, url: 'https://chain4travel.com/', logoClass: 'h-6 lg:h-8 w-auto' },
        { name: 'Avra Tours', logo: Avra },
        { name: 'Cyberlogic', logo: Cyberlogic, logoClass: 'h-7 lg:h-9 w-auto' },
      ],
    },
    {
      group: 'Sponsors',
      items: [
        { name: 'A3M Global Monitoring', logo: A3M },
        { name: 'SH Financials', logo: SHDigital, logoClass: 'h-6 lg:h-8 w-auto' },
        { name: 'Avra', logo: Avra },
        { name: 'Cyberlogic', logo: Cyberlogic, logoClass: 'h-7 lg:h-9 w-auto' },
        { name: 'Juice', logo: Juice, logoClass: 'h-5 lg:h-7 w-auto' },
      ],
    },
  ],
  links: [
    { kind: 'GitHub', title: 'Decode Travel Github', url: org },
    { kind: 'X', title: '@decodetravel', url: 'https://x.com/decodetravel' },
  ],
};
