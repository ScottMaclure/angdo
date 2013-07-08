# 2013-05-02 - Getting started

## First impressions?

Ang's website is a fantastic resource.

Example: the tutorial: http://docs.angularjs.org/tutorial/step_00

I really like the idea of writing all my docs in markdown.

Keeping all input in one client application (code editor) is nice. Can output to HTML later using Jekyll.

## The Scope achieves data binding

_The concept of a scope in Angular is crucial; a scope can be seen as the glue which allows the template, model and controller to work together. Angular uses scopes, along with the information contained in the template, data model, and controller, to keep models and views separate, but in sync. Any changes made to the model are reflected in the view; any changes that occur in the view are reflected in the model._

## What is the "model" in AngularJS?

Backbone has Collections and Models, which emit events when changed etc. They provide a RESTful API for updating to the server.

How does angular achieve this in a structured manner?

## Estimation system for todo list

* 1) Trivial, minutes to hours, up to half a day max
* 2) Up to a day
* 3) 1 day to several days
* 5) Several days to a week
* 8) 1-2 weeks

## scopes

Determine how the data binding works I think. Work within the context of a DOM hiearchy.

Viewng on page:
<style>
    .ng-scope { border: 1px solid red; }
</style>

## Developing with a god object

angDoScope.orderProp = 'preferredOrder'; angDoScope.$apply();
angDoScope.orderProp = 'dueDate'; angDoScope.$apply();

## $http Service

Refactor existing code to use DI.
Services are singletons, hey?
DI system ensures singletons are not anti-patterns? Depedencies are not resolved by components themselves.
$http service returns a promise object
angular detected JSON and handled parsing automagically
controller signature is how the DI system works. angular handles transitive dependencies also.
Beware JS minification changing variable names in functions. You can be explicit:
`PhoneListCtrl.$inject = ['$scope', '$http'];`

http://docs.angularjs.org/guide/dev_guide.services.understanding_services

## Links

href="#/phones/{{phone.id}}"

## Images

img ng-src="{{phone.imageUrl}"
ng-src means the html isn't rendered with {{...}} before angular takes over.

## Routing and layout templates

index.html will become the layout template. views will be loaded as "partial templates" based on the current "route".
$routeProvider (of $route service) wires controllers, view templates and current URL location in browser.
deep linking, back/forward.

## Dependency Injection, Services and Providers

injector doesn't know about $http or $route, or services unless configured with proper module definitions.
Providers are objects that provide (create) instances of services and expose config APIs.
Angular doesn't try to solve script load ordering or lazy script fetching. So it can be used with RequireJS?

## App Module

Using config API we request $routeProvider to be injected into our config function.
$routeProvider.when provides our routes.