const router = require('express').Router();
const Championnat = require('../models/championnats');
const jsonParser = require('body-parser').json();
const url = require('url');


// Get one /championnats/:id
router.get('/:id', async (req, res) => {
  try {
    let championnat = await Championnat.findOne({ _id: req.params.id });
    res.json(championnat);
  } catch (err) { throw err; }
});


// gett all championnats 
router.get('/', async (req, res) => {
  let pays = req.query.pays
  let name = req.query.name
  let url = req.query.url
  let championnats
  if (pays) {
    championnats = await Championnat.find({ "area.name": pays }, { 'name': 1, '_id': 1, 'url':1 }) // On récupère tout les championnats
  } else if (url) {
    championnats = await Championnat.findOne({ "url": url.toString() }) // On récupère tout les championnats
  }
  else if (name) {
    name = new RegExp(name)
    championnats = await Championnat.findOne({ "name": { $regex: name  , $options: 'i' } }) // On récupère tout les championnats
  } else {
    championnats = await Championnat.find() // On récupère tout les championnats
  }
  await res.json(championnats);
})

module.exports = router;