const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'PESSOA',
	multipleStatements: true
})

module.exports = {
  mysqlConnection,
}
