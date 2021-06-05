const express = require('express')
const router = express.Router()


router.get('/articles', (req, res) => {
  res.send('rotas de artigos')
})

router.get('/admin/articles/new', (req, res) => {
  res.send('criou novo artigo')
})


module.exports = router