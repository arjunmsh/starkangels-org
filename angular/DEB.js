n = angular.module('crapt', []);
n.controller('DEB', ['$scope', function($scope){

$scope.sw=false; console.log("hi");
$scope.co = function () {
// TODO for the reader: actually save user to database...
$scope.sw=false;console.log("hi1");
};

$scope.ct = function () {
// TODO for the reader: actually save user to database...
$scope.sw=true;console.log("hi2");
};

}]);


