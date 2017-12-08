require.config({
    baseUrl: 'resources/js',
    paths: {
        'angular': ['https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min', 'lib/angular/angular.min'],
        'app': 'common/app',
        'controller': 'controller/controller',
        'factory': 'factory/services',
        'momentjs': 'lib/moment'
    },
    shim: {
      angular: {
          exports : 'angular'
      }
    }
});

require(['app', 'factory', 'controller'], function (app) {
  app.init();
});