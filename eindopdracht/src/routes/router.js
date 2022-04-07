const express = require('express')


const ui = require('../controllers/interface')

const router = express.Router()

router
  .get('/', ui.getIndex)
  .post('/', ui.getSurvey)
  .post('/survey', ui.submitted)
  



module.exports = router