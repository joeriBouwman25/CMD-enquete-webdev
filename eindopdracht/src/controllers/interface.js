const getIndex = (req, res) => {
    res.render('home')
  }

  const getSurvey = (req, res) => {
    res.render('survey')
  }

const submitted = (req, res) => {
  const answers = req.body
  console.log(req.body)
  res.render('submitted', {
    name: answers.name,
    studentNumber: answers.studentnummer

  })
}

  module.exports = {
    getIndex,
    getSurvey,
    submitted
  }

  // name: 'joeri bouwman',
  // studentnummer: '500760289',
  // 'wafs-weken': [ '1', '3' ],
  // 'wafs-cijfer': '0',
  // 'wafs-lesstof': 'makkelijk',
  // 'wafs-uitleg': 'makkelijk',
  // reden: [ 'sorigj', 'hoe cool is dat', 'petah', 'posla' ],
  // 'css-docent': '0',
  // 'css-weken': [ '1', '3' ],
  // 'css-cijfer': '0',
  // 'css-lesstof': 'makkelijk',
  // 'css-uitleg': 'makkelijk',
  // 'wafs-docent': '0',
  // 'bt-weken': [ '5', '8' ],
  // 'bt-cijfer': '0',
  // 'bt-lesstof': 'makkelijk',
  // 'bt-uitleg': 'makkelijk',
  // 'pwa-docent': '0',
  // 'pwa-weken': [ '5', '8' ],
  // 'pwa-cijfer': '0',
  // 'pwa-lesstof': 'makkelijk',
  // 'pwa-uitleg': 'makkelijk'