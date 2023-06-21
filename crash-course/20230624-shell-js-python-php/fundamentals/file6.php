<?php
$personAge = 7;
$licenseExpirationDate = 20240101;
$drivingAge = 18;
$currentDate = 20230101;

$isValidLicense = $licenseExpirationDate < $currentDate;
$isEligibleAge = $personAge < $drivingAge;
$isAboutToExpire = $licenseExpirationDate == $currentDate;

if($isValidLicense) {
	print("Error: Your license has expired.\n");
} else if ($isEligibleAge) {
	print("Error: You are not old enough.\n");
} else {
	if($isAboutToExpire) {
		print("Warning: Your license expires today!\n");
	}
	print("Congratulations, you can drive!\n");
}