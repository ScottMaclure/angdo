# Angdo - AngularJS Todo

Learning AngularJS through progressive feature enhancement.

Demo site: http://angdo.maclure.com.au/

## Goals

* Progressively build a functioning multi-user TODO system.
* Adapt some best practices while I'm at it.

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

* See docs/todo.md for planning and features.
* See docs/posts/ for thoughts as I develop.