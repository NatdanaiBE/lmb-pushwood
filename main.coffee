console.log require('./pushwood-lib/publish')
  text: 'Bravo'
  conditions: [
    ['Group', 'EQ', 'Bravo']
  ]
  error: (err) -> console.log 'err', err
  callback: (data) -> console.log 'callback', data