const express = require('express')
const router = express.Router()
const User = require('./User')
const bcrypt = require('bcrypt')

router.get('/admin/users', (req, res) => {
  //const usuarios = user.findAll()
  res.send('usuarios')
})

router.post('/users/create', (req, res) => {
  const email = req.body.email
  const userName = req.body.userName
  const password = req.body.password


  //criptografando senha
  let salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)

  User.create({
    userName: userName,
    email: email,
    password: hash
  }).then(()=>{
    res.send('Cadastrado')
  }).catch((erro)=>{
    res.send(erro)
  }) 

})

module.exports = router