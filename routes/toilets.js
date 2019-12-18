var express = require('express');
var router = express.Router();
var toilets = require('../modules/toilets');

router.get('/', async function(req, res, next) {
    var result = await toilets.loadAll();
  res.json(result);
});
  
  module.exports = router;