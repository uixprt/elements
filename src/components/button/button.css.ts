/**
 * CSS styles for <elements-button>
 */

const cssContent = `
  :host {
    display: inline-block;
    box-sizing: border-box;
    font-family: var(--elements-font-family, system-ui, -apple-system, sans-serif);
  }

  :host([hidden]) {
    display: none;
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border: none;
    border-radius: var(--elements-radius, 0.375rem);
    font-family: inherit;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.15s ease, transform 0.1s ease, opacity 0.15s ease, box-shadow 0.15s ease;
    white-space: nowrap;
    user-select: none;
    position: relative;
    overflow: hidden;
    outline: none;
    letter-spacing: 0.01em;
  }

  button:focus-visible {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.45);
  }

  button:active:not(:disabled) {
    transform: scale(0.97);
  }

  /* --- Sizes --- */
  :host([size='sm']) button {
    font-size: 0.8125rem;
    padding: 0.375rem 0.75rem;
    min-height: 2rem;
  }

  :host([size='md']) button,
  button {
    font-size: 0.9375rem;
    padding: 0.5rem 1.125rem;
    min-height: 2.5rem;
  }

  :host([size='lg']) button {
    font-size: 1.0625rem;
    padding: 0.625rem 1.5rem;
    min-height: 3rem;
  }

  /* --- Variants --- */

  /* Primary */
  :host([variant='primary']) button,
  button {
    background: var(--elements-color-primary, #3b82f6);
    color: #fff;
  }
  :host([variant='primary']) button:hover:not(:disabled),
  button:hover:not(:disabled) {
    background: var(--elements-color-primary-hover, #2563eb);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.35);
  }

  /* Secondary */
  :host([variant='secondary']) button {
    background: transparent;
    color: var(--elements-color-primary, #3b82f6);
    box-shadow: inset 0 0 0 1.5px var(--elements-color-primary, #3b82f6);
  }
  :host([variant='secondary']) button:hover:not(:disabled) {
    background: rgba(59, 130, 246, 0.08);
    box-shadow: inset 0 0 0 1.5px var(--elements-color-primary-hover, #2563eb);
  }

  /* Ghost */
  :host([variant='ghost']) button {
    background: transparent;
    color: inherit;
    box-shadow: none;
  }
  :host([variant='ghost']) button:hover:not(:disabled) {
    background: var(--elements-color-ghost-hover, rgba(0, 0, 0, 0.06));
  }

  /* Danger */
  :host([variant='danger']) button {
    background: var(--elements-color-danger, #ef4444);
    color: #fff;
  }
  :host([variant='danger']) button:hover:not(:disabled) {
    background: var(--elements-color-danger-hover, #dc2626);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.35);
  }

  /* --- Disabled --- */
  button:disabled {
    opacity: 0.45;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }

  /* --- Loading spinner --- */
  .spinner {
    display: none;
    width: 1em;
    height: 1em;
    border: 2px solid currentColor;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
    flex-shrink: 0;
  }

  :host([loading]) .spinner {
    display: block;
  }

  :host([loading]) button {
    cursor: wait;
  }

  :host([loading]) .slot-wrapper {
    opacity: 0.7;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

// SSR-safe: Only create CSSStyleSheet in browser environment
export const buttonStyles = typeof CSSStyleSheet !== 'undefined' 
  ? (() => {
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(cssContent);
      return sheet;
    })()
  : null;

export const buttonStylesContent = cssContent;
