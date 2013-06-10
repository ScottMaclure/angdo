# Angdo - AngularJS Todo

Learning AngularJS through progressive feature enhancement.

## Goals

Progressively build a functioning multi-user TODO system.

Adapt some best practices while I'm at it.

## Key Concepts

* Automate the toolchain.
* Don't be afraid of refactoring.
* Keep everything in the repo: code, tests, documentation. The repo is all.

## Installation

### Local installation via Apache2

* Clone git repo to ~/dev/projects/angdo
* Add angdo.local to /etc/hosts
* Create /etc/apache2/sites-available/angdo, using [docs/apache-vhost.conf].
* sudo a2ensite angdo

## Running Jasmine tests

Currently static SpecRunner: http://angdo.local/tests/SpecRunner.html

## Read more

* See [docs/project-plan.md] for a breakdown of features.
* See [docs/project-journal.md] for thoughts as I develop.

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
