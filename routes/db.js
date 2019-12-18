var express = require('express');
var router = express.Router();
const resurser = require('../models').Resurser;

/* GET home page. */
router.get('/', async function(req, res, next) {
    

    // koble på db
    // sende en query
    // modtage et objekt
    // vise objektet i templaten
    res.render("ResurserTilHjemlose", {
        title: "db",
        resursers: await resurser.findAll()
    });
});

module.exports = router;