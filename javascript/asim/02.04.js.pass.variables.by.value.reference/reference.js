/*
Pass by value:
When passing something by reference you are passing something that points to something else 
versus a copy of the object.
So since with JavaScript passing in a object passes it by reference 
when you change a property of that object from within the function 
the change will be reflected in the outer scopes
*/

"use strict";

var a = {'moo':'too'};

function foo(a) {
	a = {'too':'moo'}
	a.moo = false;	
}

foo(a);
console.log(a);