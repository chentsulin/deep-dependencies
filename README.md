# deep-dependencies

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david_img]][david_site]

> Resolve all of project's flatten dependencies.


## Install

```
$ npm install deep-dependencies
```


## Usage

```js
var deepDependencies = require('deep-dependencies');

deepDependencies()
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

### deepDependencies()

## License

MIT © [C.T. Lin](https://github.com/chentsulin/deep-dependencies)

[npm-image]: https://badge.fury.io/js/deep-dependencies.svg
[npm-url]: https://npmjs.org/package/deep-dependencies
[travis-image]: https://travis-ci.org/chentsulin/deep-dependencies.svg
[travis-url]: https://travis-ci.org/chentsulin/deep-dependencies
[coveralls-image]: https://coveralls.io/repos/chentsulin/deep-dependencies/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/r/chentsulin/deep-dependencies?branch=master
[david_img]: https://david-dm.org/chentsulin/deep-dependencies.svg
[david_site]: https://david-dm.org/chentsulin/deep-dependencies

