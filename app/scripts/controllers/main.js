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
//No http model
//    $scope.tasks = ['task 1', '2', '3'];
//With cookie
//      var url = 'http://cookie-gateway-local.dev.corp:8080/cards'
//      var config = {withCredentials: true}
//With cookie local
//      var url = 'https://cookie-gateway.dev.corp/locations/address/mdb/count'
//      var config = {withCredentials: true}
      var url = 'http://localhost:3000/tasks.json'
      var config = {}
      $http.get(url, config
         ).success(
         function(data) {
            $scope.tasks = data;
         }
      );
  }
);
