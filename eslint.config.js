// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  files: ['src/**/*.ts', 'types/**/*.ts'],
  extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-empty-object-type': [
      'error',
      {
        allowInterfaces: 'always',
      },
    ],
  },
});
