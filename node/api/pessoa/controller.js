const app = require('../../server'); 

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:true }))

const { getPeople, deletePeople, updatePeople, createPeople } = require('./api/pessoa/service.js');

app.route('/people/:id?')
	.get(getPeople)
	.delete(deletePeople)
	.put(updatePeople) 
	.post(createPeople) 