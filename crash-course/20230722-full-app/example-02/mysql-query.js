async function query(q, connection) {
	const dbresults = await new Promise((res,rej)=>{
		connection.query(q, function (error, results, fields) {
		  if (error) rej(error);
		  else res(results);
		});
	});
	return dbresults;
}

module.exports = query;