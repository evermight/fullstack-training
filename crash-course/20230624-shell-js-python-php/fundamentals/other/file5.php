<!DOCTYPE html>
<html>
  <head>
  <script>

  // While loop
  var cnt = 0;
  while(cnt < 10)
  {
    console.log("We are at iteration "+cnt);
    cnt = cnt +1;
  }
  console.log("All done!");

  // For loop
  for(var c=0; c<10; c++)
    console.log("We are at iteration "+c);

  var arr1 = ["balloon","helmet","car","bunny"];
  for(var c in arr1)
    console.log("Foreach - we are at iteration "+c+" with value "+arr1[c]);
    

  </script>
  </head>
  <body>
  <?php

  // While loop
  $cnt = 0;
  while($cnt < 10)
  {
    print("<p>We are at iteration ".$cnt."</p>");
    $cnt = $cnt +1;
  }
  print("<p>All done!</p>");

  // For loop
  for($c=0; $c<10; $c++)
    print("<p>We are at iteration ".$c."</p>");
 
  $arr1 = ["balloon","helmet","car","bunny"];
  foreach($arr1 as $x=>$val)
    print("<p>Foreach - we are at iteration ".$x." with the value ".$val."</p>");

  ?>
  </body>
</html>
