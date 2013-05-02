/*global describe, it*/

describe('TodoListController specs', function () {

	it('should create a todoList with 6 items', function () {

		var scope = {},
			controller = new TodoListController(scope)

		expect(scope.todoList.length).toBe(6);
		
	});

});