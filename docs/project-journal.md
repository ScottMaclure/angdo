# Project Journal

Write my thoughts here as I progress. Reverse chronological order.

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

## 2013-05-02 - Getting started

Ang's website is a fantastic resource.

Example: the tutorial: http://docs.angularjs.org/tutorial/step_00

I really like the idea of writing all my docs in markdown.

Keeping all input in one client application (code editor) is nice.

### The Scope achieves data binding

_The concept of a scope in Angular is crucial; a scope can be seen as the glue which allows the template, model and controller to work together. Angular uses scopes, along with the information contained in the template, data model, and controller, to keep models and views separate, but in sync. Any changes made to the model are reflected in the view; any changes that occur in the view are reflected in the model._