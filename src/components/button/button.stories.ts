import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Button',
  component: 'a-button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
An accessible, framework-agnostic button component with multiple variants and sizes.

\`\`\`html
<a-button variant="primary" size="md">Click me</a-button>
<a-button variant="danger" loading>Deleting…</a-button>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'danger'],
      description: 'Visual style variant',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
      table: { defaultValue: { summary: 'md' } },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the button',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Shows a loading spinner and disables interaction',
    },
    label: {
      control: { type: 'text' },
      description: 'Button label text',
      table: { category: 'Slot' },
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    label: 'Click me',
  },
  render: ({ variant, size, disabled, loading, label }: Record<string, unknown>) => html`
    <a-button
      variant=${variant as string}
      size=${size as string}
      ?disabled=${disabled as boolean}
      ?loading=${loading as boolean}
    >${label as string}</a-button>
  `,
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  name: 'Primary',
  args: { variant: 'primary', label: 'Save Changes' },
};

export const Secondary: Story = {
  name: 'Secondary',
  args: { variant: 'secondary', label: 'Cancel' },
};

export const Ghost: Story = {
  name: 'Ghost',
  args: { variant: 'ghost', label: 'Learn More' },
};

export const Danger: Story = {
  name: 'Danger',
  args: { variant: 'danger', label: 'Delete Account' },
};

export const Sizes: Story = {
  name: 'Sizes',
  render: () => html`
    <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap;">
      <a-button variant="primary" size="sm">Small</a-button>
      <a-button variant="primary" size="md">Medium</a-button>
      <a-button variant="primary" size="lg">Large</a-button>
    </div>
  `,
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => html`
    <div style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;">
      <a-button variant="primary">Primary</a-button>
      <a-button variant="secondary">Secondary</a-button>
      <a-button variant="ghost">Ghost</a-button>
      <a-button variant="danger">Danger</a-button>
    </div>
  `,
};

export const LoadingState: Story = {
  name: 'Loading State',
  render: () => html`
    <div style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;">
      <a-button variant="primary" loading>Saving…</a-button>
      <a-button variant="secondary" loading>Processing</a-button>
      <a-button variant="danger" loading>Deleting</a-button>
    </div>
  `,
};

export const DisabledState: Story = {
  name: 'Disabled State',
  render: () => html`
    <div style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;">
      <a-button variant="primary" disabled>Disabled Primary</a-button>
      <a-button variant="secondary" disabled>Disabled Secondary</a-button>
      <a-button variant="ghost" disabled>Disabled Ghost</a-button>
    </div>
  `,
};

export const WithIcon: Story = {
  name: 'With Icon',
  render: () => html`
    <div style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;">
      <a-button variant="primary">
        <a-svg name="download" size="16" style="margin-right:0.25rem"></a-svg>
        Download
      </a-button>
      <a-button variant="danger">
        <a-svg name="trash" size="16" style="margin-right:0.25rem"></a-svg>
        Delete
      </a-button>
      <a-button variant="secondary">
        <a-svg name="plus" size="16" style="margin-right:0.25rem"></a-svg>
        Add Item
      </a-button>
      <a-button variant="ghost">
        <a-svg src="/logo.svg" size="16" style="margin-right:0.25rem"></a-svg>
        With Logo
      </a-button>
    </div>
  `,
};

export const CustomTheme: Story = {
  name: 'Custom Theme (CSS vars)',
  render: () => html`
    <div style="
      --elements-color-primary: #8b5cf6;
      --elements-color-primary-hover: #7c3aed;
      --elements-radius: 9999px;
      display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;
    ">
      <a-button variant="primary">Purple Pill</a-button>
      <a-button variant="secondary">Outlined</a-button>
    </div>
  `,
};
