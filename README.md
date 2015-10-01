# minstache-stream
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

[minstache][0] transform stream. Faster and simpler than `mustache`.

## Installation
```sh
$ npm install minstache-stream
```

## Usage
```js
const minstache = require('minstache-stream')
const fs = require('fs')

fs.createReadStream('./foobar.txt')
  .pipe(minstache({ name: 'jjjohnny', occupation: 'wizard' }))
  .pipe(process.stdout)
```

## API
### transformStream = minstache(vars)
Create a minstache transform stream that injects an object of variables. Uses
the `{{varName}}` syntax to mark variables in templates.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/minstache-stream.svg?style=flat-square
[npm-url]: https://npmjs.org/package/minstache-stream
[travis-image]: https://img.shields.io/travis/yoshuawuyts/minstache-stream/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/minstache-stream
[codecov-image]: https://img.shields.io/codecov/c/github/yoshuawuyts/minstache-stream/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/yoshuawuyts/minstache-stream
[downloads-image]: http://img.shields.io/npm/dm/minstache-stream.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/minstache-stream
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard

[0]: https://github.com/tj/minstache
