
function sayHello(userName, age) {
	console.log("Hello, my name is " + userName + ".");
	if(age > 21) {
		console.log("You eligible to vote.");
	} else {
		console.log("You are not eligible to vote.")
	}
}

sayHello("David", 23);
sayHello("John", 5);
sayHello("Ashar", 19);
sayHello("Felix", 3495);