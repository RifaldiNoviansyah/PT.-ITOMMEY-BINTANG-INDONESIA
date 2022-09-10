module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': 'google',
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
    'new-cap': ['warn', {'newIsCap': true}],
    'max-len': ['warn', {'code': 200, 'tabWidth': 4}],
  },
};
