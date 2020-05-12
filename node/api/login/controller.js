const { mysqlConnection } = require('../../database/conn.js');
const { responseJSON } = require('../../utils/functions.js');

const loginUser    = (req,res) => {
    const user     =   req.params.user;
    const password =   req.params.password
    const cpf      =   req.params.cpf

    mysqlConnection.query('SELECT * FROM LOGIN WHERE ds_user = ? and ds_password = ? and cpf = ?',[user,password,cpf],(error,results,fields)=>{
    res.send(results);
    })
}

const createUserlogin = (req,res) => {
    const user = req.body.ds_user;
    const password = req.body.ds_password;
    const cpf =  req.body.cpf;
    const query = `insert into LOGIN values(${user},${password},${cpf})`;
    responseJSON(req,res,mysqlConnection,query);
}

module.exports = {
  createUserlogin,
  loginUser
}
