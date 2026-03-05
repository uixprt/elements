import DefaultTheme from 'vitepress/theme';
import './custom.css';

// Always register web components from local source during dev/build
import '../../../src/index.ts';

export default {
  ...DefaultTheme,
};
