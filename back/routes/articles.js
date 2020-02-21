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
    const articles = await Article.find() // On récupère tout les articles
    await res.json(articles)
})

 // gett all articles by championnats
 router.get('/championnats/:id', async (req, res) => {
  const articles = await Article.find({"championnat.id": req.params.id}) // On récupère tout les articles par championnats
  await res.json(articles)
})

  module.exports = router;