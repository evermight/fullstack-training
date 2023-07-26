// Looping through objects
let arr = [
{"name":"John","language":"en","dob":"1911-01-24"},
{
  "name":"Maurice",
  "language":"fr",
  "dob":"1921-05-15"
},
{"name":"Alice","language":"en","dob":"1915-04-05","skills":["php","management","lectures"]}
];

// for(var x=0;x<arr1.length;x++)
for(let x in arr)
  console.log(arr[x].name + " " + arr[x].language + " " + arr[x].dob);