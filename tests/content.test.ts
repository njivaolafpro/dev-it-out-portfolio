import assert from 'node:assert/strict';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { test } from 'node:test';
import { clients, frenchSpacing, getDictionary } from '../src/content/site.ts';

function shape(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(shape);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, shape(item)]));
  }
  return typeof value;
}

function collectStrings(value: unknown): string[] {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  if (value && typeof value === 'object') return Object.values(value).flatMap(collectStrings);
  return [];
}

function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return sourceFiles(path);
    return /\.(ts|tsx|css)$/.test(name) ? [path] : [];
  });
}

test('every client has a logo file', () => {
  for (const client of clients) {
    assert.ok(statSync(join('public/logos', client.file)).isFile(), client.name);
  }
});

test('French and English have the same structure', () => {
  assert.deepEqual(shape(getDictionary('fr')), shape(getDictionary('en')));
});

test('no em or en dash anywhere in the source', () => {
  for (const file of sourceFiles('src')) {
    assert.doesNotMatch(readFileSync(file, 'utf8'), /[–—]/, file);
  }
});

test('French copy uses non-breaking spaces and typographic apostrophes', () => {
  for (const text of collectStrings(getDictionary('fr'))) {
    assert.doesNotMatch(text, / [:?!;%€]/, text);
    assert.doesNotMatch(text, /'/, text);
  }
});

test('frenchSpacing handles amounts and punctuation', () => {
  assert.equal(frenchSpacing('+15 000 €'), '+15 000 €');
  assert.equal(frenchSpacing('On en parle :)'), 'On en parle :)');
});

test('every navigation link points to a section of the page', () => {
  const page = sourceFiles('src/components')
    .map((file) => readFileSync(file, 'utf8'))
    .join('\n');
  for (const { href } of getDictionary('fr').nav.items) {
    assert.ok(page.includes(`id="${href.slice(1)}"`), href);
  }
});
