require.config({
    baseUrl: 'resources/js',
    paths: {
        'angular': ['https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min', 'lib/angular/angular.min'],
        'angular-ui-router': 'lib/angular/angular-ui-router.min',
        'app': 'common/app',
        'controller': 'controller/controller',
        'factory': 'factory/services',
        'momentjs': 'lib/moment'
    },
    shim: {
      'angular-ui-router': {
        exports: 'angular-ui-router',
        depts: ['angular']
      },
      'angular': {
          exports : 'angular'
      }
    }
});

require(['app', 'factory', 'controller'], function (app) {
  app.init();
});