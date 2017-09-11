"use strict";
// What is variable hoisting?
/*console.log(a);
var a = 1;/*

/*
var a;
console.log(a);
a=1;
*/


/*
function foo() {
	// console.log(a);
	// var a = 1;
	var a;
	console.log(a);
	a =1;
}
foo();
*/

/*
foo();
function foo() {
	var a;
	console.log(a);
	a =1;
}
*/

foo();
var foo = function() {
	var a;
	console.log(a);
	a =1;
}

