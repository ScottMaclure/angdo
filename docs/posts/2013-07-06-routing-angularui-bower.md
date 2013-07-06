# 2013-07-06 - Routing, bower and angular-ui

## Overview

Step 7 of the tutorial is about routing, views and partials:

http://docs.angularjs.org/tutorial/step_07

I have already implemented this for phase1, but the obvious weakness is ng-view:

<div ng-view></div>

This is hooked up to $routeProvider:

```
.when('/todo/:todoId', {
    templateUrl: '/partials/todo-item.html'
    //controller: 'TodoItemController'
})
```

## Setting up bower to get angular-ui-router

* .bowerrc (for destination location)
* bower.json (for managing dependencies)

## Changing angdo.config to use $stateProvider

$stateProvider replaces $routeProvider.

$