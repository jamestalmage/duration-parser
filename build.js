var fs = require('fs');
var peg = require('pegjs');

var grammar = fs.readFileSync(__dirname + '/grammar.pegjs', 'utf-8');

var parserSource = peg.buildParser(grammar, {output:'source'});

fs.writeFileSync(__dirname + '/index.js', 'module.exports = ' + parserSource);
