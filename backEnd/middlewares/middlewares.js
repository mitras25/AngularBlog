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
    res.json({ err: "Token inválido! auth1" });
  }
}


// Erros
function caminhoInvalido(req, res, next) {
  const erro = new Error(`Caminho não encontrado - ${req.url}`);
  res.status(404);
  next(erro);
}

function mostraErros(erro, req, res, next) {
  // Caso o cód já tenha sido setado para 200 mas aconteceu um erro, seta para 500
  // caso contrário continua usando o cód anterior
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: erro.message,
    // Mostra os detalhes do erro apenas em produção
    stack: process.env.NODE_ENV === "producao" ? ":(" : erro.stack,
  });
}

module.exports = {
  caminhoInvalido,
  mostraErros,
  auth,
};
