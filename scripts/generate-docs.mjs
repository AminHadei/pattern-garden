import { readdir, readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const srcDir = join(root, 'src');
const docsDir = join(root, 'docs');
const patternsDir = join(docsDir, 'patterns');

const CATEGORIES = {
  creational: {
    label: 'Creational Patterns',
    shortLabel: 'Creational',
    description: 'Patterns for flexible and reusable object creation.',
    folders: ['factory', 'abstract-factory', 'builder', 'prototype', 'singleton'],
  },
  structural: {
    label: 'Structural Patterns',
    shortLabel: 'Structural',
    description: 'Patterns for composing objects into larger structures.',
    folders: [
      'adapter',
      'decorator',
      'bridge',
      'composite',
      'flyweight',
      'facade',
      'proxy',
    ],
  },
  behavioral: {
    label: 'Behavioral Patterns',
    shortLabel: 'Behavioral',
    description: 'Patterns for communication and responsibility between objects.',
    folders: [
      'observer',
      'strategy',
      'chain-of-responsibility',
      'iterator',
      'command',
      'state',
      'visitor',
      'memento',
      'template-method',
      'mediator',
    ],
  },
};

const folderToCategory = Object.fromEntries(
  Object.entries(CATEGORIES).flatMap(([key, { folders }]) =>
    folders.map((folder) => [folder, key]),
  ),
);

function titleFromMarkdown(content, fallback) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : fallback;
}

