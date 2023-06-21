<!DOCTYPE html>
<html>
  <head>
  <script>

  // Functions
  function calculate_house_value(principal,interest,numyears)
  {
    // principal x (1 + interest) ^ numyears
    var total_value = principal*Math.pow(1+interest,numyears);
    return total_value;
  }  


  var subtotal = calculate_house_value(100000,0.05,1);
  var total = subtotal - 10;

  console.log(total);
  </script>
  </head>
  <body>
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

  ?>
  </body>
</html>
