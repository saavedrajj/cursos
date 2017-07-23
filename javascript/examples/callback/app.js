function greeting(name) {
  alert('Hello '+ name);
}

/*greeting('juan');*/

function processUserInput(callback) {
  var name = prompt('Please enter your name');
  callback(name);
}

processUserInput(greeting);
