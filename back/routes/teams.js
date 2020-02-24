const router = require('express').Router();
const Team = require('../models/teams');
const jsonParser = require('body-parser').json();
const url = require('url');


// Get one /teams/:id
router.get('/:id', async (req, res) => {
  try {
    let article = await Article.findOne({ _id: req.params.id });
    res.json(article);
  } catch (err) { throw err; }
});


// gett all teams 
router.get('/', async (req, res) => {
  let t = req.query.team;
  let teams;
  try {
    if (t) {
      teams = await Team.find({ "competition.id": t }) // On récupère tout les articles par teams
    } else {
      teams = await Team.find() // On récupère tout les teams
    }
    res.json(teams);
  } catch (err) { throw err; }
})

module.exports = router;