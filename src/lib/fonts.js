import { Inter, Space_Grotesk } from 'next/font/google';

// Body font - Inter (181 uses) - PRIMARY BODY FONT
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

// Heading font - Space Grotesk (330 uses) - PRIMARY HEADING FONT
export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

// REMOVED FONTS (mapped to Inter/Space Grotesk in typography.scss):
// - Roboto (79 uses) → Inter
// - Syne (59 uses) → Space Grotesk
// - Oswald (27 uses) → Space Grotesk
// - Rajdhani (9 uses) → Space Grotesk
// - Poppins (1 use) → Inter
