define(['angular'], function (angular) {
  var app = angular.module('myModule', []);

  app.init = function () {
    angular.bootstrap(document, ['myModule']);
  };

  return app;
});