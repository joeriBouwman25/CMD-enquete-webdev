
const getIndex = (req, res) => {
  res.render('home')
  }

  const getSurvey = (req, res) => {
    res.render('survey')
  }

const submitted = (req, res) => {
  const answers = req.body
  res.render('submitted', {
    answers: answers
  })
}

  module.exports = {
    getIndex,
    getSurvey,
    submitted
  }
