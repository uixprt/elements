import { defineConfig } from 'vitepress';

export default defineConfig({
  title: '@a/elements',
  description: 'Framework-agnostic Web Components library',
  lang: 'en-US',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap',
    }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/svg-icon' },
      { text: 'Storybook', link: '/storybook/', target: '_blank' },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/guide/getting-started' },
          { text: 'Installation', link: '/guide/getting-started#installation' },
          { text: 'Theming', link: '/guide/getting-started#theming' },
        ],
      },
      {
        text: 'Components',
        items: [
          { text: 'SvgIcon', link: '/components/svg-icon' },
          { text: 'Button', link: '/components/button' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-org/elements' },
    ],
    footer: {
      message: 'Private — @a/elements',
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
    search: {
      provider: 'local',
    },
  },

  appearance: 'dark',

  vite: {
    resolve: {
      alias: {
        '@a/elements': '../../src/index.ts',
      },
    },
    css: {
      preprocessorOptions: {},
    },
  },
});
