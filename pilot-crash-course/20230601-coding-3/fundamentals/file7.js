function calculate_house_value(principal,interest,numyears)
{
// principal x (1 + interest) ^ numyears
let total_value = principal*Math.pow(1+interest,numyears);
return total_value;
}  


let subtotal = calculate_house_value(100000,0.05,1);
let total = subtotal - 10;

console.log(total);