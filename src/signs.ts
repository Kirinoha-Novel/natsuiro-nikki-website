import stellaSign from './assets/signs/stella.webp';
import renSign from './assets/signs/ren.webp';

export type Signer = 'stella' | 'ren';

export type Sign = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// size comes from the image files, so it can never drift from them
const toSign = ({ src, width, height }: ImageMetadata, alt: string): Sign => ({ src, alt, width, height });

export const SIGNS: Record<Signer, Sign> = {
  stella: toSign(stellaSign, 'ステラのサイン'),
  ren: toSign(renSign, '蓮のサイン'),
};
