# @uixprt/elements

A private, framework-agnostic Web Components library built with native Custom Elements v1.

## Components

| Component | Tag | Description |
|-----------|-----|-------------|
| Svg | `<a-svg>` | Scalable SVG icon with configurable name, size & color |
| Button | `<a-button>` | Accessible button with variants, sizes, loading & disabled states |

## Installation

```bash
npm install @uixprt/elements
```

## Usage

### Via ES Module import (tree-shakeable)

```js
import '@uixprt/elements/svg-icon';
import '@uixprt/elements/button';
```

### Import everything

```js
import '@uixprt/elements';
```

### HTML (after import)

```html
<a-svg name="star" size="32" color="#f59e0b"></a-svg>

<a-button variant="primary" size="md">Click me</a-button>
<a-button variant="danger" loading>Loading…</a-button>
```

## Development

```bash
# Install dependencies
npm install

# Start Storybook development server
npm run storybook

# Build the library
npm run build

# Start docs development server
npm run docs:dev

# Build docs for production (includes Storybook)
npm run docs:build
```

## CSS Custom Properties

All components expose CSS custom properties for theming:

```css
:root {
  --elements-color-primary: #3b82f6;
  --elements-color-primary-hover: #2563eb;
  --elements-color-danger: #ef4444;
  --elements-color-ghost-hover: rgba(0, 0, 0, 0.06);
  --elements-radius: 0.375rem;
  --elements-font-family: system-ui, -apple-system, sans-serif;
}
```

## License

Private — all rights reserved.
