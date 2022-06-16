console.log(isPalindrome("racecar")) // true
console.log(isPalindrome("programmer")) // false

function isPalindrome(str) {

	const palindrome = str.split('').reverse().join('')

	if (str === palindrome) {
		return true
	}

	return false
}