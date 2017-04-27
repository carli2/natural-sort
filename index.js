var number = /^[0-9]$/;
module.exports = function (a, b) {
	var ai = 0, bi = 0;
	while (true) {
		if (ai >= a.length) return -1;
		if (bi >= b.length) return 1;
		if (number.test(a[ai]) && number.test(b[bi])) {
			// sort a number
			let na = '';
			let nb = '';
			while (number.test(a[ai])) na += a[ai++];
			while (number.test(b[bi])) nb += b[bi++];
			na = Number(na);
			nb = Number(nb);
			if (na < nb) return -1;
			if (na > nb) return 1;
		} else {
			// sort a letter
			if (a[ai] < b[bi]) return -1;
			if (a[ai] > b[bi]) return 1;
			ai++;
			bi++;
		}
	}
}
