const express = require("express");
const router = express.Router();
const auth = require("./auth");

router.get("/", (req, res) => {
  res.json({
    message: "Funcionando",
  });
});

// Autenticação
router.post("/auth", auth.autenticar);

module.exports = router;
