let mysql      = require('mysql');

async function myProgram() {
	let connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '!!HomeWork!!0',
	  database : 'myprogram'
	});
	 
	connection.connect();
	const dbresults = await new Promise((res,rej)=>{
		
		const query = `
		
SELECT * FROM student_school_course
INNER JOIN student ON student_school_course.student_id = student.student_id
INNER JOIN course ON student_school_course.course_id = course.course_id
INNER JOIN school ON student_school_course.school_id = school.school_id
WHERE student.dob > 1970;
		`;
		connection.query(query, function (error, results, fields) {
		  if (error) rej(error);
		  else res(results);
		});
	});

	for(let x=0; x<dbresults.length; x++) {
		/*
		console.log(dbresults[x].student_id);
		console.log(dbresults[x].student_name);
		console.log(dbresults[x].dob);
		*/
		console.log(dbresults[x]);
		console.log("---------------");
	}
	connection.end();

}

myProgram();