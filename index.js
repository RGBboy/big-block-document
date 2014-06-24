/*!
 * Document
 */

/**
 * Module Dependencies
 */

var Document;

/**
 * Document
 *
 * @return {Object} document
 * @api public
 */
Document = function () {

  if (global.window) {
    return global.window.document;
  };

};

/**
 * Module Exports
 */
exports = module.exports = Document;