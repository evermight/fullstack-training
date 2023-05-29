<!DOCTYPE html>
<html>
  <head>
  <script>

  // Loop through array with if statement
  var arr1 = [18,600,502,1040,349];
  for(var x=0; x<arr1.length; x++)
  {
    if(arr1[x] > 500)
      console.log("THis number is bigger than 500");
    else
      console.log("This number is less than or equal to 500");
  }
    

  </script>
  </head>
  <body>
  <?php
  $arr1 = [18,600,502,1040,349];
  for($x=0; $x<count($arr1); $x++)
  {
    if($arr1[$x] > 500)
      print("<p>THis number is bigger than 500</p>");
    else
      print("<p>This number is less than or equal to 500</p>");
  }
 

  ?>
  </body>
</html>
