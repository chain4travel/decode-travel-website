import type { Edition } from '../types';
import { berlin2024 } from './berlin2024';
import { antalya2024 } from './antalya2024';
import { crete2025 } from './crete2025';
import { barcelona2025 } from './barcelona2025';

// Chronological order: drives the home page cards, footer and prev/next links.
export const editions: Edition[] = [berlin2024, antalya2024, crete2025, barcelona2025];
