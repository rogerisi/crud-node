var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const mysql = require('mysql');
const { getPessoas, insertPessoas, deletePessoas, updatePessoas } = require('./controller.js');

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({ extended:true }))

app.get('/getPessoas/:id?',getPessoas);
app.post('/insertPessoas',insertPessoas);
app.delete('/deletePessoas/:id?',deletePessoas);
app.put('/updatePessoas/:id?',updatePessoas);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
