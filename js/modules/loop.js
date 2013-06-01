define(function () {
	return {
		render: function(qty, callback) {
			var result = 0,
				i = 0;

			for (; i <= qty; i++) {
				result += i;
			}

			callback(result);
		}
	}
});