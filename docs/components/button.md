# Button

`<a-button>` is an accessible button component with multiple visual variants, sizes, loading state, and full theming via CSS custom properties.

## Usage

```html
<a-button variant="primary">Save Changes</a-button>
<a-button variant="secondary">Cancel</a-button>
<a-button variant="ghost">Learn More</a-button>
<a-button variant="danger" loading>Deleting…</a-button>
<a-button variant="primary" disabled>Unavailable</a-button>
```

## Attributes

| Attribute  | Type                                           | Default     | Description                                |
|------------|------------------------------------------------|-------------|--------------------------------------------|
| `variant`  | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'primary'` | Visual style variant.                  |
| `size`     | `'sm' \| 'md' \| 'lg'`                         | `'md'`      | Button size.                               |
| `disabled` | `boolean`                                      | `false`     | Disables the button.                       |
| `loading`  | `boolean`                                      | `false`     | Shows a spinner; implies disabled.         |
| `type`     | `'button' \| 'submit' \| 'reset'`               | `'button'`  | Native button type attribute.              |

## Variants

| Variant     | Use case                                |
|-------------|-----------------------------------------|
| `primary`   | Primary call-to-action                  |
| `secondary` | Secondary or alternative action         |
| `ghost`     | Tertiary, low-emphasis action           |
| `danger`    | Destructive or irreversible actions     |

## Sizes

| Size | Height   | Font     |
|------|----------|----------|
| `sm` | `2rem`   | `0.8125rem` |
| `md` | `2.5rem` | `0.9375rem` |
| `lg` | `3rem`   | `1.0625rem` |

## CSS Custom Properties

| Property                          | Default                    | Description                |
|-----------------------------------|----------------------------|----------------------------|
| `--elements-color-primary`        | `#3b82f6`                  | Primary button background  |
| `--elements-color-primary-hover`  | `#2563eb`                  | Primary hover background   |
| `--elements-color-danger`         | `#ef4444`                  | Danger button background   |
| `--elements-color-danger-hover`   | `#dc2626`                  | Danger hover background    |
| `--elements-color-ghost-hover`    | `rgba(0, 0, 0, 0.06)`      | Ghost hover background     |
| `--elements-radius`               | `0.375rem`                 | Border radius              |
| `--elements-font-family`          | `system-ui, sans-serif`    | Font family                |

## CSS Part

The inner `<button>` element is exposed as `::part(button)` for external styling:

```css
elements-button::part(button) {
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
```

## JavaScript API

```ts
import { Button } from '@a/elements/button';

const btn = document.querySelector('a-button') as Button;
btn.variant = 'danger';
btn.loading = true;

btn.addEventListener('click', (e) => {
  console.log('clicked!', e);
});
```

## Accessibility

- Uses a native `<button>` element internally — inherits full keyboard and screen reader support
- Sets `aria-busy="true"` during loading state
- Automatically disables interaction when `loading` or `disabled`
- Supports `:focus-visible` ring for keyboard users
