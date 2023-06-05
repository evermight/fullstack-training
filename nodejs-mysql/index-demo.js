var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '!!HomeWork!!0',
  database : 'world'
});
 
connection.connect();
 
connection.query('SELECT * FROM country', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].Name);
});
 
connection.end();
