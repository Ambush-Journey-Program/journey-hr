import '@testing-library/jest-dom'

// Fix SVG issue
jest.mock('**/*.svg', () => () => {});
