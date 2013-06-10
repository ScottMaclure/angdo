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

## Viewing ng-scopes

<style>
    .ng-scope { border: 1px solid red; }
</style>

## Developing with a god object

angDoScope.orderProp = 'preferredOrder'; angDoScope.$apply();
angDoScope.orderProp = 'dueDate'; angDoScope.$apply();
