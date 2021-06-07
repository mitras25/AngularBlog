const User = require('./User')
const bcrypt = require('bcrypt')

exports.userCreate = async (req, res, next) => {
  try {

    let email = req.body.email
    let userName = req.body.userName
    let password = req.body.password

    // Transformando a senha em um hash
    let salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    const user = {
      email: email,
      userName: userName,
      password: hash,
      isAdmin: true

    };
    const existe = await User.findOne({ where: { email: email } });
    if (existe === null) {
      await User.create({
        ...user,
      });
      res.status(200).send();
    } else {
      res.json("Email já cadastrado no sistema.");
    }
  } catch (erro) {
    next(erro);
  }
}



// Busca um usuario pelo login e retorna ele se ele existe
exports.acharUsuario = async (email) => {
  try {
    const usuario = await User.findOne({
      where: { email },
    });
    return usuario.dataValues;
  } catch (erro) {
    return erro;
  }
};