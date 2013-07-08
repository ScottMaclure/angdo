/**
 * A service to represent the search inputs the user has chosen.
 * Currently just a single value, 'text', input box.
 * Later we could capture other data.
 */

define([], function () {

	return function () {
		return {
			text: ''
		};
	}

});