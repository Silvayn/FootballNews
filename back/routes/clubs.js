const router = require('express').Router();
const Club = require('../models/clubs');
const jsonParser = require('body-parser').json();
const url = require('url');


// Get one /clubs/:id
/* router.get('/:id', async (req, res) => {
  try {
    let article = await Club.findOne({ _id: req.params.id });
    res.json(article);
  } catch (err) { throw err; }
}); */


// gett all clubs 
router.get('/', async (req, res) => {
  let c = req.query.club;
  /* let c = req.params.club; */
  let clubs;
  try {
    let regex = /-/gi;
    let result = c.replace(regex, ' ').toLowerCase();
    let r = new RegExp(result, 'iu');
    clubs = await Club.findOne({ name: r }) // On récupère tout les articles par clubs
    res.json(clubs);
  } catch (err) { throw err; }
});

module.exports = router;