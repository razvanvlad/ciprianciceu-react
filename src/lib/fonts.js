import { Inter, Poppins, Roboto, Oswald, Space_Grotesk, Syne, Rajdhani } from 'next/font/google';

// Body font - Inter (181 uses)
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

// Heading font - Space Grotesk (330 uses)
export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

// Component font - Roboto (79 uses)
export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto',
});

// Design element font - Syne (59 uses)
export const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-syne',
});

// Testimonial font - Oswald (27 uses)
export const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-oswald',
});

// Accent font - Rajdhani (9 uses)
export const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-rajdhani',
});

// Minimal use font - Poppins (1 use)
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});
