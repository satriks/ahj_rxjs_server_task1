const db = require('../db/db')
const createRandomUser = require('./generator')

const createMessage = () => {
  setInterval(() => {
    db.addNewMessage(createRandomUser())
    console.log('çreate')
  }, 1000 * 10)
}

module.exports = createMessage
