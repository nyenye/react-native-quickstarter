module.exports = {
  extends: ['react-app', 'prettier', 'prettier/flowtype', 'prettier/react'],
  env: {
    browser: true,
    es6: true
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    },
    sourceType: 'module'
  },
  plugins: ['react-native', 'flowtype', 'prettier'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never']
  }
}
