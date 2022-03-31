const express = require('express')
// const data = require('../controllers/data')
const ui = require('../controllers/interface')

const router = express.Router()

router
  .get('/', ui.getIndex)



module.exports = router