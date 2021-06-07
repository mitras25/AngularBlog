const express = require('express')
const router = express.Router()
const User = require('./User')
const bcrypt = require('bcrypt')
const Usuarios = require('./UserService')

router.get('/', async (req, res, next) => {
  try {
    const existe = await User.findAll();
    res.status(200);
    res.json(existe);
  } catch (erro) {
    next(erro);
  }
})

router.post('/create', Usuarios.userCreate )

module.exports = router