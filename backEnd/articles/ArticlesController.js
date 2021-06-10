const express = require('express')
const { default: slugify } = require('slugify')
const Article = require('./ArticleModel')
const router = express.Router()
const Category = require('../categories/Category')
const User = require('../users/User')

// listando todos os artigos
router.get('/', async (req, res, next) => {
  try {
    const existe = await Article.findAll({
      //ordenando pelo mais recente
      order: [['id', 'DESC']]
    }, { include: {} });
    res.json(existe);
  } catch (erro) {
    next(erro);
  }
})


// listando todos os artigos
router.get('/articleAutor/:id', async (req, res, next) => {
  try {
    const userId = req.params.id
    const existe = await Article.findAll({ where: { userId: userId } });
    res.json(existe);
  } catch (erro) {
    next(erro);
  }
})

//buscar artigo por id
router.get('/buscar/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const article = await Article.findByPk(id)
    res.status(200);
    res.send(article);
  } catch (erro) {
    next(erro);
  }
})


router.post("/create/:id", async (req, res, next) => {
  try {
    const title = req.body.title
    const body = req.body.body
    const categoryId = req.body.categoryId
    const userId = req.params.id

    const article = await Article.create({
      title: title,
      slug: slugify(title),
      body: body,
      categoryId: categoryId,
      userId: userId

    })
    res.json(article)
  } catch (erro) {
    next(erro)
  }
})

router.delete('/delete/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    if (id != undefined) {
      if (!isNaN(id)) {
        const deletar = await Article.destroy({ where: { id: id } })
        res.json("deletado")
      } else { //se não for número
        res.send(erro)
      }
    } else {// se for nulo ou indefinido
      res.send(erro)
    }
  } catch (erro) {
    next(erro)
  }
})


router.put('/update/:id', (req, res, next) => {
  const id = req.params.id
  const title = req.body.title
  const body = req.body.body
  const category = req.body.categoryId
  const userId = req.body.userId
  try {
    const article = Article.update({
      title: title,
      slug: slugify(title),
      body: body,
      categoryId: category,
      userId: userId
    }, { where: { id: id } })

    res.json('Atualizado com sucesso')

  } catch (erro) {
    next(erro)
  }
})

module.exports = router