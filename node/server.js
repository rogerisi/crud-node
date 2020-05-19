var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended:true }))
 
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));

app.use('/', require('./routes/index.js'));

