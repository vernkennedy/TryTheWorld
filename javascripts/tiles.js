var app = angular.module('myTiles', []);
app.controller('tilesCtrl', function($scope, $http) {
  $http.get("https://raw.githubusercontent.com/vernkennedy/TryTheWorld/gh-pages/javascripts/tiles.json")
  .success(function (response) {$scope.names = response.records;});
});