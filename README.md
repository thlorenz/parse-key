# parse-key [![build status](https://secure.travis-ci.org/thlorenz/parse-key.png)](http://next.travis-ci.org/thlorenz/parse-key)

Parses strings into key objects of the same format as the ones emitted by nodejs [readline](http://nodejs.org/api/readline.html).. 

Counter part to [stringify-key](https://github.com/thlorenz/stringify-key).

## Installation

    npm i parse-key

## Usage

```js
var parse = require('parse-key');

parse('ctrl-c') 
// returns { name: 'c', ctrl: true, meta: false, shift: false, alt: false }

parse('shift-ctrl-c') 
// returns { name: 'c', ctrl: true, meta: false, shift: true, alt: false }

parse('alt-c') 
// returns { name: 'c', ctrl: false, meta: false, shift: false, alt: true }
```

## Caveats

To be complete, the `alt` modifier is parsed and included with the returned `key` although the nodejs readline does not
include it in its `key` object.
