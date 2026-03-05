/**
 * CSS styles for <elements-svg-icon>
 */
export const svgIconStyles = new CSSStyleSheet();
svgIconStyles.replaceSync(`
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
`);
