define([], function () {

	return function ($http) {
		return $http.get('/data/todoList.json');
	};

});