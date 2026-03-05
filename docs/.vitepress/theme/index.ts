import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import './custom.css';

export default {
  extends: DefaultTheme,
  async enhanceApp({ app }) {
    // Only load Web Components on client side (not during SSR)
    if (!import.meta.env.SSR) {
      await import('../../../src/index.ts');
    }
  },
} satisfies Theme;
