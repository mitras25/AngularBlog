



exports.userCreate = async (req, res, next) => {
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
        password: hash,
        isAdmin: true
      }).then(() => {
        res.json('cadastrado')
      }).catch((erro) => {
        res.send(erro)
      })
    } else {
      res.json('usuário/email ja cadastrado')
    }
  })
}