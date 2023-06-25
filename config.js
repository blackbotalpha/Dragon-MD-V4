const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })

//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port= process.env.PORT || 5000
global.email = 'a@gmail.com'
global.github = 'https://github.com'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || '94770378874'
global.devs = '94770378874';
global.website = 'https://github.com' //wa.me/+91000000000000
global.THUMB_IMAGE = 'https://telegra.ph/file/55f1d0b60d084bd0729fb.jpg'
module.exports = {
  aliveimg: process.env.ALIVE_IMAGE || 'https://telegra.ph/file/55f1d0b60d084bd0729fb.jpg',
  botname: process.env.BOT_NAME || '❒═❲𝐁𝐋𝐀𝐂𝐊-𝐊𝐈𝐍𝐆𝐃𝐎𝐌𝐄❳═❒',
  ownername:process.env.OWNER_NAME || '❒𝐁𝐋𝐀𝐂𝐊 𝐒𝐘𝐁𝐄𝐑🎯❒',
  sessionName: process.env.SESSION_ID || 'Secktor;;;IcebergBizarro',
  author: process.env.PACK_INFO.split(";")[0] || '❒𝐊𝐈𝐍𝐆-𝐙𝐈𝐙𝐔𝐊𝐎❒', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'true',
  packname: process.env.PACK_INFO.split(";")[1] || '❒═❲BLACK-KINGDOME❳═❒',
  autoreaction: process.env.AUTO_REACTION || 'on',
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  caption: process.env.CAPTION || '_*🪄 𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐎𝐮𝐫 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 🪄*_ \nhttps://youtube.com',
  HANDLERS: process.env.PREFIX || ['/'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "false",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'black-md',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || `💯 _*Deverloper*_ :- _black-ZIZUKO\n💯 _*Owner*_ :- _${process.env.OWNER_NAME}_\n💯 _*Bot Name*_ :- BLACK KINGDOME\n💯 _*Vertion*_ :- 🙂 _ZIZUKO ♾\n\n_🙂 .𝚊𝚕𝚒𝚟𝚎 = 𝚋𝚘𝚝 𝚒𝚜 𝚘𝚗𝚕𝚒𝚗𝚎 𝚌𝚑𝚎𝚌𝚔_\n_🧚‍♂️ .𝚖𝚎𝚗𝚞 = 𝚐𝚎𝚝 𝚋𝚘𝚝 𝚖𝚎𝚗𝚞_\n_🧚‍♂️ .song = 𝚍𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝚢𝚘𝚞𝚝𝚞𝚋𝚎 𝚜𝚘𝚗𝚐_\n_🐉 .video = 𝚍𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝚢𝚘𝚞𝚝𝚞𝚋𝚎 𝚟𝚒𝚍𝚎𝚘_\n_🐉 .yt = 𝚜𝚎𝚊𝚛𝚌𝚑 𝚒𝚗 𝚢𝚘𝚞𝚝𝚞𝚋𝚎_`,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'put-key-here',
  heroku: process.env.heroku || false,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v4.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'SI',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
