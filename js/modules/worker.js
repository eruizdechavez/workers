define(function () {
	var worker = new Worker('js/modules/workers/worker.js?_=' + Date.now()),
		_callback;

	worker.onmessage = function (event) {
		_callback(event.data);
	};

	return {
		render: function (qty, callback) {
			_callback = callback;
			worker.postMessage(qty);
		}
	}
});