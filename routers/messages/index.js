const Router = require('koa-router')
const db = require('../../db/db')
const router = new Router()

router.get('/messages/unread', async (ctx) => {
//   console.log(db.unread);
  const broken = Math.random()
  if (broken < 0.2) {
    ctx.response.status = 500
    return
  }
  console.log('ping')
  ctx.response.body = {
    status: 'OK',
    timestamp: Date.now().toString(),
    messages: db.unread
  }

  db.unread.forEach(unread => db.pointRead(unread))
})

module.exports = router
