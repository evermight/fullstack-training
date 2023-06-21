let personAge = 7;
let licenseExpirationDate = 20240101;
let drivingAge = 18;
let currentDate = 20230101;

if(licenseExpirationDate >= currentDate && personAge >= drivingAge) {
	console.log("Congratulations, you can drive!");
} else {
	console.log("You can not drive.");
}