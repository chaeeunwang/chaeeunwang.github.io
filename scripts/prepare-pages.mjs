import { mkdirSync, renameSync } from 'node:fs';

// ponytail: vinext beta.5 skips trailing-slash export routes; remove when its exporter handles redirects.
for (const route of ['pm', 'developer']) {
  mkdirSync(`dist/client/${route}`, { recursive: true });
  renameSync(`dist/client/${route}.html`, `dist/client/${route}/index.html`);
}
