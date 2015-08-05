'use strict';

/**
 * @ngdoc function
 * @name myYoProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myYoProjectApp
 */
angular.module('myYoProjectApp')
  .controller('MainCtrl', function ($scope, $http) {
//    $scope.tasks = ['task 1', '2', '3'];
      $http.get('http://localhost:9000/tasks.json').success(
         function(data) {
            $scope.tasks = data;
         }
      );
  }
);
