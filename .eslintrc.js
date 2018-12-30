module.exports = {
  extends: ['prettier', 'eslint:recommended'],
  plugins: ['prettier', 'babel'],
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': [
      1,
      {
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
}