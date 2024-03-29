module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx}'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/registerServiceWorker.js',
    '<rootDir>/src/index.js',
    '<rootDir>/src/index.styled.js',
    '<rootDir>/src/redux/*.js'
  ],
  setupFiles: [
    '<rootDir>/config/jest/setup.js',
    '<rootDir>/config/jest/polyfills.js',
    '<rootDir>/config/polyfills.js'
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.js?(x)',
    '<rootDir>/src/**/?(*.)(spec|test).js?(x)'
  ],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'
  ],
  moduleNameMapper: {
    '^react-native$': 'react-native-web'
  },
  moduleFileExtensions: [
    'web.js',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node'
  ]
};
