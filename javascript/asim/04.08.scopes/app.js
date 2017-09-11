"use strict";


// What are scopes in JavaScript
var asim = 1;
window.moo = 1;

function moo2() {
	var foo = 1;	
}
/*console.log(foo);*/

function moo3() {
	var foo = 2;
	console.log(foo);		
}
moo3();


for (var i=0; i<5; i++) {
	var j = 5;
}

console.log(i);
console.log(j);