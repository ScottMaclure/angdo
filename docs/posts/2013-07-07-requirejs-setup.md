# Setting up with RequireJS

## Goals

Get the app running through requirejs, grok the benefits over my usual gruntfile approach.

## Go the bower

```
bower install requirejs
```

Done.

## Where to start?

http://requirejs.org/docs/start.html#get

Current setup at the bottom of body element:

```
<script src="/bower/angular/angular.min.js"></script>
<script src="/bower/angular-ui-router/release/angular-ui-router.min.js"></script>
<script src="/bower/moment/min/moment.min.js"></script>
<script src="/javascripts/angdo.js"></script>
```

Replace that with an element in the head element:

```
<!-- data-main attribute tells require.js to load scripts/main.js after require.js loads. -->
<script data-main="/javascripts/angdo" src="scripts/require.js"></script>
```

## Moving bower into /javascripts/bower

So it'll work with requirejs more easily/cleanly.

Not a big fan of everything being downloaded into bower folder. I like my gruntfile :)



