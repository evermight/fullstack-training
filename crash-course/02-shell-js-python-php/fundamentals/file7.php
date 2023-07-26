<?php
$iterationLimit = 10;
$cnt = 0;

while($cnt<$iterationLimit)
{
  print("You are on iteration " . $cnt."\n");
  $cnt = $cnt+1;
}

for($c=0; $c<$iterationLimit; $c++) {
  print("For iteration: " . $c . "\n");
}