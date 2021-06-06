const Sequelize = require('sequelize')
const connection = require('../database/database')

const Category = connection.define('categories', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // versao de uma rota, apelido
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

//criando tabela caso não exista
//Category.sync({force: false})

module.exports = Category