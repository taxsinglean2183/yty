let moment = require('moment-timezone')
let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + command)).buffer(), `
Hai Sayangku ${ucapan()}\nIntro dulu yuk biar lebih akrab ๐
   
   ๐๐๐ฆ๐:
   ๐๐ฆ๐ฎ๐ซ:
   ๐๐ฌ๐ค๐จ๐ญ:
   ๐๐ฅ๐๐ฌ๐๐ง ๐๐๐ฌ๐ฎ๐ค ๐๐ ๐๐ข๐ง๐ข:
`.trim(), footer, 'Tampilkan Menu', '.menu')

handler.help = ['intro <teks>']
handler.tags = ['maker']
handler.command = /^(intro)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) {
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang๐"
    }
    if (time >= 15) {
        res = "Selamat sore๐"
    }
    if (time >= 18) {
        res = "Selamat malam๐"
    }
    return res
}
