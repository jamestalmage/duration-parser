describe('duration-parser', function(){
  var fs = require('fs');
  var peg = require('pegjs');
  var assert = require('assert');

  var grammar = fs.readFileSync(__dirname + '/../grammar.pegjs', 'utf-8');
  var parser = peg.buildParser(grammar);

  var tests = [
    ['0', 0],

    ['1ms', '1 millisecond', '+1ms', 1],
    ['2ms', '2 milliseconds', 2],
    ['1 second', '1 sec', '1s', 1000],
    ['2 seconds', '2 secs', '2s', 2000],
    ['1 minute', '1 min', '1m', 60000],
    ['1.1 minutes', '1.1 mins', '1.1m', 66000],
    ['1 hour', '1 hr', '1h', 3600000],
    ['3 hours', '3 hrs', '3h', 10800000],
    ['1 day', '1d', 86400000],
    ['2 days', '2d', 172800000],
    ['1 week', '1 wk', '1w', 604800000],
    ['2 weeks', '2 wks', '2w', 1209600000],
    ['1 minute -10 seconds', '2 minutes - 1 minute 10 seconds', 50000],
    ['-1 minute 10 seconds', -70000],
    ['1 minute - 10 seconds + 30 milliseconds', 50030],
    ['1 minute - 10 seconds 30 milliseconds',   49970],

    //DOCS: These are the examples from the docs - verify they are correct
    ['1 second',  1000],
    ['2 seconds', 2000],
    ['3.4s',      3400],

    ['1 minute 9 seconds',      69000],
    ['1 minute - 10 seconds',   50000],
    ['-1 minute + 10 seconds', -50000],
    ['-1 minute 10 seconds',   -70000]
  ];

  tests.forEach(function(value){
    var expected = value.pop();
    value.forEach(function(value){
      makeTest(value, expected);
    });
  });

  function makeTest(input, expected) {
    it(input + ' = ' + expected, function() {
      assert.equal(parser.parse(input), expected);
    });
  }
});
