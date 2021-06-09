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

router.post('/create', (req, res) => {
  const title = req.body.title
  if (title != undefined) {
    Category.create({
      title: title,
      //versão do titulo pra url
      slug: slugify(title)
    }).then(() => {
      res.json('Cadastrado com Sucesso back')
    })
  } else {
    res.json('Categoria Inválida')
  }
})

router.delete('/delete', (req, res) => {
  const id = req.body.id
  if (id != undefined) {
    if (!isNaN(id)) {
      Category.destroy({
        where: { id: id }
      }).then(() => {
        res.send('Deletado com sucesso')
        res.redirect('/admin/categories')
      })
    } else { //se não for número
      res.redirect('/admin/categories')
    }
  } else {// se for nulo ou indefinido
    res.redirect('/admin/categories')
  }
})

router.get('/buscar/:id',async (req, res, next)=>{
  try {
  const id = req.params.id
  const category = await Category.findByPk(id)
    res.status(200);
    res.send(category);
  } catch (erro) {
    next(erro);
  }
})


router.put('/update', (req, res) => {
  const id = req.body.id
  const title = req.body.title

  Category.update({ title: title, slug: slugify(title) }, {
    where: {
      id: id
    }
  }).then(() => {
    res.send('Atualizado com sucesso')
  }).catch(erro => {
    res.send(erro)
  })
})



module.exports = router