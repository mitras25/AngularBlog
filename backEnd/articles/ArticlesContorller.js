const express = require('express')
const { default: slugify } = require('slugify')
const Article = require('./Article')
const router = express.Router()
const Category = require('../categories/Category')

// listando todos os artigos
router.get('/admin/articles', (req, res) => {
  Article.findAll()
  .then(articles =>{
    res.send('lista de artigos')
  })
})

//buscando as Categorias para colocar no select
router.get('/admin/articles/new', (req, res) => {
  Category.findAll({
    //incluindo as categorias na lista
    include: [{model: Category}]
  })
    .then(categories => {
      res.send('criou novo artigo')
    }).catch(erro => {
      send(erro)
    })
})

router.post("/admin/articles/save", (req, res)=>{
  const title = req.body.title
  const body = req.body.body
  const category = req.body.category


  Article.create({
    title: title,
    slug: slugify(title),
    body: body,
    categoryId: category
  }).then(()=>{
    res.send('Cadastrado')
  }).catch(erro=>{
    res.send(erro)
  })
})


module.exports = router