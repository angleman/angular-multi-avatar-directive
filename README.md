# AngularJS Multi-Avatar Directive

## How to Use

Will apply in the following order:

0. Facebook ID
0. Twitter ID
0. Github ID
0. Gravatar Email ID or Hash image
0. Blank user image

In your HTML, use the following. Depending on what your user has defined, it'll
display an avatar:

```html
<multi-avatar 
    data-facebook-id='' data-twitter-id='' data-github-id='' data-gravatar-id=''
>
```

In your Javascript (coffee):

```js
app = angular.module("yourmodule", ["multi-avatar"]);
```

## Find More Information

Reworked and extended [Creating Simple Directive in Angular](http://www.angularails.com/articles/creating_simple_directive_in_angular) to now include:
* Standardized data attribute naming 
* Include Facebook
* Include Twitter
* Include GitHub
* Include Gravatar Email address and Hash support

## Install

Bower

```sh
bower install angular-multi-avatar
```

NPM

```sh
npm install angular-multi-avatar
```

## License

MIT License, See LICENSE.txt

