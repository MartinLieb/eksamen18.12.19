var express = require('express');
var router = express.Router();
const resursers = require('../models').Resurser;

/* GET home page. */
router.get('/', async function(req, res, next) {
    var result = await resursers.findAll();
  res.json(result);
});

module.exports = router;