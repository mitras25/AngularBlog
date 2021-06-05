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

router.post('/admin/categories/save', (req, res) => {
  const title = req.body.title
  if(title != undefined){
    Category.create({
      title: title,
      //versão do titulo pra url
      slug: slugify(title)
    }).then(()=>{
      res.redirect('/')
    })
  }else{
    res.redirect('/categories')
  }
})

router.delete('/admin/categories/delete', (req, res)=>{
  const id = req.body.id
  if(id != undefined){
    if(!isNaN(id)){
      Category.destroy({
        where: {id: id}
      }).then(()=>{
        res.send('Deletado com sucesso')
        res.redirect('/admin/categories')
      })
    }else{ //se não for número
      res.redirect('/admin/categories')
    }
  }else{// se for nulo ou indefinido
    res.redirect('/admin/categories')
  }
})


module.exports = router