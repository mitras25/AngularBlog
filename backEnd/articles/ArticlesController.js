const express = require('express')
const { default: slugify } = require('slugify')
const Article = require('./Article')
const router = express.Router()
const Category = require('../categories/Category')
const User = require('../users/User')

// listando todos os artigos
router.get('/', async (req, res, next) => {
  try {
    const existe = await Article.findAll({
      //ordenando pelo mais recente
      order:[['id', 'DESC']]
    });
    res.status(200);
    res.json(existe);
  } catch (erro) {
    next(erro);
  }
})

router.post("/create/:id", (req, res)=>{
  const title = req.body.title
  const body = req.body.body
  const idCategory = req.body.idCategory
  const idUsuario = req.params.id


  Article.create({
    title: title,
    slug: slugify(title),
    body: body,
    categoryId: idCategory,
    userId: idUsuario

  }).then(()=>{
    res.send('Cadastrado')
  }).catch(erro=>{
    res.send(erro)
  })
})

router.delete('/delete/:id', (req, res) => {
  const id = req.params.id
  if (id != undefined) {
    if (!isNaN(id)) {
      Article.destroy({
        where: { id: id }
      }).then(() => {
        res.send('Deletado com sucesso')
        res.redirect('/articles')
      })
    } else { //se não for número
      res.redirect('/articles')
    }
  } else {// se for nulo ou indefinido
    res.redirect('/articles')
  }
})

//editar artigo
router.get('/edit/:id', (req, res)=>{
  const id = req.params.id
  Article.findByPk(id)
  .then(article => {
    if(article != undefined){
      Category.findAll()
      .then(categories=>{
        res.send(categories)
      })
    }else{
      res.send('Item invalido')
    }
  }).catch((erro)=>{
    res.send(erro)
  })
})

//buscar artigo por id
router.get('/buscar/:id', (req, res)=>{
  const id = req.params.id
  Article.findByPk(id, {include: [Category, User]})
    .then(articles=>{
        res.send(articles)
  }).catch((erro)=>{
    res.send(erro)
  })
})


router.put('/update', (req, res) => {
  const id = req.body.id
  const title = req.body.title
  const body = req.body.body
  const category = req.body.categoryId
  console.log(req.body)


  Article.update({
     title: title, 
     slug: slugify(title),
     body: body,
     categoryId: category
    }, {
    where: { id: id}
  }).then(() => {
  res.send('Atualizado com sucesso')
}).catch(erro => {
  res.send(erro)
})
})

module.exports = router