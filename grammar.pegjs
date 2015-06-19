start
  = time

time
  = left:timechunk sep* right:time { return left + right; }
  / timechunk

timechunk
  = num:number sep* mult:multiplier { return num * mult; }

multiplier
  = milliseconds
  / seconds
  / minutes
  / hours
  / days
  / weeks

milliseconds
  = ('ms'i / 'milliseconds'i / 'millisecond'i) { return 1; }

seconds
  = ('seconds'i / 'second'i / 'secs'i / 'sec'i / 's'i) { return 1000; }

minutes
  = ('minutes'i / 'minute'i / 'mins'i / 'min'i / 'm'i) { return 60000; }

hours
  = ('hours'i / 'hour'i / 'hrs'i / 'hr'i / 'h'i) { return 3600000; }

days
  = ('days'i / 'day'i / 'd'i) { return 86400000; }

weeks
  = ('weeks'i / 'week'i / 'wks'i / 'wk'i / 'w'i) { return 604800000; }

sep
  = [' '\t]

number
  = float
  / integer

integer "integer"
  = '-'? [0-9]+ { return parseInt(text(), 10); }

float "float"
  = '-'? [0-9]* '.' [0-9]+ { return parseFloat(text(), 10); }
