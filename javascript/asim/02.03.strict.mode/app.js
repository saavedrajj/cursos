"use strict";

// Example 1 
/*
var theVal=0;
thVal=1;

if (theVal > 1) {
	console.log("hello");
}
*/
// Example 2  
/*var let = 1;*/

// Example 3
var foo=1;
delete foo;

function moo() {};
delete moo;

function moo(arg) {
	delete moo;	
};

var a = 2;
eval("var a = 1");
console.log(a);