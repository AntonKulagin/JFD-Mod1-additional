console.log(isEqualSymbols("адрес", "среда")); // true
console.log(isEqualSymbols("ноутбук", "программист")); // false

function isEqualSymbols(str1, str2) {

	if (str1.length === str2.length) {

		const letters1 = str1.split('').sort().join('')
		const letters2 = str2.split('').sort().join('')

		if (letters1 === letters2) {

			return true
		}
	}

	return false
}