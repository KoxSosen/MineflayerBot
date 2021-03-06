const mineflayer = require('mineflayer')
const config = require("./config.json");

if (process.argv.length < 3 || process.argv.length > 5) {
  console.log('Usage : node stress.js <host> <port>')
  process.exit(1)
}

let i = 0
function next () {
  if (i < config.amount) {
    i++
    setTimeout(() => {
      createBot(`mineflayer-bot${i}`)
      next()
    }, 100)
  }
}
next()

const createBot = (name) => {
    mineflayer.createBot({
        host: process.argv[2],
        port: parseInt(process.argv[3]),
        username: name
    });

}
