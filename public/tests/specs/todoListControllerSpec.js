/*global define, describe, it, expect*/

define([
	'app/controllers/TodoListController'
], function(
	todoListController
) {

	describe('TodoListController spec', function () {

		it('should create a todoList with 6 items', function () {

			var scope = {};
			var controller = new TodoListController(scope);

			expect(typeof controller).toBe('object');
			expect(scope.todoList.length).toBe(6);
			
		});

	});

});