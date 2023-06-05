

let student1 = {
	'name': 'John',
	'dob': 1978,
	'vehicle': 'Porche',
	'profession': 'Engineer'
};

let student2 = {
	'name': 'Andrew',
	'dob': 1998,
	'vehicle': 'Tesla',
	'profession': 'Copywriter'
};

let student3 = {
	'name': 'Chi',
	'dob': 2000,
	'vehicle': 'Maserati',
	'profession': 'Manager'
};

let students = [student1, student2, student3];

for(let x=0; x<students.length; x++) {
console.log(students[x].name);
//console.log(students[x].dob);
console.log(students[x].vehicle);
//console.log(students[x].profession);
console.log("---------------------");
}