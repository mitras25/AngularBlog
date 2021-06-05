const express = require('express')
const { default: slugify } = require('slugify')
const Article = require('./Article')
const router = express.Router()
const Category = require('../categories/Category')

// listando todos os artigos
router.get('/admin/articles', async (req, res, next) => {
  try {
    const existe = await Article.findAll();
    res.status(200);
    res.json(existe);
  } catch (erro) {
    next(erro);
  }
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

router.delete('/admin/articles/delete', (req, res) => {
  const id = req.body.id
  if (id != undefined) {
    if (!isNaN(id)) {
      Article.destroy({
        where: { id: id }
      }).then(() => {
        res.send('Deletado com sucesso')
        res.redirect('/admin/articles')
      })
    } else { //se não for número
      res.redirect('/admin/articles')
    }
  } else {// se for nulo ou indefinido
    res.redirect('/admin/articles')
  }
})


module.exports = router