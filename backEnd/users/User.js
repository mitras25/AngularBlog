const Sequelize = require("sequelize")
const connection = require('../database/database')


const User = connection.define('user', {
  email:{
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

//criando tabela caso não exista
User.sync({force: false})

module.exports = User