import { create } from 'storybook/theming/create';

export default create({
  base: 'dark',
  brandTitle: '@elements/ui',
  brandUrl: '/',
  brandTarget: '_self',

  // Colors
  colorPrimary: '#3b82f6',
  colorSecondary: '#6366f1',

  // UI
  appBg: '#0f172a',
  appContentBg: '#1e293b',
  appBorderColor: '#334155',
  appBorderRadius: 8,

  // Typography
  fontBase: '"Inter", system-ui, sans-serif',
  fontCode: '"Fira Code", monospace',

  // Text colors
  textColor: '#f1f5f9',
  textInverseColor: '#0f172a',
  textMutedColor: '#94a3b8',

  // Toolbar colors
  barTextColor: '#94a3b8',
  barHoverColor: '#f1f5f9',
  barSelectedColor: '#3b82f6',
  barBg: '#0f172a',

  // Form colors
  inputBg: '#1e293b',
  inputBorder: '#334155',
  inputTextColor: '#f1f5f9',
  inputBorderRadius: 6,
});
