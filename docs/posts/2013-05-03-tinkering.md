## 2013-05-03 - Tinkering

### Summary of terms

In no particular order:

* **data binding:** core feature of angular - it's the glue you don't have to write yourself.
* **ng-app:** declares that element (and down) to be under control of angular.
* **ng-controller:** same concept, just for a particular controller object.
* **directive:** element attributes that trigger functionality etc.
* **scope:** links controller with view. basically, the view model.
* **module:** ng is the angular module, providing core services.
* **filter:** These can be called with directives. E.g. ng-repeat="todo in todoList | filter:query"

Other stuff:

* **ng-bind-template**: Directive to eval an expression for the element html.

### How to get access to a scope

Useful for debugging:

`var scope = angular.element(document.getElementsByClassName('TodoListController')).scope()`