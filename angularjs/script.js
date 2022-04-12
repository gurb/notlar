var app = angular.module("myApp", []);


app.controller("postsController", function($scope, $http) {
    $scope.banana = "banana";
    $scope.filmler = [];

    $http.get('./film.json').then(function(data)
        {
            $scope.filmler = data.data;
        }
    )
});