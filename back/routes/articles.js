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
  let championnat = req.query.championnat
  let articles;
  try {
    if (championnat) {
      articles = await Article.find({ "championnat.id": championnat }) // On récupère tout les articles par championnats
    } else {
      articles = await Article.find() // On récupère tout les articles
    }
    res.json(articles)
  } catch (err) { throw err; }
})

module.exports = router;