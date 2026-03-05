// ...existing code...
import { buttonStyles, buttonStylesContent } from './button.css.js';
import type { ButtonVariant, ButtonSize } from '../../utils/types.js';

/**
 * <elements-button>
 *
 * Attributes:
 *  - variant  : 'primary' | 'secondary' | 'ghost' | 'danger'  (default: 'primary')
 *  - size     : 'sm' | 'md' | 'lg'  (default: 'md')
 *  - disabled : boolean
 *  - loading  : boolean — shows spinner, implies disabled behaviour
 *  - type     : 'button' | 'submit' | 'reset'  (default: 'button')
 *
 * CSS Custom Properties (set on :root or parent):
 *  --elements-color-primary, --elements-color-primary-hover
 *  --elements-color-danger, --elements-color-danger-hover
 *  --elements-color-ghost-hover
 *  --elements-radius
 *  --elements-font-family
 *
 * Usage:
 *   <elements-button variant="primary" size="md">Save</elements-button>
 *   <elements-button variant="danger" loading>Deleting…</elements-button>
 */
export class Button extends HTMLElement {
  static get observedAttributes(): string[] {
    return ['variant', 'size', 'disabled', 'loading', 'type'];
  }

  private _shadow: ShadowRoot;
  private _btn!: HTMLButtonElement;

  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: 'open' });
    
    // SSR-safe: Use constructible stylesheets if available, otherwise use style tag
    if (buttonStyles) {
      this._shadow.adoptedStyleSheets = [buttonStyles];
    } else {
      const style = document.createElement('style');
      style.textContent = buttonStylesContent;
      this._shadow.appendChild(style);
    }
    
    this._render();
  }

  get variant(): ButtonVariant {
    return (this.getAttribute('variant') as ButtonVariant) ?? 'primary';
  }
  set variant(val: ButtonVariant) {
    this.setAttribute('variant', val);
  }

  get size(): ButtonSize {
    return (this.getAttribute('size') as ButtonSize) ?? 'md';
  }
  set size(val: ButtonSize) {
    this.setAttribute('size', val);
  }

  get disabled(): boolean {
    return this.hasAttribute('disabled');
  }
  set disabled(val: boolean) {
    val ? this.setAttribute('disabled', '') : this.removeAttribute('disabled');
  }

  get loading(): boolean {
    return this.hasAttribute('loading');
  }
  set loading(val: boolean) {
    val ? this.setAttribute('loading', '') : this.removeAttribute('loading');
  }

  attributeChangedCallback(_name: string, oldVal: string | null, newVal: string | null): void {
    if (oldVal === newVal) return;
    if (this._btn) this._syncButton();
  }

  private _render(): void {
    this._shadow.innerHTML = '';

    this._btn = document.createElement('button');
    this._btn.setAttribute('part', 'button');

    // Spinner element
    const spinner = document.createElement('span');
    spinner.className = 'spinner';
    spinner.setAttribute('aria-hidden', 'true');
    this._btn.appendChild(spinner);

    // Slot wrapper
    const slotWrapper = document.createElement('span');
    slotWrapper.className = 'slot-wrapper';
    const slot = document.createElement('slot');
    slotWrapper.appendChild(slot);
    this._btn.appendChild(slotWrapper);

    this._shadow.appendChild(this._btn);
    this._syncButton();
  }

  private _syncButton(): void {
    const isDisabled = this.disabled || this.loading;
    this._btn.disabled = isDisabled;
    this._btn.setAttribute('type', this.getAttribute('type') ?? 'button');

    if (this.loading) {
      this._btn.setAttribute('aria-busy', 'true');
    } else {
      this._btn.removeAttribute('aria-busy');
    }
  }
}
