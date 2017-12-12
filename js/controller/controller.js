define(['app'], function (app) {

	app.controller('MainController', ['$scope', '$interval', 'TimeBox', function ($scope, $interval, TimeBox) {

		$scope.which = 'Main Page';
		$scope.time = TimeBox.getCurrentTime();
		$interval(() => {
			$scope.time = TimeBox.getCurrentTime();
		}, 1000);
		$scope.start = TimeBox.getInitTime();

	}]);

	app.controller('UserListController', ['$scope', '$interval', 'UserService', function ($scope, $interval, UserService) {

		$scope.which = 'Data List Using $http';

		UserService.getUserList()
			.then(data => {
				$scope.userList = data;
			})
			.catch(response => console.log(response));

	}]);

});