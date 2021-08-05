const ms = require('ms');
const packageJson = require('./package.json');

module.exports = {
  /**
   * Returns the version of the module
   * Should return 1.0.1 I trust :D
   * @returns {string} version of the package
   */
  getVersion() {
    return packageJson.version;
  },

  /**
   * This is the wrapper around ms library
   * @param {string} data
   * @returns {number} milliseconds
   */
  msWrapper(data) {
    return ms(data);
  },
};
