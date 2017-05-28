module.exports = {
  // Inheret from our package
  extends: 'eslint-config-twolfson',

  // Configure our environment
  // http://eslint.org/docs/user-guide/configuring#specifying-environments
  env: {
    node: true,
    browser: true,
    mocha: true
  }
};
