# Getting Started

## Introduction

`@a/elements` is a private library of framework-agnostic UI components built with native [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) (Custom Elements v1 + Shadow DOM). They work in any JavaScript framework or plain HTML.

## Installation

```bash
npm install @a/elements
```

> **Note:** This is a private package. Make sure your `.npmrc` is configured to point to the correct registry.

## Usage

### Import everything

Registers all custom elements at once:

```js
import '@a/elements';
```

### Tree-shakeable imports

Import only what you use:

```js
import '@a/elements/svg-icon';
import '@a/elements/button';
```

### HTML

After importing, use the elements like any native HTML element:

```html
<a-svg-icon name="star" size="32" color="#f59e0b"></a-svg-icon>

<a-button variant="primary" size="md">Save</a-button>
<a-button variant="danger" loading>Deleting…</a-button>
```

### Framework Integration

**React (18+)**

```tsx
import '@a/elements';

export function SaveButton() {
  return <a-button variant="primary">Save</a-button>;
}
```

**Vue 3**

```html
<script setup>
import '@a/elements';
</script>

<template>
  <a-button variant="primary">Save</a-button>
</template>
```

**Angular**

```ts
// app.module.ts
import '@a/elements';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({ schemas: [CUSTOM_ELEMENTS_SCHEMA] })
```

## Theming

All components use CSS custom properties. Override them globally:

```css
:root {
  /* Colors */
  --elements-color-primary: #8b5cf6;
  --elements-color-primary-hover: #7c3aed;
  --elements-color-danger: #ef4444;
  --elements-color-danger-hover: #dc2626;
  --elements-color-ghost-hover: rgba(0, 0, 0, 0.06);

  /* Layout */
  --elements-radius: 0.5rem;

  /* Typography */
  --elements-font-family: 'Inter', system-ui, sans-serif;
}
```

Or scope overrides to a container:

```css
.my-section {
  --elements-color-primary: #10b981;
  --elements-radius: 9999px; /* pill buttons */
}
```
