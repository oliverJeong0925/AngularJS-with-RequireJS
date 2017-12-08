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

});