import type { ImageMetadata } from 'astro';
import type { Edition, Challenge } from '../types';

import cardImage from '../../images/barcelona-bg.jpg';
import welcome from '../../images/editions/barcelona2025/welcome-decoders.jpg';
import group1 from '../../images/editions/barcelona2025/group-1.jpg';
import wb1 from '../../images/editions/barcelona2025/whiteboard-1.jpg';
import jury from '../../images/editions/barcelona2025/jury.jpg';
import winners from '../../images/editions/barcelona2025/winning-team-cabin-crew.jpg';
import hacking from '../../images/editions/barcelona2025/hacking.jpg';

import Chain4Travel from '../../images/chain4travel-logo.svg';
import Vueling from '../../images/vueling-logo.png';
import Clorian from '../../images/clorian-ticketing-logo.png';
import TechTourismCluster from '../../images/tech-tourism-cluster-logo.png';
import Hospitalidad from '../../images/hospitalidademprendedora-logo.png';
import Accio from '../../images/accio-logo.png';
import TeamLabs from '../../images/teamlabs-logo.png';
import FutureTravel from '../../images/future-travel-logo.png';
import BarcelonaTravelHub from '../../images/barcelonatravelhub-logo.png';
import Nubem from '../../images/nubemsystems-logo.svg';
import Christie from '../../images/logo-christie.png';
import Hacken from '../../images/logo-hacken.png';
import Agentic from '../../images/logo-agentic.png';
import published from './barcelona2025-challenges.json';

