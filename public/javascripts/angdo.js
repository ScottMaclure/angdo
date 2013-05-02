/**
 * Angdo.
 * Writing entire app in 1 JS file for now.
 * Linted via JSHint in IDE.
 *
 * TODO Load from a static json resource for starters.
 * TODO Later, load from local storage.
 */

function TodoListController($scope) {

	$scope.todoList = [

		{
			"title": "Cook dinner"
		},
		{
			"title": "Meditate"
		},
		{
			"title": "Pay credit card"
		},
		{
			"title": "Organise brother's birthday"
		},
		{
			"title": "Invoice Client X"
		},
		{
			"title": "Fix bug Y in project Z"
		}

	];

}