import type { Preview } from '@storybook/web-components-vite';
import { setCustomElementsManifest } from '@storybook/web-components-vite';
import theme from './theme';

// Register all custom elements from local source
if (typeof window !== 'undefined') {
  import('../src/index.ts');
}

const preview: Preview = {
  parameters: {
    docs: {
      theme,
    },
    backgrounds: {
      options: {
        dark: { name: 'dark', value: '#0f172a' },
        light: { name: 'light', value: '#f8fafc' },
        neutral: { name: 'neutral', value: '#1e293b' }
      }
    },
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  initialGlobals: {
    backgrounds: {
      value: 'dark'
    }
  }
};

export default preview;
