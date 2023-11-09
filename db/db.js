const db = {

  read: [],
  unread: [],

  pointRead (message) {
    this.unread = this.unread.filter(item => item.id !== message.id)
    this.read.push(message)
  },
  addNewMessage (message) {
    this.unread.push(message)
  }

}

module.exports = db
