const express = require('express')
const router = express.Router()
const Category = require('./Category')
const slugify = require('slugify')


router.get('/', async (req, res, next) => {
  try {
    const existe = await Category.findAll();
    res.status(200);
    res.json(existe);
  } catch (erro) {
    next(erro);
  }
}
)

router.post('/create', async (req, res, next) => {
  try {
    const title = req.body.title
    if (title != undefined) {
      const categoria = Category.create({
        title: title,
        //versão do titulo pra url
        slug: slugify(title)
      })
      res.json('Cadastrado com Sucesso back')
    }
  }
  catch (erro) {
    next(erro)
  }})


  router.get('/buscar/:id', async (req, res, next) => {
    try {
      const id = req.params.id
      const category = await Category.findByPk(id)
      res.status(200);
      res.send(category);
    } catch (erro) {
      next(erro);
    }
  })



  module.exports = router