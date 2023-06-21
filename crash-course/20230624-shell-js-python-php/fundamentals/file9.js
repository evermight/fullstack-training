let arr1 = ["balloon","helmet","car","bunny"];
for(let c =0; c<arr1.length; c++)
  console.log("Foreach - we are at iteration "+c+" with value "+arr1[c]);

for(let c in arr1)
  console.log("Foreach - we are at iteration "+c+" with value "+arr1[c]);