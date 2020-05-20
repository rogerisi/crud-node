const response = (req,res,mysqlConnection,query)=>{
	mysqlConnection.query(query,(err,rows) => {
		if (!err)
			res.send({
				"code":200,
				"success":true,
				"body":rows
     	 });
		else
			console.error(err);
	})
}

module.exports = {
	response,
}
