const db = require('./models')

db.sync({force: true})
  .then(() => {
    console.log('Database synced!')
  })
  .catch(err => {
    console.log('U DONE FUCKED UP NOW! ')
    console.log(err)
  })
  .finally(() => {
    db.close();
  })

