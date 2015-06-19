var fs = require('fs');
var peg = require('pegjs');
var pkg = require('./package.json');

var grammar = fs.readFileSync(__dirname + '/grammar.pegjs', 'utf-8');

var parserSource = peg.buildParser(grammar, {output:'source'});

fs.writeFileSync(__dirname + '/index.js',
  '// duration-parser ' + pkg.version + '\n' +
  '// ' + pkg.homepage + '\n\n' +
  'var parser = ' + parserSource + ';\n\n' +
  'parser.parse.SyntaxError = parser.SyntaxError;\n' +
  'module.exports = parser.parse.bind(parser);\n'
  ,
  'utf-8'
);

console.log('built version: ' + pkg.version);