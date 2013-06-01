define(['backbone', 'modules/loop', 'modules/worker'], function (Backbone, loop, worker) {
	return Backbone.View.extend({
		template: null,

		events: {
			'click #loop .btn': 'go_loop',
			'click #worker .btn': 'go_worker'
		},

		initialize: function () {
			this.listenTo(Backbone, 'loop', this.loop);
			this.listenTo(Backbone, 'worker', this.worker);
		},

		go_loop: function(event) {
			$(event.currentTarget).remove();
			this.$('#loop > .progress').removeClass('hide');
			loop.render(2500000000, this.loop);
		},

		go_worker: function(event) {
			$(event.currentTarget).remove();
			this.$('#worker > .progress').removeClass('hide');
			worker.render(2500000000, this.worker);
		},

		loop: function(result) {
			this.$('#loop > .progress').remove();
			this.$('#loop > .well').html(result);
		},

		worker: function(result) {
			this.$('#worker > .progress').remove();
			this.$('#worker > .well').html(result);
		}
	});
});