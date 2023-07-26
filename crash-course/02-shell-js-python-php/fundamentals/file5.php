<?php
$personAge = 7;
$licenseExpirationDate = 20240101;
$drivingAge = 18;
$currentDate = 20230101;

if($licenseExpirationDate >= $currentDate && $personAge >= $drivingAge) {
	echo "Congratulations, you can drive!";
} else {
	echo "You can not drive.";
}
