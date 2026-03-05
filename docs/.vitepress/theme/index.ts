import DefaultTheme from 'vitepress/theme';
import './custom.css';
import type { Theme } from 'vitepress';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // Only register web components on the client side (not during SSR build)
    if (typeof window !== 'undefined') {
      import('../../../src/index.ts');
    }
  },
} satisfies Theme;
