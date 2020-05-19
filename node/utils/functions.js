const responseJSON = (req,res,mysqlConnection,querySQL)=>{
	mysqlConnection.query(querySQL,(err,rows,fields) => {
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
  responseJSON,
}
