var express = require('express');
var router = express.Router();
var toilets = require('../modules/toilets');

router.get('/:toilets', function(req, res, next) {
    res.render('toilets', {
        value: toilets.toiletsTimes1(req.params.toilets)
    })
  });
  
  module.exports = router;