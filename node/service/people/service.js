const { mysqlConnection } = require('../../database/conn.js');
const { response } = require('../../utils/response.js');

const getPeople    = (req,res) => {
	response(req,res,mysqlConnection,
		`SELECT * FROM DS_PESSOA`)
}
const createPeople = (req,res) => {
	response(req,res,mysqlConnection,
		`INSERT INTO DS_PESSOA VALUES(${req.body.ds_nome_pessoa},${req.body.ds_idade_pessoa},${null})`);
}
const deletePeople = (req,res) => {
	response(req,res,mysqlConnection,
		`DELETE FROM DS_PESSOA WHERE ds_pessoa_id = ${id}`);
}
const updatePeople = (req,res) => {
	response(req,res,mysqlConnection,
		`UPDATE DS_PESSOA SET ds_pessoa_nome= ${req.body.ds_nome_pessoa},ds_pessoa_idade = ${req.body.ds_idade_pessoa} 
			where ds_pessoa_id = ${req.params.id}`);
}

module.exports = { getPeople, createPeople, deletePeople, updatePeople }
