let mysql      = require('mysql');
let mysqlQuery = require('./mysql-query.js');

let express = require('express');
let app = express();
let port = 3030;
let cnx = {
	  host     : 'localhost',
	  user     : 'root',
	  password : '!!HomeWork!!0',
	  database : 'myprogram'
	};

let htmlHeader = `<!DOCTYPE html>
	<html>
	<head>
	<style>
	body {background: yellow; font-family: arial;}
	p {color: grey;}
	</style>
	</head>
	<body>`;
	
let htmlFooter = `</body></html>`;

app.get('/save-student-info', async(req, res) => {
	
	let connection = mysql.createConnection(cnx);
	 
	connection.connect();
	let query = "INSERT INTO student (student_id, student_name, dob) VALUES ('" + req.query.student_id + "', '" + req.query.student_name + "', '" + req.query.dob + "')";
    let dbresults = await mysqlQuery(query, connection);
	
	connection.end();
	
	let htmlContent = htmlHeader + `

		
		<h1>SUCCESS!</h1>
		<a href="/show-students.html">Back to student list</a>

	` + htmlFooter;
	res.send(htmlContent);
});

app.get('/add-student', async (req, res) => {
	
	let htmlContent = htmlHeader + `
		<a href="/show-students.html">Back to student list</a>
		<form action="/save-student-info">
			<label>Student Id</label>
			<input type="text" name="student_id" value=""/>
			<br/>
			<label>Student Name</label>
			<input type="text" name="student_name" value=""/>
			<br/>
			<label>Date of Birth</label>
			<input type="text" name="dob" value=""/>
			<br/>			
			<button type="submit">Save</button>
		</form>
	` + htmlFooter;
	res.send(htmlContent);
	
});
app.get('/show-students.html', async (req, res) => {
	let connection = mysql.createConnection(cnx);
	 
	connection.connect();
	let query = `
		SELECT * FROM student;
	`;
	
	let dbresults = await mysqlQuery(query, connection);

	// console.log(dbresults);
	let htmlContent = htmlHeader + `
			<a href="/add-student">Add student</a>
	`;
	for(let c=0; c<dbresults.length; c++){
		htmlContent = htmlContent + '<p>' + dbresults[c].student_name + ' ' + dbresults[c].dob +
		'</p>';
	}
	htmlContent = htmlContent + htmlFooter;
	res.send(htmlContent);

	connection.end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});