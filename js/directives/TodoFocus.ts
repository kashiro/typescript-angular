/// <reference path='../_all.ts' />


module todos {
  'use strict';
  export function todoFocus($timeout: ng.ITimeoutService): ng.IDirective {
    return {
      link: ($scope: ng.IScope, element: JQuery, attributes: any) => {
        $scope.$watch(attributes.todoFocus, newVal => {
          if(newVal) {
            $timeout(() => element[0].focus(), 0, false);
          }
        });
      }
    };
  }
}
