'use strict';

var path = require('path');
var readPkg = require('read-pkg');
var union = require('lodash.union');

function resolveDependencyPkg(pkgname) {
  return path.join('node_modules', pkgname, 'package.json');
}

module.exports = function deepDependencies() {
  var result = [];

  function recursiveFindDependencies(pkg) {
    var deps = Object.keys(pkg.dependencies);
    if (deps.length) {
      result = union(result, deps);
      return Promise.all(deps.map(dep =>
        readPkg(resolveDependencyPkg(dep)).then(recursiveFindDependencies)
      ));
    }
    return Promise.resolve();
  }

  return readPkg()
    .then(recursiveFindDependencies)
    .then(() => result);
};
