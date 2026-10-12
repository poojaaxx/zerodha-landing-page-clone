import js from '@eslint/js';
import globals from 'globals';
import hooks from 'eslint-plugin-react-hooks';
export default [
  { ignores: ['dist/**', '.tools/**', 'node_modules/**', 'test-results/**'] },
  js.configs.recommended,
  { plugins: { 'react-hooks': hooks }, files: ['**/*.{js,jsx}'], languageOptions: { globals: { ...globals.browser, ...globals.node }, parserOptions: { ecmaFeatures: { jsx: true } } }, rules: { ...hooks.configs.flat.recommended.rules, 'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z]' }] } },
];
