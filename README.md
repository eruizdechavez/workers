# workers

An example of [web workers](https://developer.mozilla.org/en-US/docs/Web/Guide/Performance/Using_web_workers).

## About

The main goal of this example is to make a quick test of [web workers](https://developer.mozilla.org/en-US/docs/Web/Guide/Performance/Using_web_workers) on a heavy process that may block the complete browser.

This example is also using other known framewors such as [RequireJS](http://requirejs.org/), [Backbone](http://backbonejs.org/) and [Bootstrap](http://twitter.github.io/bootstrap/) but the only purpose of those here is to shape the code on modules. If you want to 100% focus on the web worker code, please go directly to ```js/modules/worker.js``` and ```js/modules/workers/worker.js```.

### Loading a web worker

```javascript
// js/modules/worker.js, line 2
var worker = new Worker('js/modules/workers/worker.js'),
```

### Sending a message to our web worker

```javascript
// js/modules/worker.js, line 12
worker.postMessage(1000);
```

### Responding from the web worker

```javascript
// js/modules/workers/worker.js, line 9
postMessage(result);
```

## Usage

Due to [web workers](https://developer.mozilla.org/en-US/docs/Web/Guide/Performance/Using_web_workers) limitation, this example require to be executed on a static web server. A personal recomendation is to use [node-static](https://github.com/cloudhead/node-static).