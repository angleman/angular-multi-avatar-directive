# AngularJS Multi-Avatar Directive

## How to Use

Ruleset:

0. Will use facebook image first
0. Will use twitter image
0. Will user github image if no facebook ID, but has a github username
0. Will fallback to gravatar image (which itself will fallback to a blank user image)

In your HTML, use the following. Depending on what your user has defined, it'll
display an avatar:

```
<div ng-app='YourApp' ng-controller='UsersController'>
  <multi-avatar data-facebook-id='' data-twitter-id='' data-github-username='' data-email=''>
</div>
```

In your Javascript (coffee):

```
YourApp = angular.module("Centrifuge", ["multi-avatar"]);
YourApp.controller "UsersController", ($scope, 'multi-avatar')
```

## Find More Information

Extended as seen at [Creating Simple Directive in Angular](http://www.angularails.com/articles/creating_simple_directive_in_angular) to:
* Include Twitter
* Include Bower
* Include NPM

## License

MIT License, See LICENSE.txt

