var express = require('express');
var router = express.Router();
const resursers = require('../models').Resurser;

/* post new resource. */
router.post('/resursers', function(req, res, next) {
  console.log(req['body'])
  resursers.create(req['body'])
  res.send("Data indsat");
});

/* update existing resource. */
router.put('/resursers/:id', function(req, res, next) {
    resursers.update(
    req.body,
    {where:{id:req.params.id}});
  res.send("Data ændret");
});

/* delete resource. */
router.delete('/resursers/:id', function(req, res, next) {
    resursers.destroy(
    {returning:true, where:{id:req.params.id}});
  res.send("Data slettet");
});

/* GET all resource. */
router.get('/resursers', async function(req, res, next) {
  var result = await resursers.findAll();
res.json(result);
});

/* GET resource by ID. */
router.get('/resursers/:id', async function(req, res, next) {
  var result = await resursers.findByPk(req.params.id);
res.json(result);
});

module.exports = router;