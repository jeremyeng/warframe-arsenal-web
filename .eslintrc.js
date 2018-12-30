module.exports = {
  extends: ['plugin:prettier/recommended'],
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
};
