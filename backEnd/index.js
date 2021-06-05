const express = require('express')
const app = express()
const connection = require('./database/database.js')

//importando rotas
const categoriesController = require('./categories/CategoriesController')
const articlesController = require('./articles/ArticlesContorller')

//importando models
const Article = require('./articles/Article')
const Category = require('./categories/Category')


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
app.use('/', categoriesController)
app.use('/', articlesController)


app.get('/', (req, res) => {
  res.send('hello world')
})


app.listen(8080, () => {
  console.log('servidor rodando na porta 8080')
})