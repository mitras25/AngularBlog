// Autenticação
const jwt = require("jsonwebtoken");
const JWTSecret = process.env.JWT_KEY;

// Login
function auth(req, res, next) {
  const authToken = req.headers["authorization"];

  if (authToken != undefined) {
    //pegando somente o token
    const bearer = authToken.split(" ");

    let token = bearer[1];

    //verificando a validade do token
    jwt.verify(token, JWTSecret, (err, data) => {
      if (err) {
        //res.status(401); // não autorizado
        res.json({ err: "Token inválido! auth" });
      } else {
        // Podemos extrair os dados do token aqui
        req.token = token;
        req.usuario = {
          login: data.login,
          userName: data.userName,
          isAdministrador: data.isAdministrador,
        };
        next();
      }
    });
  } else {
    //res.status(401);
    res.json({ err: "Token inválido!" });
  }
}

module.exports = {
  auth,
};
