/// <reference path='_all.ts' />


/**
 * @type {angular.module}
 */
module todos {
  'use strict';

  var todomvc = angular.module('todomvc', [])
    .controller('todoCtrl', TodoCtrl)
    .directive('todoBlur', todoBlur)
    .directive('todoFocus', todoFocus)
    .service('todoStorage', TodoStorage);
}
