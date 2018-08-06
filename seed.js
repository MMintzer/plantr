const {
  db,
  Vegetable,
  Gardener,
  Plot
} = require('./models')
const Sequelize = require('sequelize')
// const potato = Vegetable.create()

db.sync({
    // force: true
  })
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

const carrot = Vegetable.create({
  name: 'carrot',
  color: 'orange',
  planted_on: Date.now()
})

const tomato = Vegetable.create({
  name: 'tomato',
  color: 'red',
  planted_on: Date.now()
})

const joe = Gardener.create({
  name: 'Joe',
  age: 30
})

const jack = Gardener.create({
  name: 'Jack',
  age: 35
})
