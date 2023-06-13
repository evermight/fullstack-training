let mysql      = require('mysql');
let mysqlQuery = require('./mysql-query.js');

let express = require('express');
let app = express();
let port = 3030;

app.get('/show-students.html', async (req, res) => {
	let connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '!!HomeWork!!0',
	  database : 'myprogram'
	});
	 
	connection.connect();
	let query = `
		SELECT * FROM student_school_course
		INNER JOIN student ON student_school_course.student_id = student.student_id
		INNER JOIN course ON student_school_course.course_id = course.course_id
		INNER JOIN school ON student_school_course.school_id = school.school_id
		WHERE student.dob > 1970;
	`;
	
	let dbresults = await mysqlQuery(query, connection);

	console.log(dbresults);
	
	res.send(dbresults);

	connection.end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});