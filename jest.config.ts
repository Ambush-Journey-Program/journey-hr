import nextJest from 'next/jest';

const createJestConfig = nextJest();
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTest.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@ambush/ui$': '<rootDir>/src/design-system',
  },
};

module.exports = createJestConfig(customJestConfig);
