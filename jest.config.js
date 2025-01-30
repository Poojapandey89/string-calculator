module.exports = {
  preset: 'react-native',
  // setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|my-project|react-clone-referenced-element|react-navigation))',
  ],
};