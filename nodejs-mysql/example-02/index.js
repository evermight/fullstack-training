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

	connection.end();

}

myProgram();