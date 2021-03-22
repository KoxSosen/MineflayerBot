const mineflayer = require('mineflayer');
const config = require("./config.json");


if (process.argv.length < 3 || process.argv.length > config.amount) {
    console.log('Usage : node multiple.js <host> <port>')
    process.exit(1)
  }

bot.once('spawn', () => {
    bot.chat(config.loginchat)
  })

  bot.chatAddPattern(
    /(move|move|move)/,
    'move',
    'move'
  )

const move2 =  () => {
    bot.setControlState('forward', true)
  }

  bot.on('hello', move2)

  let i = 0
function next () {
  if (i < 10) {
    i++
    setTimeout(() => {
      createBot(`stressbot-${i}`)
      next()
    }, 100)
  }
}
next()

function createBot (name) {
  mineflayer.createBot({
    host: process.argv[2],
    port: parseInt(process.argv[3]),
    username: name
  })
}