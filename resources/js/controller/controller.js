define(['app'], function(app) {

  app.controller('MainController', ['$scope', '$interval', 'TimeBox', function ($scope, $interval, TimeBox) {

    $scope.which = 'SUPER';
    $scope.time = TimeBox.getCurrentTime();
    $interval(() => {$scope.time = TimeBox.getCurrentTime();}, 1000);
    $scope.start = TimeBox.getInitTime();

  }]);

});