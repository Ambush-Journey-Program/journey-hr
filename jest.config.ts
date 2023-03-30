import nextJest from 'next/jest';

const createJestConfig = nextJest();
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTest.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/(.*)$': '<rootDir>/src/$1',

    '^@ambush/ui$': '<rootDir>/src/design-system$1',
  },
};

module.exports = createJestConfig(customJestConfig);
