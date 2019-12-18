var express = require('express');
var router = express.Router();
const resursers = require('../models').Resurser;
const faker = require('faker');

/* GET users listing. */
router.get('/', function(req, res, next) {

const by = faker.address.city();
const kategori_navn = faker.name.jobArea();
const beskrivelse = faker.lorem.word();
const adresse = faker.address.streetAddress();
const telefon = faker.random.number();
const aabningstider = faker.lorem.word();
const webside = faker.internet.domainName();

const body = {
  by: by, 
  kategori_navn: kategori_navn,
  beskrivelse: beskrivelse, 
  adresse: adresse,
  telefon: telefon, 
  aabningstider: aabningstider,
  webside: webside
};

console.log(body)


resursers.create(body);

//find the user



//destroy the user with the object, this will call DELETE where id = our_user_id automatically.

  res.send('Dummy data created');
});

module.exports = router;