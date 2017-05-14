function calculateAge(yearOfBirth){
	var age = 2016 - yearOfBirth;
	return age;
}

var ageJohn = calculateAge(1974);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);


function yearsUntilRetirement(name, yearOfBirth){
	var age = calculateAge(yearOfBirth);
	var retirement = 65 - age;
	if (retirement >= 0) {
		console.log(name + ' retires in ' + retirement + ' years.');
	}
	else {
		console.log(name + ' is already retired');	
	}	
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
