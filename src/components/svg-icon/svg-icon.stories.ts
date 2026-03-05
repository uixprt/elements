export const SrcDynamic: Story = {
  name: 'Dynamic src (SVG file)',
  render: (args, { updateArgs }) => {
    let current = args.src || '';
    return html`
      <div style="display:flex;flex-direction:column;gap:1rem;align-items:flex-start;">
        <label>
          SVG file URL:
          <input type="text" value=${current} @input=${(e: any) => updateArgs({ src: e.target.value })} style="margin-left:0.5rem;width:300px;" />
        </label>
        <a-svg src=${current} size="48"></a-svg>
        <div style="font-size:0.85em;color:#888;">Try a public SVG URL or a local file served by Vite (e.g. /logo.svg)</div>
      </div>
    `;
  },
  args: {
    src: '/logo.svg',
  },
  argTypes: {
    src: { control: 'text', description: 'SVG file URL' },
  },
};
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const ICON_NAMES = [
  'star', 'heart', 'check', 'x-mark', 'plus', 'minus',
  'home', 'user', 'settings', 'trash', 'search', 'bell',
  'lightning', 'eye', 'download', 'upload',
];

const meta: Meta = {
    title: 'Components/Svg',
  component: 'a-svg-icon',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A scalable, accessible SVG icon component with a built-in Heroicons subset.
Use the \`name\` attribute to select a built-in icon, or place an \`<svg>\` in the default slot for custom icons.

\`\`\`html
<a-svg name="star" size="32" color="#f59e0b"></a-svg>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: ICON_NAMES,
      description: 'Built-in icon name',
      table: { defaultValue: { summary: '' } },
    },
    size: {
      control: { type: 'number', min: 12, max: 128, step: 4 },
      description: 'Icon size in pixels',
      table: { defaultValue: { summary: '24' } },
    },
    color: {
      control: { type: 'color' },
      description: 'Icon color (CSS color value)',
    },
    label: {
      control: { type: 'text' },
      description: 'Accessible label (aria-label)',
    },
  },
  render: ({ name, size, color, label }: Record<string, unknown>) =>
      html`<a-svg
      name=${(name as string) ?? 'star'}
      size=${(size as number) ?? 24}
      color=${(color as string) ?? ''}
      label=${(label as string) ?? ''}
      ></a-svg>`,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  name: 'Default (Star)',
  args: { name: 'star', size: 32, color: '#f59e0b', label: 'Star icon' },
};

export const AllIcons: Story = {
  name: 'All Built-in Icons',
  render: () => html`
    <div style="
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      gap: 1.5rem;
      padding: 1.5rem;
    ">
      ${ICON_NAMES.map(
        (name) => html`
          <div style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
            <a-svg name=${name} size="28" color="#94a3b8"></a-svg>
            <span style="font-size:0.7rem;color:#64748b;font-family:monospace">${name}</span>
          </div>
        `,
      )}
    </div>
  `,
};

export const Sizes: Story = {
  name: 'Sizes',
  render: () => html`
    <div style="display:flex;align-items:center;gap:1.5rem;">
      ${[12, 16, 20, 24, 32, 48, 64].map(
        (size) => html`
          <div style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
            <a-svg name="star" size=${size} color="#3b82f6"></a-svg>
            <span style="font-size:0.65rem;color:#64748b">${size}px</span>
          </div>
        `,
      )}
    </div>
  `,
};

export const Colors: Story = {
  name: 'Colors',
  render: () => html`
    <div style="display:flex;gap:1.25rem;align-items:center;">
      ${['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#94a3b8'].map(
        (color) => html`<a-svg name="heart" size="32" color=${color}></a-svg>`,
      )}
    </div>
  `,
};

export const CustomSvgSlot: Story = {
  name: 'Custom SVG (via slot)',
  render: () => html`
    <a-svg size="40">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f59e0b">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
      </svg>
    </a-svg>
  `,
};
