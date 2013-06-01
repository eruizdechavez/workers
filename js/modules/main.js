define(['backbone', 'modules/views/Main'], function (Backbone, Main) {
	var view = new Main({
		el: '.container'
	});

	return {
		render: function () {
			view.render();
		}
	};
});