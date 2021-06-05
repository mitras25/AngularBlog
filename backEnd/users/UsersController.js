const express = require('express')
const router = express.Router()
const User = require('./User')

router.get('/admin/users', (req, res)=>{
  //const usuarios = user.findAll()
  res.send('usuarios')
})

router.post('/users/create', (req,res)=>{
  const email = req.body.email
  const userName = req.body.userName
  const password = req. body.passaword

  res.send('Cadastrado')

})

module.exports = router