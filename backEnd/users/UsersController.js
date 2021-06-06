const express = require('express')
const router = express.Router()
const User = require('./User')
const bcrypt = require('bcrypt')

router.get('/users', async (req, res, next) => {
  try {
    const existe = await User.findAll();
    res.status(200);
    res.json(existe);
  } catch (erro) {
    next(erro);
  }
})

router.post('/users/create', (req, res) => {
  const email = req.body.email
  const userName = req.body.userName
  const password = req.body.password

  //verificando se email e usuario ja existe
  User.findOne({
    where: { email: email, userName: userName }
  }).then(user => {
    if (user == undefined) {
      //criptografando senha
      let salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(password, salt)

      User.create({
        userName: userName,
        email: email,
        password: hash
      }).then(() => {
        res.send('Cadastrado')
      }).catch((erro) => {
        res.send(erro)
      })
    } else {
      res.send('usuário/email ja cadastrado')
    }
  })
})

module.exports = router