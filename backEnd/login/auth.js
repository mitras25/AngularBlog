// Autenticação
const jwt = require("jsonwebtoken");
const JWTSecret = process.env.JWT_KEY;
const bcrypt = require("bcryptjs");

exports.autenticar = async (req, res) => {
  const { useName, password } = req.body;

  if (useName != undefined) {
    // Buscando usuario no banco de dados
    const usuario = await UserService.acharUsuario(useName);
    if (usuario != undefined) {
      // Comparamos a senha com o hash da senha do Banco de dados
      bcrypt
        .compare(password, usuario.password)
        .then((resultado) => {
          // Passando informaçoes que o token vai salvar, e duração de validade do token
          if (resultado) {
            jwt.sign(
              {
                userName: usuario.userName,
                email: usuario.email,
                idUsuario: usuario.id,
              },
              JWTSecret,
              { expiresIn: "12h" },
              (err, token) => {
                if (err) {
                  res.status(400); // requisição invalida
                  res.json({ err: "Falha interna" });
                } else {
                  res.status(200); //sucesso
                  res.json({ token: token });
                }
              }
            );
            // TODO: Arrumar os códigos de erro corretamente
          } else {
            res.status(401); // não autorizado
            res.json({ err: "Credenciais inválidas!" });
          }
        })
        .catch((erro) => {
          res.status(400); // Erro comparando a senha
          res.json({ err: erro });
        });
    } else {
      res.status(404); // não encontrado
      res.json({
        err: "O usuario enviado não existe ou foi desativado na base de dados!",
      });
    }
  } else {
    res.status(400); //requisição invalida
    res.send({ err: "Dados inválidos" });
  }
};
