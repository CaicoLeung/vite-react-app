module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    page: true,
    REACT_APP_ENV: true,
  },
  rules: {
    'no-unused-vars': process.env.NODE_ENV !== 'production' ? 'off' : 'error',
    '@typescript-eslint/no-unused-vars': process.env.NODE_ENV !== 'production' ? 'off' : 'error',
  },
};
