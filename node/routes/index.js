const router = require('express').Router();

router.use('/people/:id?', require('./people'));

module.exports = router;
