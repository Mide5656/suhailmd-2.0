I'mconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="itzjaywon@gmail.com"
global.location="Lagos, Nigeria"


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© anonymousTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349166382224";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2349166382224";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349166382224";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_35_12_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAzNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDcwLFxuICAgICAgICA3NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA1LFxuICAgICAgICAzMSxcbiAgICAgICAgNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDY1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgODgsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQyLFxuICAgICAgICA0NixcbiAgICAgICAgMjAzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDMzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMixcbiAgICAgICAgMjA3LFxuICAgICAgICA5NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDU3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgODMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzgsXG4gICAgICAgIDM3LFxuICAgICAgICA4NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI3LFxuICAgICAgICA2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyLFxuICAgICAgICA0NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDU3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAzNixcbiAgICAgICAgODMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICA4NixcbiAgICAgICAgNjQsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgODEsXG4gICAgICAgIDEyLFxuICAgICAgICA5MixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMixcbiAgICAgICAgMjEyLFxuICAgICAgICA1MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgODcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDc0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSzJMclhnbEl2d1A2S2JxaTNjcWRKWEgvQ2dqcDhDWEVFMnpUNVdHWWh3WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZEFpTTZ5U1hTM2k4T1ZGcFRMT01qd1wiLFxuICBcInBob25lSWRcIjogXCJkMDMyNTAyMi1lMzZiLTQ4YjgtOGY1My0zYjEzY2ExNmY1MzFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzEsXG4gICAgICAxNzEsXG4gICAgICAzNyxcbiAgICAgIDczLFxuICAgICAgMixcbiAgICAgIDE0NyxcbiAgICAgIDUsXG4gICAgICAyMjUsXG4gICAgICAxLFxuICAgICAgNzUsXG4gICAgICAxOTUsXG4gICAgICAxODksXG4gICAgICAyMDUsXG4gICAgICA5MCxcbiAgICAgIDkwLFxuICAgICAgNjgsXG4gICAgICA1NSxcbiAgICAgIDE5NyxcbiAgICAgIDUwLFxuICAgICAgNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAxLFxuICAgICAgMjM3LFxuICAgICAgMjIzLFxuICAgICAgMTE0LFxuICAgICAgMTUzLFxuICAgICAgMTE3LFxuICAgICAgODgsXG4gICAgICAyNDYsXG4gICAgICA3OSxcbiAgICAgIDg4LFxuICAgICAgMjMyLFxuICAgICAgMTQ4LFxuICAgICAgMzUsXG4gICAgICA0NyxcbiAgICAgIDkzLFxuICAgICAgODYsXG4gICAgICAxMzYsXG4gICAgICA0MSxcbiAgICAgIDIyMixcbiAgICAgIDExOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3NjVLRjlEUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2NjM4MjIyNDo1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjU4NTcwNDAyNzAxMzc5OjUzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01Ub3RPRUdFTldGdTdvR0dCSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWGJOUUZTSXI4TkNyTW9tZ3lvWXdxWjA4RFAzYVZvdmdXTGZhUTg4WThIMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJETjVFVHA0R0szN3dpc1kwQmVkbC9QTysrd2I2elNaR0dKODRqQkEzRkZIK1h1RWpDM29rc0QrWEpKT0pIMDZjTm9FQnYzTndMa2h4VWJVRmgxUllBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1WXIxT1pxZXlFTTViWkk1ZUNvRWwyQks2WWFuOWt2RnpJUVhrczNwbm1NNXYrNGFIckFQQkZ1bllpOThSOUZKZUZSNnBFNXo0Y01NSjVWRFJ3SmVpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTY2MzgyMjI0OjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMyMTQ5MzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCMzFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUIzMS5qc29uIjogIntcImtleURhdGFcIjpcIk1FRjNvOGl4Qk8xaGV6TlRxMlhuUGh4UjU0MW1GODE5Wk1UYTMvdEFHekE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgxNDkwMTgyOCxcImN1cnJlbnRJbmRleFwiOjE1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDcsMTAsMTVdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "anonymous bot",
  ownername:process.env.OWNER_NAME|| "Anonymous",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
