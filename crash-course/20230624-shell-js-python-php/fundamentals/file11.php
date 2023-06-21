<?php

function calculate_house_value($principal,$interest,$numyears)
{
  // principal x (1 + interest) ^ numyears
  $total_value = $principal*pow(1+$interest,$numyears);
  return $total_value;
}  


$subtotal = calculate_house_value(100000,0.05,1);
$total = $subtotal - 10;
print($total);
