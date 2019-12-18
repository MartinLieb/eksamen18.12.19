var express = require('express');
var router = express.Router();
var toilets = require('../modules/toilets');

router.get('/', function(req, res, next) {
    res.render('toilets', {
    })
  });
  
  module.exports = router;