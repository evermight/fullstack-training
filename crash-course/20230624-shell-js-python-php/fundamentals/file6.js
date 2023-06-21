let personAge = 70;
let licenseExpirationDate = 20220101;
let drivingAge = 18;
let currentDate = 20230101;

let isValidLicense = licenseExpirationDate < currentDate;
let isEligibleAge = personAge < drivingAge;
let isAboutToExpire = licenseExpirationDate == currentDate;

if(isValidLicense) {
	console.log("Error: Your license has expired.");
} else if (isEligibleAge) {
	console.log("Error: You are not old enough.");
} else {
	if(isAboutToExpire) {
		console.log("Warning: Your license expires today!");
	}
	console.log("Congratulations, you can drive!");
}