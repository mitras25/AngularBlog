const express = require('express')
const router = express.Router()
const Category = require('./Category')
const slugify = require('slugify')


router.get('/categories', async (req, res, next) => {
  try {
    const existe = await Category.findAll();
    res.status(200);
    res.json(existe);
  } catch (erro) {
    next(erro);
  }
}
)

router.post('/categories/create', (req, res) => {
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

router.delete('/admin/categories/delete', (req, res) => {
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

router.get('/admin/categories/edit/:id', (req, res) => {
  const id = req.params.id
  if (isNaN(id)) {
    res.redirect('/admin/categories')
  }

  Category.findByPk(id).then(category => {
    if (category != undefined) {
      res.send("achou")
    } else {
      res.redirect('/admin/categories')
    }
  }).catch(erro => {
    res.redirect('/admin/categories')
  })
})


router.put('/admin/categories/update', (req, res) => {
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