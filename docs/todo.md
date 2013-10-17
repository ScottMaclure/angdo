# Planning (with Fibonacci estimates)

## Phase 3: Setup a test runner, requirejs optimiser

* Add karma + jasmine test runner to the app. Write some basic tests.
* Setup production-ready code with RequireJS optimizer. Deploy to angdo.maclure.com.au
* **Cancelled** Move bower files out of public folder? (For prod, use apache rules to block access to bower folder)

## (DONE) Phase 2: Good routing, public demo.

* **DONE** Setup bower to download directly into /public (for now). Hook up in index.html.
* **DONE** angular-ui-router: Implement a routing/view system more flexible than ng-view.
* **DONE** Setup requirejs, write md doc about it.
* **DONE** Sort out correct apache vhost settings for html5 history.
* **DONE** Setup angodo.maclure.com.au, deploy app there.

## (DONE) Phase 1: Getting Started (Started: 02Apr13)

* **DONE** Create the base project files in a git repository. (1)
* **DONE** Download Angular minified, and get running in an index.html page. (1)
* **DONE** Create and push project on github. (1)
* **DONE** Setup TodoListController with mocked data, render using ng-repeat directive in 2 lists. (3)
* **DONE** Implement routing as per step 07 in tutorial. Weaknesses here. (2)
* **DONE** Update model as user types (1)

## Backlog

* Create a new todo item
* Flesh out the edit form, full validated fields support
* Mark a todo as done
* Add an estimate field (Fibonacci style).
* Perist list to localStorage (meteor will come later)
* Add jQuery to the app. Required for angular-ui at the moment.
* Add http://angular-ui.github.io/bootstrap/ to the app, for a polished UI. Get rid of Pure.
* Consider: Add meteor to the project, use for persisting/sharing data (and to learn meteor).
* Setup a nested view scenario. Perhaps for a hierchical nav?
* Drag n drop re-order of todo items