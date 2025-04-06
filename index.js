const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'GGBOIZZ.aternos.me',
    port: 58079,
    username: 'Tenz'  // Use a name not already taken on the server
  });

  bot.on('login', () => console.log('Bot logged in!'));
  
  bot.on('end', () => {
    console.log('Bot disconnected. Reconnecting...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', err => console.log('Error:', err));
}

createBot();