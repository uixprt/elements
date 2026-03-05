// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [{
    files: ['src/**/*.ts'],
    languageOptions: {
        parser: tsparser,
        parserOptions: {
            project: './tsconfig.json',
            ecmaVersion: 2022,
            sourceType: 'module',
        },
    },
    plugins: {
        '@typescript-eslint': tseslint,
    },
    rules: {
        ...tseslint.configs['recommended'].rules,
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/no-unused-vars': 'error',
    },
}, ...storybook.configs["flat/recommended"]];
