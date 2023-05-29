<!DOCTYPE html>
<html>
  <head>
  <script>

  // Old way of declaring arrays
  var arr1 = new Array(12,34.34,"A sequence of characters",true,null);

  // Modern way of declaring arrays
  var arr2 = [12,34.34,"A sequence of characters",true,null];

  console.log(arr1[0]);
  console.log(arr1[1]);

  </script>
  </head>
  <body>
  <?php

  // Old way of declaring arrays
  $arr1 = array(12,34.34,"A sequence of characters",true,null);

  // Modern way of declaring arrays
  $arr2 = [12,34.34,"A sequence of characters",true,null];

  print "<p>".$arr1[0]."</p>";
  print "<p>".$arr1[1]."</p>";


  ?>
  </body>
</html>
