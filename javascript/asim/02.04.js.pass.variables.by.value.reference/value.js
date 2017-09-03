/*
Pass by value:
If you change the value of a primitive type (string, number, boolean) 
inside the function the changes won't affect the variable in the outer scope 
*/

"use strict";

var a = 1;

function foo(a) {
	var a =2;
	/*console.log(a);*/
}

foo(a);
console.log(a);