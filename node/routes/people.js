const router = require('express').Router();
const { getPeople, deletePeople, updatePeople, createPeople } = require('../service/people/service');

router.route('/')
	.get(getPeople)
	.post(createPeople) 
	.put(updatePeople)
	.delete(deletePeople) 

module.exports = router; 

