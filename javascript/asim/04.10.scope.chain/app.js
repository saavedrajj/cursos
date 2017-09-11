"use strict";

// What is the scope chain

/*
function foo() {
	console.log(myvar);
}

function goo() {
	var myvar = 1;
	foo();
}

goo();
*/

var myvar = 1;

function goo() {
	
	function foo() {
		console.log(myvar);
	}
	foo();
}

goo();