const router = require('express').Router();
const Article = require('../models/article');
const jsonParser = require('body-parser').json();
const url = require('url')


// Get one /articles/:id
router.get('/:id', async (req, res) => {
  try {
    let article = await Article.findOne({ _id: req.params.id });
    res.json(article);
  } catch (err) { throw err; }
});


// gett all articles 
router.get('/', async (req, res) => {
  let championnat = req.query.championnat;
  let club = req.query.club;
  let articles;
  try {
    if (championnat) {
      articles = await Article.find({ "championnat.id": Number(championnat) }).sort({dateCreation:-1}); // On récupère tout les articles par championnats
    } else if (club) {
      articles = await Article.find({ "teams.id": club }).sort({dateCreation:-1}); // On récupère tout les articles par clubs
    } else {
      articles = await Article.find().sort({x:-1}).sort({dateCreation:-1}).limit(10); // On récupère tout les articles
    }
    res.json(articles)
  } catch (err) { throw err; }
})

module.exports = router;