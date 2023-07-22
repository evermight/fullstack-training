

function addTwoNumbers(x, y) {
return x + y;
}


let eatNumbers = addTwoNumbers;


let result1 = addTwoNumbers(1, 2);
let result2 = eatNumbers(1, 2);

console.log(result2);