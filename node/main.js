const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended:true }))
 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`));

app.get('/teste',(req,res)=>{
    res.send('Olá mundo!');
})
app.use('/', require('./controller/index.js'));

