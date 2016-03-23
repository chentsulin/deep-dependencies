# flat-dependencies

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david_img]][david_site]

> Resolve all of project's flat dependencies.


## Install

```
$ npm install flat-dependencies
```


## Usage

```js
var flatDependencies = require('flat-dependencies');

flatDependencies()
.then(res => console.log(res));
//=> [
// 'lodash.union',
// 'read-pkg',
// 'lodash._baseflatten',
// 'lodash._baseuniq',
// 'lodash.rest',
// 'load-json-file',
// 'normalize-package-data',
// 'path-type',
// 'lodash._createset',
// 'lodash._setcache',
// 'graceful-fs',
// 'parse-json',
// 'pify',
// 'pinkie-promise',
// 'strip-bom',
// 'hosted-git-info',
// 'is-builtin-module',
// 'semver',
// 'validate-npm-package-license',
// 'error-ex',
// 'pinkie',
// 'is-utf8',
// 'builtin-modules',
// 'spdx-correct',
// 'spdx-expression-parse',
// 'is-arrayish',
// 'spdx-license-ids',
// 'spdx-exceptions',
//])
```


## API

### flatDependencies()

## License

MIT © [C.T. Lin](https://github.com/chentsulin/flat-dependencies)

[npm-image]: https://badge.fury.io/js/flat-dependencies.svg
[npm-url]: https://npmjs.org/package/flat-dependencies
[travis-image]: https://travis-ci.org/chentsulin/flat-dependencies.svg
[travis-url]: https://travis-ci.org/chentsulin/flat-dependencies
[coveralls-image]: https://coveralls.io/repos/chentsulin/flat-dependencies/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/r/chentsulin/flat-dependencies?branch=master
[david_img]: https://david-dm.org/chentsulin/flat-dependencies.svg
[david_site]: https://david-dm.org/chentsulin/flat-dependencies

