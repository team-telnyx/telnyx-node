/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: 'node',
  transform: {
    '^.+.ts$': ['ts-jest', {}],
  },
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/test/',
    '/TelnyxMethod.basic/',
  ],
  coverageDirectory: 'coverage',
  reporters: ['default', ['github-actions', {silent: false}], 'summary'],
  roots: ['<rootDir>/src/'],
};
