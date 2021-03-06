"use strict";
(function () {
	var $dclock = document.getElementById('dclock');

	// init
	digitalClock();

	// clock timer
	function digitalClock() {
		$dclock.innerHTML = formatedString();
		setTimeout(digitalClock, 1000);
	};

	// transformation func
	function formatedString() {
		var creationDate = Date.parse("Mar 31, 2015");
		var currentDate = Date.now();
		var lifetime = currentDate - creationDate;

		var totalSeconds = lifetime / 1000;
		var years = parse(totalSeconds / 31536000);
		var days = parse((totalSeconds - years * 31536000) / 86400);
		var hours = parse(totalSeconds / 3600 - years * 8760 - days * 24);
		var minutes = parse(totalSeconds / 60 - years * 525600 - days * 1440 - hours * 60);
		var seconds = parse(totalSeconds - years * 31536000 - days * 86400 - hours * 3600 - minutes * 60);

		return "There is still nothing " + years + " years " + days + " days " + addZero(hours) + " hours " + addZero(minutes) + " minutes " + addZero(seconds) + " seconds.";
	};

	// addons
	function parse(value) {
		return Number.parseInt(value);
	}

	function addZero(n) {
		if (n < 10) {
			return n = "0" + n;
		} else {
			return n;
		}
	}

	console.log('Clock loaded...');
})();
