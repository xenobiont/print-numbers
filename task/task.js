// Your code here
function printNumbersInt(from, to) {
	let current = from;

	let timerId = setInterval(() => {
		console.log(current);
		if (current === to) {
			clearInterval(timerId);
		}
		current++;
	}, 1000);
}

// использование:
// printNumbersInt(5, 10);

function printNumbersRecursive(from, to) {
	let current = from;

	function doPrint() {
		console.log(current);

		if (current < to) {
			setTimeout(doPrint, 1000);
		}
		current++;
	}
	doPrint();

	setTimeout(doPrint, 1000);
}

// использование:
// printNumbersRecursive(5, 10);

// https://learn.javascript.ru/settimeout-setinterval

function printNumbersRecursive2(from, to) {
	const current = from;
	console.log(current);
	if (from < to) {
		setTimeout(() => printNumbersRecursive2(current + 1, to), 1000);
	}
}
printNumbersRecursive2(1, 3);
