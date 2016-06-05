'use strict';

var path = require('path');
var readPkg = require('read-pkg');
var union = require('lodash.union');
var isNpm2 = require('is-npm2');

function resolveFlatDependencyPkg(pkgname) {
  return path.join('node_modules', pkgname, 'package.json');
}

module.exports = function deepDependencies(path) {
  var result = [];
  var isNestedStructure;

  function recursiveFindFlatDependencies(pkg) {
    var deps = Object.keys(pkg.dependencies);
    if (deps.length) {
      result = union(result, deps);
      if (isNestedStructure) {
        return Promise.resolve();
      }
      return Promise.all(deps.map(dep =>
        readPkg(resolveFlatDependencyPkg(dep)).then(recursiveFindFlatDependencies)
      ));
    }
    return Promise.resolve();
  }

  return isNpm2()
    .then(is2 => {
      isNestedStructure = is2;
    })
    .then(() => readPkg(path))
    .then(recursiveFindFlatDependencies)
    .then(() => result);
};