function slugToTitle(slug) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function shortTitle(title) {
  const clean = title.replace(/^#+\s*/, '');
  const [primary] = clean.split(' - ');
  return primary || clean;
}

function descriptionFromMarkdown(content) {
  const body = content.replace(/^#\s+.+\n+/, '');
  const match = body.match(/^([^#\n`>-].+)/m);
  if (!match) return '';

  const text = match[1].trim();
  return text.length > 130 ? `${text.slice(0, 127)}…` : text;
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function buildPatternCard(pattern) {
  const title = escapeHtml(shortTitle(pattern.title));
  const description = escapeHtml(
    pattern.description || slugToTitle(pattern.slug),
  );
  const category = CATEGORIES[pattern.category]?.shortLabel ?? 'Pattern';

  return `
  <a class="pattern-card pattern-card--${pattern.category}" href="./patterns/${pattern.slug}.html">
    <div class="pattern-card__top">
      <span class="pattern-card__badge">${category}</span>
      <span class="pattern-card__slug">${pattern.slug}</span>
    </div>
    <h3 class="pattern-card__title">${title}</h3>
    <p class="pattern-card__desc">${description}</p>
    <span class="pattern-card__cta">Read documentation →</span>
  </a>`;
}

async function discoverPatterns() {
  const entries = await readdir(srcDir, { withFileTypes: true });
  const patterns = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const readmePath = join(srcDir, entry.name, 'README.md');
    try {
      const content = await readFile(readmePath, 'utf-8');
      patterns.push({
        slug: entry.name,
        title: titleFromMarkdown(content, slugToTitle(entry.name)),
        description: descriptionFromMarkdown(content),
        category: folderToCategory[entry.name] ?? 'other',
        content,
        sourcePath: `src/${entry.name}/README.md`,
      });
    } catch {
      // Folder without README is skipped.
    }
  }

  patterns.sort((a, b) => a.title.localeCompare(b.title));
  return patterns;
}

function buildIndexPage(patterns) {
  const byCategory = Object.entries(CATEGORIES).map(([key, meta]) => ({
    key,
    ...meta,
    patterns: patterns.filter((p) => p.category === key),
  }));

  const uncategorized = patterns.filter((p) => p.category === 'other');
  const categoryCount = byCategory.filter(({ patterns: items }) => items.length > 0)
    .length;

  const categorySections = byCategory
    .filter(({ patterns: items }) => items.length > 0)
    .map(
      ({ key, label, description, patterns: items }) => `
<section class="pg-category pg-category--${key}" id="${key}">
  <header class="pg-category__header">
    <span class="pg-category__badge">${CATEGORIES[key].shortLabel}</span>
    <h2>${label}</h2>
    <p>${description}</p>
    <span class="pg-category__count">${items.length} patterns</span>
  </header>
  <div class="pattern-grid">
${items.map((p) => buildPatternCard(p)).join('\n')}
  </div>
</section>`,
    )
    .join('\n');

  const otherSection =
    uncategorized.length > 0
      ? `
<section class="pg-category pg-category--other" id="other">
  <header class="pg-category__header">
    <span class="pg-category__badge">Other</span>
    <h2>Other Patterns</h2>
    <p>Additional pattern examples in this repository.</p>
    <span class="pg-category__count">${uncategorized.length} patterns</span>
  </header>
  <div class="pattern-grid">
${uncategorized.map((p) => buildPatternCard(p)).join('\n')}
  </div>
</section>`
      : '';

  return `---
title: Pattern Garden
titleTemplate: Design Patterns Workshop
description: TypeScript examples of creational, structural, and behavioral design patterns.
sidebar: true
outline: false
---

<div class="pg-home">
<section class="pg-hero">
<div class="pg-hero__glow" aria-hidden="true"></div>
<div class="pg-hero__content">
<p class="pg-hero__eyebrow">TypeScript Design Patterns</p>
<h1 class="pg-hero__title">Pattern Garden</h1>
<p class="pg-hero__subtitle">Explore runnable TypeScript examples with clear explanations. Docs are auto-generated from each pattern README.</p>
<div class="pg-hero__stats">
<div class="pg-stat"><strong>${patterns.length}</strong><span>Patterns</span></div>
<div class="pg-stat"><strong>${categoryCount}</strong><span>Categories</span></div>
<div class="pg-stat"><strong>TS</strong><span>Runnable code</span></div>
</div>
<div class="pg-hero__actions">
<a class="pg-btn pg-btn--primary" href="#creational">Browse patterns</a>
<a class="pg-btn pg-btn--ghost" href="https://github.com/AminHadei/pattern-garden" target="_blank" rel="noreferrer">GitHub repo</a>
</div>
</div>
</section>
<div class="pg-sections">
${categorySections}
${otherSection}
</div>
</div>
`;
}

function buildPatternPage(pattern) {
  return `---
title: ${JSON.stringify(pattern.title.replace(/^#+\s*/, ''))}
category: ${pattern.category}
source: ${pattern.sourcePath}
---

${pattern.content.trim()}

---

<p class="pattern-source">
  Source: <code>${pattern.sourcePath}</code>
</p>
`;
}

function buildSidebar(patterns) {
  const sidebar = [{ text: 'Home', link: '/' }];

  for (const [, { label, folders }] of Object.entries(CATEGORIES)) {
    const items = folders
      .map((folder) => patterns.find((p) => p.slug === folder))
      .filter(Boolean)
      .map((p) => ({
        text: p.title.replace(/^#+\s*/, ''),
        link: `/patterns/${p.slug}`,
      }));

    if (items.length > 0) {
      sidebar.push({ text: label, collapsed: false, items });
    }
  }

  const uncategorized = patterns.filter((p) => p.category === 'other');
  if (uncategorized.length > 0) {
    sidebar.push({
      text: 'Other Patterns',
      collapsed: false,
      items: uncategorized.map((p) => ({
        text: p.title.replace(/^#+\s*/, ''),
        link: `/patterns/${p.slug}`,
      })),
    });
  }

  return sidebar;
}

async function main() {
  const patterns = await discoverPatterns();

  if (patterns.length === 0) {
    throw new Error('No pattern README files found under src/');
  }

  await rm(patternsDir, { recursive: true, force: true });
  await mkdir(patternsDir, { recursive: true });

  for (const pattern of patterns) {
    await writeFile(
      join(patternsDir, `${pattern.slug}.md`),
      buildPatternPage(pattern),
      'utf-8',
    );
  }

  await writeFile(join(docsDir, 'index.md'), buildIndexPage(patterns), 'utf-8');

  const meta = {
    generatedAt: new Date().toISOString(),
    patternCount: patterns.length,
    sidebar: buildSidebar(patterns),
    patterns: patterns.map(({ slug, title, category, sourcePath }) => ({
      slug,
      title: title.replace(/^#+\s*/, ''),
      category,
      sourcePath,
    })),
  };

  await writeFile(
    join(docsDir, '.vitepress', 'patterns-data.json'),
    `${JSON.stringify(meta, null, 2)}\n`,
    'utf-8',
  );

  console.log(`Generated docs for ${patterns.length} patterns.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
