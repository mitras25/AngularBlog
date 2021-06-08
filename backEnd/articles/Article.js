const Sequelize = require('sequelize')
const connection = require('../database/database')
const Category = require("../categories/Category")
const User = require("../users/User")

const Article = connection.define('articles', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // versao de uma rota, apelido
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  
})

Category.hasMany(Article) // Relacionamento de categoria possui varios artigos
User.hasMany(Article)// Relacionamento de usuarios possui varios artigos


//criando tabela caso nao exista
Article.sync({force: false})

module.exports = Article