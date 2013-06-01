require.config({
	paths: {
		'jquery': 'libs/jquery/jquery-2.0.0',
		'underscore': 'libs/underscore/underscore',
		'backbone-raw': 'libs/backbone/backbone-raw',
		'backbone-super': 'libs/backbone/backbone-super',
		'backbone': 'libs/backbone/backbone',
		'bootstrap': 'libs/bootstrap/bootstrap',
		'text': 'libs/require/text'
	},
	shim: {
		'bootstrap': {
			deps: ['jquery']
		},
		'underscore': {
			exports: '_'
		},
		'backbone-raw': {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},
		'backbone-super': {
			deps: ['backbone-raw']
		}
	}
});

require(['jquery', 'modules/main'], function($, main) {
	$(function () {
		main.render();
  });
});