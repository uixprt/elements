/**
 * Safely define a custom element, preventing re-registration errors.
 */
export function defineElement(tagName: string, constructor: CustomElementConstructor): void {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, constructor);
  }
}
