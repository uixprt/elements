import type { Preview } from '@storybook/web-components';
import { setCustomElementsManifest } from '@storybook/web-components';
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
      default: 'dark',
      values: [
        { name: 'dark', value: '#0f172a' },
        { name: 'light', value: '#f8fafc' },
        { name: 'neutral', value: '#1e293b' },
      ],
    },
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
