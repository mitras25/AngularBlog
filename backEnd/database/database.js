
const Sequelize = require('sequelize')

const connection = new Sequelize('blog', 'root', 'meusql2021', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = connection