const Router = require('koa-router')
const db = require('../../db/db')
const router = new Router()

router.get('/messages/unread', async (ctx) => {
//   console.log(db.unread);

  console.log('ping')
  ctx.response.body = {
    status: 'OK',
    timestamp: Date.now().toString(),
    messages: db.unread
  }

  db.unread.forEach(unread => db.pointRead(unread))
})

module.exports = router
