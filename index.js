const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`Бот запущен как ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content === '!ping') {
    message.reply('🏓 Pong!');
  }

  if (message.content === '!arena') {
    message.reply('🔥 ARENA FACEIT работает!');
  }
});

console.log("TOKEN:", process.env.TOKEN);
console.log("LENGTH:", process.env.TOKEN?.length);

client.login(process.env.TOKEN);
