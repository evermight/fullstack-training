<?php
$arr1 = ["balloon","helmet","car","bunny"];
for($c=0; $c<count($arr1); $c++)
  print("Foreach - we are at iteration ".$c." with value ".$arr1[$c]."\n");

foreach($arr1 as $c=>$val)
  print("Foreach - we are at iteration ".$c." with value ".$val."\n");