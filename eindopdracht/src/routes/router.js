const express = require('express')
// const data = require('../controllers/data')
const ui = require('../controllers/interface')

const router = express.Router()

router
  .get('/', ui.getIndex)
  .post('/', ui.submitted)



module.exports = router