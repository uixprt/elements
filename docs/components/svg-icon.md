## Using the `src` Attribute

You can load any external or local SVG file by setting the `src` attribute. This will fetch and inline the SVG XML.

```html
<a-svg src="/logo.svg" size="48"></a-svg>
```

You can update the `src` property dynamically in JavaScript:

```js
const icon = document.querySelector('a-svg');
icon.src = '/logo.svg';
```

This is useful for loading icons at runtime or letting users pick SVG files.
# Svg

`<a-svg>` renders scalable SVG icons. It includes a built-in subset of [Heroicons](https://heroicons.com/) and supports custom SVGs via a default slot.

## Usage

```html
<!-- Built-in icon -->
<a-svg name="star" size="32" color="#f59e0b"></a-svg>

<!-- Custom SVG via slot -->
<a-svg size="32">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">...</svg>
</a-svg>
```

## Attributes

| Attribute | Type     | Default  | Description                                     |
|-----------|----------|----------|-------------------------------------------------|
| `name`    | `string` | —        | Built-in icon name. See table below.            |
| `size`    | `number` | `24`     | Width and height in pixels.                     |
| `color`   | `string` | —        | CSS color for the icon (sets `color` on host).  |
| `label`   | `string` | `name`   | `aria-label` value for accessibility.           |

## Built-in Icons

| Name        | Preview |
|-------------|---------|
| `star`      | ⭐ |
| `heart`     | ❤️ |
| `check`     | ✓ |
| `x-mark`    | ✕ |
| `plus`      | + |
| `minus`     | − |
| `home`      | 🏠 |
| `user`      | 👤 |
| `settings`  | ⚙️ |
| `trash`     | 🗑️ |
| `search`    | 🔍 |
| `bell`      | 🔔 |
| `lightning` | ⚡ |
| `eye`       | 👁️ |
| `download`  | ⬇️ |
| `upload`    | ⬆️ |

## CSS Custom Properties

| Property                | Default   | Description              |
|-------------------------|-----------|--------------------------|
| `--elements-icon-size`  | *(set by `size` attr)* | Override icon dimensions |

## JavaScript API

```ts
import { Svg } from '@a/elements/svg-icon';

const icon = document.querySelector('a-svg') as Svg;
icon.name = 'heart';
icon.size = 48;
icon.color = '#ef4444';
```

## Slot

Place any `<svg>` element in the default slot to render a custom icon. The `name` attribute takes priority if both are present.

```html
<a-svg size="40">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
</a-svg>
```
