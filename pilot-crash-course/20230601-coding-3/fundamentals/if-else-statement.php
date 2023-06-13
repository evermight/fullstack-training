<?php
$drinkingAge = 21;
$almostDrinkingAge = 13;
$customerAge = 4;

if($customerAge >= $drinkingAge) {
  print("I am inside this if statement, so that means custmoer iis eligible to buy alcohol");
} else if($customerAge >= $almostDrinkingAge) {
	print("Almost there!");
} else {
	print("Custoemr is not old enough");
}

print("End script.");