import { readFileSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { gunzipSync } from 'node:zlib';

const parts = ['chunk1.txt','chunk2.txt','chunk3.txt','chunk4.txt','chunk5.txt','chunk6.txt'];
const encoded = parts.map((file) => readFileSync(new URL(file, import.meta.url), 'utf8').trim()).join('').replace(/\s+/g, '');

let html;
try {
  html = gunzipSync(Buffer.from(encoded, 'base64')).toString('utf8');
} catch (error) {
  console.error('Embedded Week 7 package could not be decompressed:', error);
  process.exit(1);
}

const hotfix = readFileSync(new URL('./hotfix.css', import.meta.url), 'utf8');
html = html.replace('</head>', `<style id="production-hotfix">${hotfix}</style></head>`);

const required = [
  'Cyber Threat War Room',
  'Intelligence Studio theme override',
  'Live SOC simulation',
  'Threat Board',
  'You are the threat modeller',
  'production-hotfix',
  'LIVE ASSET TRAFFIC',
  'packetFlow',
  'position:absolute!important'
];
for (const marker of required) {
  if (!html.includes(marker)) {
    console.error(`Week 7 package validation failed: missing ${marker}`);
    process.exit(1);
  }
}

rmSync(new URL('./dist', import.meta.url), { recursive: true, force: true });
mkdirSync(new URL('./dist', import.meta.url), { recursive: true });
writeFileSync(new URL('./dist/index.html', import.meta.url), html, 'utf8');
console.log(`Built direct static Week 7 site (${Buffer.byteLength(html)} bytes) with asset-layout and animation hotfix.`);
