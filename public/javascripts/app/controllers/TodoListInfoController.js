/**
 * Summary information about the list.
 */
define([], function () {

	return function ($scope, ToDoListData) {
		ToDoListData.success(function (data) {
			$scope.todoList = data;
		});
	};

});