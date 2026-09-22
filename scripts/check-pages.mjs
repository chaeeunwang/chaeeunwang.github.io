import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

for (const route of ['', 'pm/', 'developer/']) {
  const file = `dist/client/${route}index.html`;
  const html = readFileSync(file, 'utf8');
  assert.match(html, /<h1[\s>]/, `${file}: missing rendered content`);
  assert.match(html, /https:\/\/chaeeunwang\.github\.io\/og\.png/);
  assert.doesNotMatch(html, /chatgpt\.site|__sites/);
  for (const [, asset] of html.matchAll(
    /(?:src|href)="(\/[^"?#]+\.(?:css|js|woff2|png|jpg|svg))(?:[?#][^"]*)?"/g,
  )) {
    assert.ok(existsSync(`dist/client${asset}`), `${file}: missing ${asset}`);
  }
}
assert.ok(existsSync('dist/client/404.html'), 'missing static 404 page');
console.log(
  'GitHub Pages export: 3 routes, metadata and local assets verified.',
);
