const { mysqlConnection } = require('./conn.js');

const getPessoas = (req,res) => {
		let filter = '';
		filter = ' WHERE ds_pessoa_id=' + parseInt(req.params.id);
		const query = 'SELECT * FROM DS_PESSOA';
		const queryWhere = query + filter;

		mysqlConnection.query(req.params.id ? queryWhere : query, (err, rows, fields) => {
			if (!err)
				res.send(rows);
			else
				console.log(err);
	})
}

const insertPessoas = (req,res) => {
		const nome = req.body.ds_nome_pessoa;
    const idade = req.body.ds_idade_pessoa;
		const id =  null;
		const query = `insert into DS_PESSOA values(${nome},${idade},${id})`;

		mysqlConnection.query(query, (err, rows, fields) => {
			if (!err)
				res.send(rows);
			else
				console.log(err);
	})
}

const deletePessoas = (req,res) => {
		const id = req.params.id;
		const query =  `delete from DS_PESSOA where ds_pessoa_id = ${id}`;

		mysqlConnection.query(query, (err, rows, fields) => {
			if (!err)
				res.send(rows);
			else
				console.log(err);
	})
}

const updatePessoas = (req,res) => {
		const id = req.params.id;
		const nome  = req.body.ds_nome_pessoa;
		const idade = req.body.ds_idade_pessoa;

		const query = `update DS_PESSOA
		 	set ds_pessoa_nome = ${nome},
			ds_pessoa_idade = ${idade}
			where ds_pessoa_id = ${id}
		`;

		mysqlConnection.query(query, (err, rows, fields) => {
			if (!err)
				res.send(rows);
			else
				console.log(err);
	})
}

module.exports = {
    getPessoas,
		insertPessoas,
		deletePessoas,
		updatePessoas
}
