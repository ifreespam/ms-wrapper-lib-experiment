const ms = require('ms');
const packageJson = require('./package.json');

module.exports = {
  /**
   * Returns the version of the module
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
