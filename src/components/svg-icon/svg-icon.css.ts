/**
 * CSS styles for <elements-svg-icon>
 */

const cssContent = `
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
    vertical-align: middle;
    box-sizing: border-box;
  }

  :host([hidden]) {
    display: none;
  }

  svg {
    display: block;
    width: var(--elements-icon-size, 24px);
    height: var(--elements-icon-size, 24px);
    fill: currentColor;
    overflow: hidden;
  }
`;

// SSR-safe: Only create CSSStyleSheet in browser environment
export const svgIconStyles = typeof CSSStyleSheet !== 'undefined' 
  ? (() => {
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(cssContent);
      return sheet;
    })()
  : null;

export const svgIconStylesContent = cssContent;
