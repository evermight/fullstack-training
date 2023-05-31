<?php
/*
// While loop
$cnt = 0;
while($cnt < 10)
{
                  print("We are at iteration ".$cnt."\n");
                  $cnt = $cnt +1;
}

print("All done!");

// For loop
for($c=0; $c<10; $c++)
{
  print("We are at iteration ".$c."\n");
}
*/

$arr1 = ["balloon","helmet","car","bunny"];
for($c=0; $c<sizeof($arr1); $c++)
{
  print("We are at iteration ".$c." with the value ".$arr1[$c]."\n");
}
/*
foreach($arr1 as $x=>$val)
  print("<p>Foreach - we are at iteration ".$x." with the value ".$val."</p>");

*/