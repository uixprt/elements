/**
 * @a/elements — Framework-agnostic Web Components
 *
 * Importing this module registers all custom elements.
 * For tree-shakeable imports, use individual component paths:
 *   import '@a/elements/svg-icon'
 *   import '@a/elements/button'
 */

// Re-export component classes
// Re-export component classes
export { Svg } from './components/svg-icon/svg-icon.js';
export { Button } from './components/button/button.js';

// Re-export shared types
export type { ButtonVariant, ButtonSize, IconSize } from './utils/types.js';

// Register all custom elements
// Register all custom elements
import './components/svg-icon/index.js';
import './components/button/index.js';
