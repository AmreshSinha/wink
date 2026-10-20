import { Archivo, JetBrains_Mono } from 'next/font/google';

// Archivo's width axis gives one family two personalities: expanded for display, normal for text.
export const archivo = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-archivo', display: 'swap' });
export const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' });
