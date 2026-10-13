import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

// Render the typographic brand asset, without claiming to depict project evidence.
await sharp(fileURLToPath(new URL('../public/social-card.svg', import.meta.url)))
  .png()
  .toFile(fileURLToPath(new URL('../public/social-card.png', import.meta.url)));
