const express = require('express')
const app = express()
const cors = require('cors')
const connection = require('./database/database.js')

//autorizando acesso a todos
app.use(cors());

//importando rotas
const login = require("./login/loginRoutes")
const categoriesController = require('./categories/CategoriesController')
const articlesController = require('./articles/ArticlesController')
const usersController = require('./users/UsersController')

//importando models
const Article = require('./articles/Article')
const Category = require('./categories/Category')
const User = require('./users/User')


app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//database
connection
  .authenticate()
  .then(() => {
    console.log('conexão sucesso')
  }).catch((error) => {
    console.log(error)
  })

//definindo rotas
app.use('/', login)
app.use('/categories', categoriesController)
app.use('/articles', articlesController)
app.use('/users', usersController)


app.get('/', (req, res) => {
  res.send('hello world')
})


app.listen(8080, () => {
  console.log('servidor rodando na porta 8080')
})