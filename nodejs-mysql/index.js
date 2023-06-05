let mysql      = require('mysql');

async function myProgram() {
	let connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '!!HomeWork!!0',
	  database : 'world'
	});
	 
	connection.connect();
	const dbresults = await new Promise((res,rej)=>{
		connection.query('SELECT * FROM country', function (error, results, fields) {
		  if (error) rej(error);
		  else res(results);
		});
	});
	console.log("try");
	console.log(dbresults[0].Name);
	console.log("again");
	connection.end();

}

myProgram();