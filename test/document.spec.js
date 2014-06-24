/*!
 * Document unit tests
 */

/**
 * Module Dependencies
 */

var test = require('tape'),
    Document = require('../index');

/**
 * Document Class
 */

test('Document should be a class', function (t) {
  t.plan(1);
  t.ok(Document, 'class should exist');
});

/**
 * Document instance
 */

test('window should equal global.window.document', function (t) {
  var globalDocument;
  if (global.window) {
    globalDocument = global.window.document;
  };
  t.plan(1);
  globalDocument = 
  documentInstance = Document();
  t.equal(documentInstance, globalDocument);
});