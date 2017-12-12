define(['app', 'momentjs'], function(app, moment) {

  app.factory('TimeBox', () => {

    return {

      getCurrentTime: () => {
        return moment().format('YYYY-MM-DD HH:mm:ss');
      },

      getInitTime: () => {
      	return moment().format('YYYY-MM-DD HH:mm:ss');
    	}
    };

  });


  app.factory('UserService', ($http, $q) => {
  	return {

  		getUserList : () => {
  			var deferred = $q.defer();

			$http.get('resources/data/users.json', { cache: true })		// return a promise
				.success(result => deferred.resolve(result))
				.error( (msg,code) => deferred.reject({state: code, msg: msg}) );

			return deferred.promise;
		}
	};
  });



});