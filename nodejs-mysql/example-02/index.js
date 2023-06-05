let mysql      = require('mysql');
let mysqlQuery = require('./mysql-query.js');

async function myProgram() {
	let connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '!!HomeWork!!0',
	  database : 'myprogram'
	});
	 
	connection.connect();
	const query = `
		SELECT * FROM student_school_course
		INNER JOIN student ON student_school_course.student_id = student.student_id
		INNER JOIN course ON student_school_course.course_id = course.course_id
		INNER JOIN school ON student_school_course.school_id = school.school_id
		WHERE student.dob > 1970;
	`;
	
	const dbresults = await mysqlQuery(query, connection);

	console.log(dbresults);

	const query2 = `
		SELECT * FROM school
	`;
	
	const dbresults2 = await mysqlQuery(query2, connection);

	console.log(dbresults2);

    const dbresultsaddschool = await mysqlQuery("INSERT INTO school (school_id, school_name, address, minimum_age, maximum_age) VALUES (7, 'Academy', 'Virtual Address', 2, 90)", connection);


	const query3 = `
		SELECT * FROM school
	`;
	
	const dbresults3 = await mysqlQuery(query3, connection);

	console.log(dbresults3);


	connection.end();

}

myProgram();