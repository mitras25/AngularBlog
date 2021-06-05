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

//Usar somente uma vez, para criar a tabela no banco de dados
//Category.sync({force: true})

module.exports = Category