import type { Edition } from '../types';

import cardImage from '../../images/antalya-image.jpg';
import allParticipants from '../../images/editions/antalya2024/all-participants.jpg';
import jury from '../../images/editions/antalya2024/jury.jpg';
import winners from '../../images/editions/antalya2024/winning-team-my-friend.jpg';
import teamMyFriend from '../../images/editions/antalya2024/team-my-friend.jpg';
import hacking from '../../images/editions/antalya2024/hacking.jpg';
import mentors from '../../images/editions/antalya2024/mentors.jpg';

import Chain4Travel from '../../images/logo-chain4travel.png';
import A3M from '../../images/logo-a3m.png';
import TripX from '../../images/logo-tripx.png';
import Paximum from '../../images/logo-paximum.png';
import SanTSG from '../../images/logo-santsg.png';
import SunExpress from '../../images/logo-sunexpress.png';
import Technoly from '../../images/logo-technoly.png';
import Juice from '../../images/logo-juice.png';
import TraSo from '../../images/logo-traso.png';

const org = 'https://github.com/DecodeTravel';

export const antalya2024: Edition = {
  slug: 'antalya2024',
  number: 2,
  name: 'Antalya 2024',
  city: 'Antalya',
  country: 'Turkiye',
  flag: '🇹🇷',
  dates: 'November 13-15, 2024',
  year: 2024,
  venue: 'Akdeniz University, Antalya',
  heroTitle: 'The hackathon for travel tech innovation',
  headline: 'That’s a wrap! Thank you to everyone who joined us at the SAN TSG & Paximum headquarters in Antalya. Here’s how it went.',
  intro: [
    {
      text: 'Decode Travel made its debut in Turkey at the headquarters of SAN TSG & Paximum, bringing together over 30 travel and tech specialists from Turkey, Germany, Macedonia, Italy, Spain and Georgia, from seasoned travel tech developers to blockchain enthusiasts and students. Industry players such as SAN TSG/Paximum, SunExpress, A3M Global Monitoring, Technoly/Petour (AERTiCKET Group), Juice, TripX and TraSo took part. In a two-day innovation sprint, seven teams worked on real pain points of the industry, from fragmented systems and inefficient payments to transparency, security and personalization in travel.',
    },
  ],
  cardPlace: 'Antalya, 🇹🇷 Turkiye',
  cardImage,
  heroImage: allParticipants,
  cardStats: ['30+ specialists', '7 teams', '10,000 CAM prize'],
  stats: [
    { value: '30+', label: 'travel and tech specialists' },
    { value: '6', label: 'countries' },
    { value: '7', label: 'teams' },
    { value: '2 days', label: 'innovation sprint' },
    { value: '10,000', label: 'CAM prize for the winning team' },
  ],
  challengesTitle: 'Challenges sponsored by our partners',
  challengesIntro: {
    text: 'SunExpress & Paximum (SAN TSG) also participated with teams addressing their core business challenges, streamlining distribution, and automating B2B payment processes.',
  },
  challenges: [
    { theme: 'Micropayments', summary: ['Streamline tourism payments with innovative blockchain solutions! Develop a smart contract system on Camino Network that transforms complex micropayments into an efficient, automated distribution process.'] },
    { theme: 'Personalization', summary: ['Solve the personalization-privacy paradox in travel! Create a DApp that leverages zero-knowledge proofs and AI to offer tailored experiences while safeguarding traveler data.'] },
    { theme: 'Messenger', summary: ['Reinvent the travel companion for the digital age! Build a decentralized platform that connects travelers with local expertise, breaks language barriers, and securely preserves experiences on the blockchain.'] },
    { theme: 'Partner Networking', summary: ['Revolutionize business networking in the travel industry! Design a platform on Camino Network that facilitates strategic partnerships, tracks collaborative value, and unlocks new potential in the Web3 travel ecosystem.'] },
    { theme: 'Dream Trip Campaign Challenge', summary: ['Travel companies struggle to integrate Web2 and Web3 to authentically engage users, verify travel history, and distribute rewards fairly, while ensuring privacy.'] },
  ],
  jury: [
    { name: 'Mustafa Türk', role: 'General Manager, Paximum' },
    { name: 'Erol Türk', role: 'CEO, SAN TSG' },
    { name: 'Alper Çetinkaya', role: 'Senior Technical Product Owner, SunExpress' },
    { name: 'Michael Hasler', role: 'CEO, Juice' },
    { name: 'Michele Ruberl', role: 'VP Product, Chain4Travel' },
  ],
  juryNote: {
    text: 'Teams pitched their solutions in 10-minute presentations. Solutions were scored on their technical viability, market potential, and presentation clarity. Extra points went to teams who extended existing functionality in creative ways.',
  },
  awards: [
    {
      award: '10,000 CAM (Camino token)',
      team: 'My Friend',
      company: 'TripX Travel, Macedonia',
      description: {
        text: 'Inspirational dynamic packaging powered by generative AI: a B2C chatbot learns the traveler’s preferences in conversation, sources travel services through Camino Messenger and turns them into a personalized booking, in real time and with secure data flows.',
      },
      repos: [
        { label: 'my-friend-aichat', url: `${org}/antalya-2024-team-my-friend-aichat` },
        { label: 'my-friend-combinator', url: `${org}/antalya-2024-team-my-friend-combinator` },
        { label: 'my-friend-distributor', url: `${org}/antalya-2024-team-my-friend-distributor` },
      ],
    },
  ],
  teamsTitle: 'Other teams',
  teams: [
    { team: 'CrypTourists', challenge: 'Micropayments', description: { text: 'An interface working with Camino Messenger to manage booking content, plus a smart contract that settles payments and resolves disputes automatically between provider, distributor and traveler.' }, repos: [
      { label: 'cryptourists', url: `${org}/antalya-2024-team-cryptourists` },
      { label: 'cryptourists-nextjs', url: `${org}/antalya-2024-team-cryptourists-nextjs` },
    ] },
    { team: 'Wild Geese', company: 'Petour/ Technoly', description: { text: 'A smart contract that resolves payment disputes and delays between service providers and tour operators, turning complex micropayments into an automated distribution.' }, repos: [{ label: 'antalya-2024-team-wild-geese', url: `${org}/antalya-2024-team-wild-geese` }] },
    { team: 'Camino Pilgrims', company: 'TraSo', description: { text: 'More profitable upselling after a booking: a protocol on Camino Network to share customer data securely between partners, shown with an OTA and a car rental company.' }, repos: [{ label: 'antalya-2024-team-the-camino-pilgrims', url: `${org}/antalya-2024-team-the-camino-pilgrims` }] },
    { team: 'The Rookies', description: { text: 'TIV, a platform built on self-sovereign identity: travelers own their digital identity and share only the details each booking needs, with smart contracts for services like car rental.' }, repos: [{ label: 'antalya-2024-team-the-rookies', url: `${org}/antalya-2024-team-the-rookies` }] },
    { team: 'SunExpress', description: { text: 'The airline explored Camino Messenger to improve its distribution network and its communication and transactions with business partners.' } },
    { team: 'Paximum', company: 'part of SAN TSG', description: { text: 'A smart contract system that automates commissions and payments to B2B partners directly inside the core booking systems.' }, repos: [{ label: 'antalya-2024-team-kings-of-travel-ui', url: `${org}/antalya-2024-team-kings-of-travel-ui` }] },
  ],
  quotes: [
    {
      text: 'We aim to support the digital transformation in the sector by combining technology and tourism. Hosting Turkey\'s first Web3 travel hackathon in partnership with Chain4Travel at our headquarters marks a significant milestone in shaping the future of travel technology.',
      author: 'Erol Türk', role: 'CEO of SAN TSG',
    },
    {
      text: 'We started this hackathon series for travel companies to explore blockchain’s transformative potential, gain hands-on experience, and bring sharp minds from many backgrounds and companies together. The solutions created during Decode in Turkey are proof that innovation on Camino Network can be realized in a matter of days.',
      author: 'Pablo Castillo', role: 'CEO of Chain4Travel',
    },
    {
      text: 'Our winning solution integrated AI with the Camino Messenger to create personalized and inspiring booking experiences. From the start, we recognized the potential of the solution to create something innovative and unique in the travel industry. We even purchased the domain during the event. Work is underway, and we\'re excited to launch the first version soon.',
      author: 'Aleksandar Bundovski', role: 'Head of Information Technology at TripX Travel',
    },
  ],
  gallery: [
    { src: allParticipants, alt: 'Participants of the hackathon in front of the headquarters of SAN TSG and Paximum in Antalya' },
    { src: jury, alt: 'The jury: Mustafa Türk, Erol Türk, Alper Çetinkaya, Michael Hasler, Michele Ruberl' },
    { src: winners, alt: 'The winning team: developer team sent by TripX Travel from Macedonia' },
    { src: teamMyFriend, alt: 'Team My Friend' },
    { src: hacking, alt: 'Decode Travel Antalya 2024' },
    { src: mentors, alt: 'Decode Travel Antalya 2024' },
  ],
  partners: [
    { group: 'Organizer', items: [{ name: 'Chain4Travel', logo: Chain4Travel, url: 'https://chain4travel.com/', logoClass: 'h-6 lg:h-8 w-auto' }] },
    { group: 'The Host', items: [{ name: 'Paximum', logo: Paximum, logoClass: 'h-8 lg:h-10 w-auto' }, { name: 'SAN TSG', logo: SanTSG, logoClass: 'h-7 lg:h-9 w-auto' }] },
    {
      group: 'Participating companies',
      items: [
        { name: 'SunExpress', logo: SunExpress, logoClass: 'h-6 lg:h-8 w-auto' },
        { name: 'A3M Global Monitoring', logo: A3M },
        { name: 'Technoly/Petour (AERTiCKET Group)', logo: Technoly, logoClass: 'h-6 lg:h-8 w-auto' },
        { name: 'Juice', logo: Juice, logoClass: 'h-5 lg:h-7 w-auto' },
        { name: 'TripX', logo: TripX, logoClass: 'h-7 lg:h-9 w-auto' },
        { name: 'TraSo', logo: TraSo, logoClass: 'h-8 lg:h-10 w-auto' },
      ],
    },
  ],
  links: [
    { kind: 'Recap', title: 'Decode Travel Antalya: Web3 Meets Travel Tech', excerpt: 'Recap of the second travel tech hackathon for leading travel companies and web3 enthusiasts.', url: 'https://camino.network/decode-travel-antalya-web3-meets-travel-tech/' },
    { kind: 'Travolution', title: 'Inaugural Chain4Travel Decode Travel Hackathon finds winning solution', url: 'https://www.travolution.com/news/technology/inaugural-chain4travel-decode-travel-hackathon-finds-winning-solution/' },
    { kind: 'HackerNoon', title: 'Chain4Travel Hosts Hackathon as Travel Industry Leaders Explore Blockchain Solutions in Turkey', url: 'https://hackernoon.com/chain4travel-hosts-hackathon-as-travel-industry-leaders-explore-blockchain-solutions-in-turkey' },
    { kind: 'GitHub', title: 'Antalya 2024 Resource Hub', url: 'https://github.com/DecodeTravel/antalya-2024-resource-hub' },
  ],
};
