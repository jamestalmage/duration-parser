# duration-parser

parse time durations written in plain english

[![Build Status](https://travis-ci.org/jamestalmage/duration-parser.svg?branch=master)](https://travis-ci.org/jamestalmage/duration-parser)
[![Dependency Status](https://david-dm.org/jamestalmage/duration-parser.svg)](https://david-dm.org/jamestalmage/duration-parser) 
[![devDependency Status](https://david-dm.org/jamestalmage/duration-parser/dev-status.svg)](https://david-dm.org/jamestalmage/duration-parser#info=devDependencies)

[![NPM](https://nodei.co/npm/duration-parser.png)](https://www.npmjs.com/package/duration-parser/)

# usage

It's a function that parses a duration string and returns the number of milliseconds that duration represents.

```javascript
var parseDuration = require(`duration-parser`);      

parseDuration('1 second');  // 1000
parseDuration('2 seconds'); // 2000
parseDuration('3.4s');      // 3400

parseDuration('1 minute 9 seconds');     //  69000
parseDuration('1 minute - 10 seconds');  //  50000
parseDuration('-1 minute + 10 seconds'); // -50000
parseDuration('-1 minute   10 seconds'); // -70000
```

It understands the following time constructs and abbreviations.

  * **milliseconds**: `milliseconds`, `millisecond`, `ms`
  * **seconds**:`seconds` , `second` , `secs` , `sec` , `s`
  * **minutes**: `minutes` , `minute` , `mins` , `min` , `m`
  * **hours**: `hours` , `hour` , `hrs` , `hr` , `h` 
  * **days**: `days` , `day` , `d`
  * **weeks**: `weeks` , `week` , `wks` , `wk` , `w`
  
## `+` / `-` and order of operations

`+` and `-` operators perform addition and subtraction as expected.
Concatenating time measurements together (with or without whitespace) will perform addition. 

```javascript
'1h3s' == '1h + 3s' == '1 hour 3 seconds'
```

Concatenation has higher precedence than the `+` or `-` operators, so:

```javascript
'1 week - 2 days 6 hours' == '1 week - (2 days + 6 hours)'
```

*(parenthesis are not currently supported)*

# releasing

  1. ensure your git working directory is clean (`git status`).
  2. ensure you are running npm `2.13` or later, or `3.1` or later (`npm --version`, `npm i npm@latest`).
  3. ensure you have `cut-release` installed (`npm i -g cut-release`).
  4. run `cut-release`.
  