/**
 * For viewing the details of a todo item.
 * Note that $stateParams is part of angular-ui-router. Replaces $routeParams.
 */
define([], function () {

	return function ($scope, $stateParams, ToDoListData) {

		var todoId = parseInt($stateParams.todoId, 10);

		// TODO Easier to have a dedicated query service instead, but this is easier to mock.
		ToDoListData.success(function (data) {

			// Lets find our todo item.
			for (var i = 0; i < data.length; i++) {

				var dataItem = data[i];

				if (dataItem.id === todoId) {

					// Now assign data for views
					$scope.todoItem = dataItem;

					break;
				}
			}

		});

	};

});