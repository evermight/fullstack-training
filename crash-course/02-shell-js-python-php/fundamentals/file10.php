<?php
$arr1 = [18,600,502,1040,349];
for($x=0; $x<count($arr1); $x++)
{
  if($arr1[$x] > 500)
    print("THis number is bigger than 500\n");
  else
    print("This number is less than or equal to 500\n");
}