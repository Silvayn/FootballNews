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
  let championnats
  if (pays) {
    championnats = await Championnat.find({ "area.name": pays }, { 'name':1, '_id':1 }) // On récupère tout les championnats
  } else {
    championnats = await Championnat.find() // On récupère tout les championnats
  }
  await res.json(championnats);
})

module.exports = router;