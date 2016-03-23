'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var isNpm2 = require('is-npm2');
var flatDependencies = require('./');

chai.should();
chai.use(chaiAsPromised);

describe('flatDependencies', () => {
  var npm2;
  before(done => {
    isNpm2()
      .then(is2 => {
        npm2 = is2;
      })
      .then(done);
  });
  it('should works', () => {
    if (npm2) {
      return flatDependencies().should.eventually.to.have.members([
        'is-npm2',
        'lodash.union',
        'read-pkg',
      ]);
    }
    return flatDependencies().should.eventually.to.include.members([
      'is-npm2',
      'lodash.union',
      'read-pkg',
      'execa',
      'lodash._baseflatten',
      'lodash._baseuniq',
      'lodash.rest',
      'load-json-file',
      'normalize-package-data',
      'path-type',
      'cross-spawn-async',
      'npm-run-path',
      'object-assign',
      'path-key',
      'strip-eof',
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
      'lru-cache',
      'which',
      'error-ex',
      'pinkie',
      'is-utf8',
      'builtin-modules',
      'spdx-correct',
      'spdx-expression-parse',
      'is-absolute',
      'isexe',
      'is-arrayish',
      'spdx-license-ids',
      'spdx-exceptions',
      'is-relative',
    ]);
  });
});
