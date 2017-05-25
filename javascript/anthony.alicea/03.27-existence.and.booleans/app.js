console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean("")); // false

var a;

//goes to the internet and look for a value

a = 0;

if (a ||  a === 0) {
	// a = false
	console.log('Something is there.')
}