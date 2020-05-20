const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'PESSOA',
	multipleStatements: true
})

mysqlConnection.connect((err)=> {
	err? console.error('falha ao conectar.',err.message) : console.log('conectado com sucesso!'); 
})

module.exports = {
  mysqlConnection,
}
