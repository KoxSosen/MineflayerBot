const mineflayer = require('mineflayer');
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
        mineflayer.createBot(`stressbot-${i}`)
        next()
      }, 100)
    }
  }
  next()
 
  const bot = (name) => {
    mineflayer.createBot({
      host: process.argv[2],
      port: parseInt(process.argv[3]),
      username: name
}
    
    )  

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
    
      bot.on('move', move2)



  }