const org = 'https://github.com/DecodeTravel';
const logos: Record<string, ImageMetadata> = { Vueling, Clorian };
const key = (s: string) => s.toLowerCase().replace(/[^a-z]/g, '').slice(0, 60);
function dedupe(summary: string[], body: (string | string[])[]) {
  const seen = new Set(summary.map(key));
  return body.filter((b) => {
    if (Array.isArray(b)) return true;
    const k = key(b);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

const challenges: Challenge[] = (published as { sponsor: string | null; title: string; summary: string[]; body: (string | string[])[] }[])
  .map((c) => ({
    sponsor: c.sponsor ?? undefined,
    logo: c.sponsor ? logos[c.sponsor] : undefined,
    title: c.title,
    summary: c.summary,
    body: dedupe(c.summary, c.body),
  }));

export const barcelona2025: Edition = {
  slug: 'barcelona2025',
  number: 4,
  name: 'Barcelona 2025',
  city: 'Barcelona',
  country: 'Spain',
  flag: '🇪🇸',
  dates: 'November 26-28, 2025',
  year: 2025,
  venue: 'Team Labs BCN, Barcelona',
  heroTitle: 'The hackathon for travel tech innovation',
  headline: 'That’s a wrap! Thank you to everyone who joined us at Team Labs BCN. Here’s how it went.',
  intro: [
    {
      text: 'The 4th edition of Decode Travel, the travel industry’s Web3 and AI hackathon, was organized by Chain4Travel with Hospitalidad Emprendedora and the Tech Tourism Cluster at Team Labs Barcelona. Over 48 hours, 25 developers and industry experts went beyond theoretical concepts to production-ready solutions for companies like Vueling Airlines and Clorian Ticketing, tackling problems from the €65M yearly cost of flight turnaround delays to the liquidity trap of supplier payments.',
    },
  ],
  cardPlace: 'Team Labs BCN, Barcelona, 🇪🇸 Spain',
  cardImage,
  heroImage: cardImage,
  cardStats: ['25 developers and experts', '48 hours', '4th edition'],
  stats: [
    { value: '25', label: 'developers and industry experts' },
    { value: '48h', label: 'of hacking' },
    { value: '4th', label: 'edition of Decode Travel' },
  ],
  agendaTitle: 'Decode Travel Barcelona in 3 days',
  agenda: [
    {
      day: 'Day 01', date: 'November 26', title: 'Kick-off',
      items: [
        { time: '09:00', text: 'Kick-off at Team Labs BCN, challenge presentations, team get-together' },
        { time: '19:00', text: 'Welcome Dinner' },
      ],
    },
    { day: 'Day 02', date: 'November 27', title: 'Whole-Day Hacking', items: [{ time: '19:00', text: 'Pitch Deadline' }] },
    {
      day: 'Day 03', date: 'November 28', title: 'Pitches',
      items: [{ time: '10:00', text: 'Pitch kick-off' }, { time: '14:00', text: 'Award ceremony' }],
    },
  ],
  challengesTitle: 'Innovation Challenges 2025',
  challenges,
  jury: [
    { name: 'Alberto Martín', role: 'Head of Expansion, Christie & Co' },
    { name: 'Toni Masó', role: 'COO, Clorian Ticketing' },
    { name: 'Pablo Castillo', role: 'CEO, Chain4Travel' },
    { name: 'Montse Bernad', role: 'Senior Technical Sales Manager, Nubem Systems' },
    { name: 'Angel Diaz Gil', role: 'Product Owner, Vueling' },
    { name: 'Josep Mauri Morera', role: 'Director of Administration, Vueling' },
    { name: 'Ralf Usbeck', role: 'President of the Board, Chain4Travel' },
  ],
  juryNote: {
    text: 'As a novelty this year, the human jury was supported by a Generative AI Assessment Layer from Nubem Systems. This AI panel objectively analyzed the code quality and the integration into the Camino Network.',
  },
  awards: [
    {
      award: '1st place',
      team: 'Cabin Crew Prepare for Landing',
      challenge: 'Vueling Airlines – Blockchain-based Turnaround Checklist',
      description: {
        text: 'Addressing the €65M annual industry cost of flight delays, the team engineered a blockchain verification system for all 27 critical steps of aircraft turnaround. By moving operations, from refueling to baggage loading, onto a shared, immutable ledger, the solution replaces fragmented communication with cryptographic certainty. Real-time dashboards, automated dispute resolution via smart contracts and gamified performance incentives complete it. The solution proved that blockchain can create self-enforcing Service Level Agreements (SLAs), ensuring that every stakeholder is held accountable and paid instantly based on performance.',
      },
      repos: [
        { label: 'barcelona-2025-team-cabin-crew', url: `${org}/barcelona-2025-team-cabin-crew` },
        { label: 'barcelona-2025-team-cabin-crew-winner', url: `${org}/barcelona-2025-team-cabin-crew-winner` },
      ],
    },
    {
      award: 'Winner of the "Heart"',
      team: 'VAN',
      company: 'by Neobookings',
      challenge: 'AI Agent Travel Booking',
      description: {
        text: 'Team VAN bridged the gap between Generative AI and functional commerce. By combining Large Language Models (LLMs) with the Model Context Protocol (MCP) and Camino Messenger, they built a system where AI agents act as "ad hoc distributors." This solution moves beyond “inspiration” or "search" to "execution." Consumers can fund an AI agent with a digital wallet, allowing the software to discover supplier, negotiate, book, and settle payments directly with suppliers. It paves the way for a B2C environment where personal AI agents handle the complexities of travel logistics autonomously.',
      },
      repos: [{ label: 'barcelona-2025-team-van', url: `${org}/barcelona-2025-team-van` }],
    },
  ],
  teamsTitle: 'Solving the "Unsolvable" Problems',
  teams: [
    {
      team: 'Fuely',
      description: { text: 'Team Fuely tackled the cash flow crisis in aviation fuel settlement. By integrating Camino Messenger with smart contracts, they demonstrated a system where fuel delivery is cryptographically signed and paid for instantly in stablecoins. This eliminates the reconciliation nightmare and frees up working capital for the entire supply chain.' },
      repos: [{ label: 'barcelona-2025-team-fuely-croowy', url: `${org}/barcelona-2025-team-fuely-croowy` }],
    },
    {
      team: 'Ticket Police',
      challenge: 'Challenge by Clorian Ticketing',
      description: { text: 'Ticket Police utilized programmable NFTs to enforce price caps on resale and automate identity verification, protecting fans and revenue.' },
      repos: [{ label: 'barcelona-2025-team-ticket-police', url: `${org}/barcelona-2025-team-ticket-police` }],
    },
    {
      team: 'Asgard',
      description: { text: 'Asgard utilized "stacked NFTs" to create a single source of truth for booking updates, preventing the needs for reconciliation that plagues parties communicating via channel managers.' },
      repos: [
        { label: 'barcelona-2025-team-hubby-esim', url: `${org}/barcelona-2025-team-hubby-esim` },
        { label: 'barcelona-2025-team-hubby-esim-contracts', url: `${org}/barcelona-2025-team-hubby-esim-contracts` },
      ],
    },
    {
      team: 'AlphaHacks',
      company: 'by TravelVerse',
      description: { text: 'Team AlphaHacks (by TravelVerse) deployed an AI-bot to fight overtourism. By using predictive modeling and "Green NFTs" (Proof-of-Visit), they successfully demonstrated how to steer traveler behavior away from congested zones through transparent, blockchain-verified incentives - reducing peak-zone pressure by up to 30%.' },
      repos: [
        { label: 'alpha-hack-frontend', url: `${org}/barcelona-2025-team-alpha-hack-frontend` },
        { label: 'alpha-hack-backend', url: `${org}/barcelona-2025-team-alpha-hack-backend` },
        { label: 'alpha-hack-ai-api', url: `${org}/barcelona-2025-team-alpha-hack-ai-api` },
        { label: 'travelverse-contracts', url: `${org}/barcelona-2025-team-alpha-hack-travelverse-contracts` },
      ],
    },
  ],
  quotes: [
    {
      text: 'Decode Travel 2025 proved that the convergence of AI Agents and Blockchain is not 5 years away; it is here. We saw teams solving massive operational friction points for Vueling & Clorian Ticketing in less than 48 hours. This confirms that Camino Network is the necessary infrastructure to handle the next generation of B2B and B2C travel commerce.',
      author: 'Pablo Castillo', role: 'CEO of Chain4Travel',
    },
    {
      text: 'This hackathon shows that new technological tools are opening up possibilities that were unthinkable until recently. For companies in the sector, adapting and continuing to innovate is not optional: it is the only way to respond to a constantly evolving market and fully harness the potential of new technologies to enhance both the visitor experience and their safety.',
      author: 'Toni Masó', role: 'COO of Clorian Ticketing',
    },
  ],
  gallery: [
    { src: jury, alt: 'Jury: Alberto Martín, Toni Masó, Pablo Castillo, Montse Bernad, Angel Diaz Gil, Josep Mauri Morera, Ralf Usbeck' },
    { src: winners, alt: 'Winning team, together with Vueling representatives' },
    { src: welcome, alt: 'Decode Travel Barcelona 2025' },
    { src: hacking, alt: 'Decode BCN at Team Labs' },
    { src: group1, alt: 'Decode Travel Barcelona 2025' },
    { src: wb1, alt: 'Decode Travel Barcelona 2025' },
  ],
  partners: [
    {
      group: 'Organizers',
      items: [
        { name: 'Tech Tourism Cluster', logo: TechTourismCluster, url: 'https://www.techtourismcluster.org/en', logoClass: 'h-16 lg:h-20 w-auto' },
        { name: 'ACCIÓ', logo: Accio, logoClass: 'h-16 lg:h-20 w-auto' },
        { name: 'Hospitalidad Emprendedora', logo: Hospitalidad, url: 'https://www.hospitalidademprendedora.com/', logoClass: 'h-8 lg:h-11 w-auto' },
        { name: 'Chain4Travel', logo: Chain4Travel, url: 'https://chain4travel.com/', logoClass: 'h-7 lg:h-9 w-auto' },
      ],
    },
    {
      group: 'Partners & Sponsors',
      items: [
        { name: 'Vueling', logo: Vueling, url: 'https://www.vueling.com/', logoClass: 'h-7 lg:h-9 w-auto' },
        { name: 'Team Labs', logo: TeamLabs, logoClass: 'h-8 lg:h-10 w-auto' },
        { name: 'Future Travel', logo: FutureTravel, logoClass: 'h-8 lg:h-10 w-auto' },
        { name: 'Barcelona Travel Hub', logo: BarcelonaTravelHub, logoClass: 'h-8 lg:h-10 w-auto' },
        { name: 'Nubem Systems', logo: Nubem, logoClass: 'h-6 lg:h-9 w-auto' },
        { name: 'Clorian Ticketing', logo: Clorian, url: 'https://clorian.com/en/', logoClass: 'h-8 lg:h-10 w-auto' },
        { name: 'Christie & Co', logo: Christie, logoClass: 'h-6 lg:h-8 w-auto' },
        { name: 'Hacken', logo: Hacken, logoClass: 'h-12 lg:h-14 w-auto' },
        { name: 'Agentic Systems', logo: Agentic, logoClass: 'h-7 lg:h-8 w-auto', withName: true },
      ],
    },
  ],
  links: [
    {
      kind: 'Tech Tourism Cluster',
      title: 'Innovation and talent at the Decode Travel Hackathon',
      excerpt: 'Once again, Decode Travel has highlighted the power of collaboration and technological innovation applied to tourism.',
      url: 'https://www.techtourismcluster.org/en/actualitat/decode-travel-2025',
    },
    {
      kind: 'Clorian',
      title: 'Clorian challenges the tech community at Decode Travel Barcelona 2025',
      url: 'https://clorian.com/en/clorian-challenges-the-tech-community-at-decode-travel-barcelona-2025/',
    },
    { kind: 'GitHub', title: 'Decode Travel Github', url: org },
  ],
};
