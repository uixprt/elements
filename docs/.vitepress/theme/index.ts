import DefaultTheme from 'vitepress/theme';
import './custom.css';

// Register web components in browser context
if (typeof window !== 'undefined') {
  import('@a/elements').catch(() => {
    // Fallback: import from local source during dev
    import('../../../src/index.ts');
  });
}

export default {
  ...DefaultTheme,
};
