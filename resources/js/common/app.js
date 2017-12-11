define(['angular', 'angular-ui-router'], function (angular) {
	var app = angular.module('myModule', ['ui.router']);

	app.config(['$stateProvider', function($stateProvider, $urlServiceProvider){

		let indexState = {
			name: 'index',
			url: '',
			views: {
				'header': {
					templateUrl: 'views/header.html'
				},
				'footer':{
					templateUrl: 'views/footer.html'
				},
				'main@': {
					templateUrl: 'views/main.html',
					controller: 'MainController'
				}
			}
		};

		let sub1State = {
			name: 'index.sub1',
			url: '/sub1',
			views: {
				'main@': {
					templateUrl: 'views/sub1.html',
					controller: 'UserListController'
				}
			}
		};

		let sub2State = {
			name: 'index.sub2',
			url: '/sub2',
			views: {
				'main@': {
					templateUrl: 'views/sub2.html'
				}
			}
		};

		$stateProvider.state(indexState);
		$stateProvider.state(sub1State);
		$stateProvider.state(sub2State);


	}]);



	// $urlServiceProvider.rules.otherwise({ state: 'index' });

	app.init = function () {
		angular.bootstrap(document, ['myModule']);
	};



	return app;
});