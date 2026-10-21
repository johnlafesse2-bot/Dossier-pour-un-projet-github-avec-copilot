import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const webDir = resolve(root, 'www');

mkdirSync(webDir, { recursive: true });
copyFileSync(resolve(root, 'index.html'), resolve(webDir, 'index.html'));

console.log('Fichiers web copies dans www/.');