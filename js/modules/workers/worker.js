onmessage = function onmessage(event) {
	var result = 0,
		i = 0;

	for (; i <= event.data; i++) {
		result += i;
	}

	postMessage(result);
};