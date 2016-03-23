'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var deepDependencies = require('./');

chai.should();
chai.use(chaiAsPromised);

it('should works', () =>
  deepDependencies().should.eventually.deep.equal([
    'lodash.union',
    'read-pkg',
    'lodash._baseflatten',
    'lodash._baseuniq',
    'lodash.rest',
    'load-json-file',
    'normalize-package-data',
    'path-type',
    'lodash._createset',
    'lodash._setcache',
    'graceful-fs',
    'parse-json',
    'pify',
    'pinkie-promise',
    'strip-bom',
    'hosted-git-info',
    'is-builtin-module',
    'semver',
    'validate-npm-package-license',
    'error-ex',
    'pinkie',
    'is-utf8',
    'builtin-modules',
    'spdx-correct',
    'spdx-expression-parse',
    'is-arrayish',
    'spdx-license-ids',
    'spdx-exceptions',
  ])
);
