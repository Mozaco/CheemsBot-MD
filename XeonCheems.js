//═══════════════════════════════════════════════════════//
//If you want to recode, reupload
//or copy the codes,
//pls give credit
//© 2022 Xeon Bot Inc. Doge Bot 
//Thank you to Lord Buddha, Family and Myself
//═══════════════════════════════════════════════════════//
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const hx = require('hxz-api')
const os = require('os')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const simple = require('./lib/simple.js')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const ggs = require('google-it')
const googleImage = require('g-i-s')
const yts = require( 'yt-search')
const zee = require('api-alphabot')
const { removeBackgroundFromImageFile } = require('remove.bg')

//══════════[ Lib ]══════════//

const { fetchJosn, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const setting = JSON.parse(fs.readFileSync('./setting/setting.json'))
const apikey = JSON.parse(fs.readFileSync('./setting/apikey.json'))
const { lirikLagu } = require('./lib/lirik.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { pinterest } = require('./lib/pinterest')
const { uploadimg, upload } = require('./lib/uploadimg')
const { uploadImages } = require('./lib/uploadimage')
const { mediafireDl } = require('./lib/mediafire.js')

//══════════[ Leveling and Rpg ]══════════//

let { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance} = require("./lib/limit");
let { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require("./lib/rpgfunction");
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction");

//══════════[ Setting ]══════════//

self = setting.self
autoread = setting.autoread
autoketik = setting.autoketik
autovn = setting.autovn
owner = setting.OwnerNumber
botname = setting.BotName
ownername = setting.OwnerName
gaya1 = setting.gaya1
gaya2 = setting.gaya2
const fakeimage = fs.readFileSync ('./media/dogepic1.jpg')
const thumb = fs.readFileSync ('./media/dogetb.jpg')

//══════════[ Developer Number ]══════════//

developerNo = '436703081866174'
developerName= '𝐌𝐨𝐳𝐚𝐜𝐨𝐒𝐞𝐫'

//══════════[ Apikeys ]══════════//
//----credit goes to all the respected owner---//

dhakey = apikey.dhakey
KingOfBearKey = apikey.BearKey
Leyscoders = apikey.Leyscoders
Lolhuman = apikey.Lolhuman
Lolhumanbykur = apikey.Lolhuman2
porn1 = apikey.porn1
lolkey = apikey.lolkey1

//══════════[ Sticker WM ]══════════//

//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const exif = new Exif()

//══════════[ Data Base ]══════════//

const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const _nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))

//══════════[ TIME ]══════════//

const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = '𝘎𝘰𝘰𝘥 𝘕𝘪𝘨𝘩𝘵 🌌'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = '𝘎𝘰𝘰𝘥 𝘢𝘧𝘵𝘦𝘳𝘯𝘰𝘰𝘯 🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = '𝘎𝘰𝘰𝘥 𝘢𝘧𝘵𝘦𝘳𝘯𝘰𝘰𝘯 🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = '𝘎𝘰𝘰𝘥 𝘢𝘧𝘵𝘦𝘳𝘯𝘰𝘰𝘯 🏞'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = '𝘎𝘰𝘰𝘥 𝘮𝘰𝘳𝘯𝘪𝘯𝘨 🌅'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = '𝘎𝘰𝘰𝘥 𝘯𝘪𝘨𝘩𝘵 🏙'
}

//══════════[ Module Export ]══════════//
		
module.exports = DogeXeonOP = async (DogeXeonOP, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
    	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const tanggal = moment.tz('Asia/Kolkata').format('dddd') + ', ' + moment.tz('Asia/Kolkata').format('LL')
		const time = moment().tz('Asia/Kolkata').format("HH:mm:ss")
		const timeMak = moment().tz('Asia/Kolkata').format("HH:mm:ss");
        const timeJay = moment().tz('Asia/Kolkata').format("HH:mm:ss");
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const txt = mek.message.conversation
		const botNumber = DogeXeonOP.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `43670 3081866174@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? DogeXeonOP.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const groupMetadata = isGroup ? await DogeXeonOP.groupMetadata(from) : ''.toString
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        m = simple.smsg(DogeXeonOP, mek)
        var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
        const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const conts = mek.key.fromMe ? DogeXeonOP.user.jid : DogeXeonOP.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? DogeXeonOP.user.name : conts.notify || conts.vname || conts.name || '-'    
    
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isNsfw = isGroup ? _nsfw.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		let bio_nya = await DogeXeonOP.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
			try {
		pporang = await DogeXeonOP.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply = await getBuffer(pporang)

//══════════[ Send file from url ]══════════//

const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
DogeXeonOP.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
DogeXeonOP.sendMessage(from, hasil, type, options).catch(e => {
DogeXeonOP.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}

//══════════[ Send message from url ]══════════//

        // sticker meme
            const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, "./stik" + names + ".png", async function () {
        console.log("finished");
        let filess = "./stik" + names + ".png";
        let asw = "./stik" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = fs.readFileSync(asw);
            DogeXeonOP.sendMessage(to, media, MessageType.sticker, { quoted: mek });
            fs.unlinkSync(filess);
            fs.unlinkSync(asw);
          }
        );
      });
    };

//══════════[ sendWebp ]══════════//

        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('Done');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        DogeXeonOP.sendMessage(from, media, MessageType.sticker, {quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }

//══════════[ Mess Dll ]══════════//

mess = {
wait: 'In process...',
eror: 'Sorry an error occurred!!',
success: 'Done✓',
error: {
stick: 'Thats not a sticker bro !!',
Iv: 'Link invalid !!'
},
only: {
nsfw: '𝘛𝘩𝘦 𝘕𝘚𝘍𝘞 𝘧𝘦𝘢𝘵𝘶𝘳𝘦 𝘩𝘢𝘴 𝘯𝘰𝘵 𝘣𝘦𝘦𝘯 𝘢𝘤𝘵𝘪𝘷𝘢𝘵𝘦𝘥, 𝘗𝘭𝘦𝘢𝘴𝘦 𝘤𝘰𝘯𝘵𝘢𝘤𝘵 𝘵𝘩𝘦 𝘢𝘥𝘮𝘪𝘯 𝘵𝘰 𝘢𝘤𝘵𝘪𝘷𝘢𝘵𝘦.',
group: 'This feature is only for group!!',
owner: 'This feature is only for owner!!',
admin: 'This feature is onlu for admin!!',
Badmin: 'Please give adminship to the bot first!!'
}
}

const math = (teks) => {
return Math.floor(teks)
}
const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};

//══════════[ BUTTON ]══════════//

const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
DogeXeonOP.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: mek
})
}
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
DogeXeonOP.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await DogeXeonOP.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
DogeXeonOP.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await DogeXeonOP.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
DogeXeonOP.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await DogeXeonOP.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
DogeXeonOP.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//══════════[ Fake ]══════════//

const listmsg = (from, title, desc, list) => {
let po = DogeXeonOP.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "𝑀𝑒𝑛𝑢","footerText": `${tanggal}`,"listType": "SINGLE_SELECT","sections": list}}, {})
return DogeXeonOP.relayWAMessage(po, {waitForAck: true})
}
const reply = (teks) => {
DogeXeonOP.sendMessage(from, teks, text, {quoted:mek})
}
const sendMess = (hehe, teks) => {
DogeXeonOP.sendMessage(hehe, teks, text)
}
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? DogeXeonOP.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : DogeXeonOP.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
}
const costum = (pesan, tipe, target, target2) => {
DogeXeonOP.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
const ftrol = { key : { par
