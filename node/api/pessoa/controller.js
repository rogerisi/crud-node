const { mysqlConnection } = require('../../database/conn.js');
const { responseJSON } = require('../../utils/functions.js');

const getPessoas = (req,res) => {
		let filter = '';
		filter = ' WHERE ds_pessoa_id=' + parseInt(req.params.id);
		const query = 'SELECT * FROM DS_PESSOA';
		const queryWhere = query + filter;

		responseJSON(req,res,mysqlConnection,query)
}

const insertPessoas = (req,res) => {
		const nome = req.body.ds_nome_pessoa;
    const idade = req.body.ds_idade_pessoa;
		const id =  null;
		const query = `insert into DS_PESSOA values(${nome},${idade},${id})`;

		responseJSON(req,res,mysqlConnection,query);
}

const deletePessoas = (req,res) => {
		const id = req.params.id;
		const query =  `delete from DS_PESSOA where ds_pessoa_id = ${id}`;

		responseJSON(req,res,mysqlConnection,query);
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

		responseJSON(req,res,mysqlConnection,query);
}

module.exports = {
    getPessoas,
		insertPessoas,
		deletePessoas,
		updatePessoas
}
