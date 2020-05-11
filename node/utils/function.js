function execQuery(req,res,mysqlConnection,querySQL){
	mysqlConnection.query(querySQL,(err,rows,fields) => {
		if (!err)
			res.send(rows);
		else
			console.log(err);
	})
}

module.exports = {
  execQuery,
}
