var Juan = {
	firstname: 'Juan',
	lastname: 'Saavedra',
	address: {
		street: 'Apt 45. Block D. The Plaza.',
		city: 'London',
		state: 'London'
	}
};

function greet(person){
	console.log('Hi ' + person.firstname)
}

/*console.log(person);*/
greet(Juan);

greet({
	firstname:'Mary', 
	lastname:'Doe'});

Juan.address2 = {
	street: '333 Second St.'
}