const Sequelize = require('sequelize')
const connection = require('../database/database')
const Category = require("../categories/Category")

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
  }
})

Category.hasMany(Article) // Relacionamento de categoria possui varios artigos


//Usar somente uma vez, para criar a tabela no banco de dados
//Article.sync({force: true})

module.exports = Article