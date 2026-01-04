import { Inter, Poppins } from 'next/font/google';

// Body font - Inter - PRIMARY BODY FONT (p tags, normal text)
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

// Heading font - Poppins - PRIMARY HEADING FONT (h1-h6)
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

// REMOVED FONTS (mapped to Inter/Poppins in typography.scss):
// - Roboto (79 uses) → Inter
// - Syne (59 uses) → Poppins
// - Oswald (27 uses) → Poppins
// - Rajdhani (9 uses) → Poppins
// - Space Grotesk (330 uses) → Poppins
