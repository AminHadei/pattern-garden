import { defineConfig } from 'vitepress';
import patternsData from './patterns-data.json' with { type: 'json' };

export default defineConfig({
  title: 'Pattern Garden',
  description:
    'TypeScript workshop projects demonstrating creational, structural, and behavioral design patterns.',
  lang: 'en-US',
  base: '/pattern-garden/',
  cleanUrls: false,
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Patterns', link: '/patterns/factory.html' },
      {
        text: 'GitHub',
        link: 'https://github.com/AminHadei/pattern-garden',
      },
    ],
    sidebar: patternsData.sidebar,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/AminHadei/pattern-garden',
      },
    ],
    search: {
      provider: 'local',
    },
    footer: {
      message: `${patternsData.patternCount} design patterns · Docs generated from README files`,
      copyright: 'MIT License',
    },
  },

  head: [['meta', { name: 'theme-color', content: '#3eaf7c' }]],
});
