/* eslint-disable no-unused-vars */
require('dotenv').config()

// import dependecies
const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
const router = require('./src/routes/router')
// const translate = require('translate')


// translate.engine = 'deepl'
// translate.key = process.env.DEEPL_KEY
// translate.from = 'nl'


const app = express()

const port = process.env.PORT || 3000


// set view engine
app
  .set('view engine', 'hbs')
  .set('views', 'views')
  .engine('hbs', handlebars({ extname: 'hbs' }))

  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(express.static('public'))
  .use(router)

  .listen(port, () => {
    console.log(`Server running on port ${port}🎉`)
  })


// translate('ik schijt in je beker met melk', "es")
// .then(test => console.log(test))


