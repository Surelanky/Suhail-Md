const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349157321797";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176,2349157321797";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_54_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc0LFxuICAgICAgICA5OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDY1LFxuICAgICAgICA3MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjksXG4gICAgICAgIDY4LFxuICAgICAgICA2OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDczLFxuICAgICAgICA1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDg4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyOSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMixcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDksXG4gICAgICAgIDU1LFxuICAgICAgICAxMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUzLFxuICAgICAgICA0MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxODYsXG4gICAgICAgIDg3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDUyLFxuICAgICAgICA0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTksXG4gICAgICAgIDg4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDc0LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzLFxuICAgICAgICA4MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI4LFxuICAgICAgICA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExLFxuICAgICAgICA2MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI5LFxuICAgICAgICA2MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEsXG4gICAgICAgIDIwLFxuICAgICAgICA1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDkzLFxuICAgICAgICA3NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5bUVEV3VoeUtwMG1XWnVOclRWbWhZb2NlN2QzTnhlK3dEK2c1ZDlsb2lZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiS3I3QmgzclJSYVFJWTNYMWZUY0x3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjhkMzQzMWIzLWY3N2EtNGUwOC05NDJmLTI2N2M2MDk2MWE0NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDIsXG4gICAgICAxMTEsXG4gICAgICAyMzQsXG4gICAgICAyNTUsXG4gICAgICAyMTEsXG4gICAgICAxMzYsXG4gICAgICAzNCxcbiAgICAgIDUwLFxuICAgICAgODYsXG4gICAgICA3NixcbiAgICAgIDE4LFxuICAgICAgMTc3LFxuICAgICAgMjMzLFxuICAgICAgMTU2LFxuICAgICAgMTU5LFxuICAgICAgMTQyLFxuICAgICAgMTMyLFxuICAgICAgMjU1LFxuICAgICAgMTI3LFxuICAgICAgODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAzLFxuICAgICAgMTA0LFxuICAgICAgMTk2LFxuICAgICAgNDUsXG4gICAgICAxMjYsXG4gICAgICAyNDAsXG4gICAgICAxNTMsXG4gICAgICAxOTcsXG4gICAgICAyMjcsXG4gICAgICAyMTIsXG4gICAgICA3MyxcbiAgICAgIDEwMCxcbiAgICAgIDY3LFxuICAgICAgNTgsXG4gICAgICAxNTgsXG4gICAgICAyNTIsXG4gICAgICAxNTYsXG4gICAgICAzNSxcbiAgICAgIDQsXG4gICAgICAyMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRFo2UDE0SlBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDc4Mjk4Nzg6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3ODQxNzMwMzU1NjEyMjoyN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMMmJtY0lQRU9Qc3ViUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjU1TjRDNFZNZXhKL0YyTHFxL2d0YjVTNkJPcUFoRkR0WXFnVTNVNFBoVEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMHZVQ01tOUJ4ZXU2aE1aZXVlWDZUYXl1VXMya3FoSndqL2Y1aXhvbmtUTkxYU1g0RUwydXBHSCsxSHpkcGl2YU1JQ2hZQkV5anRDWmFSQ0pnRGxzaFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY2RtRWtWaCtBbTJjNzZuSUpjbUNZNU9hVU9HdmdMRWpyOUdLU1VLbkxRYjJqRjdobGRyZml2NE5MbTdrd2lqdUpiTXNUSHFiYjJPTjVLcDF2dkpHQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwNzgyOTg3ODoyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDYxMjQ1OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhieFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGJ4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiR3NkcFYwTFg1T0h1NGVpT1FnYnB4eWhLVzVCMTA0NEJFc2ovaUpFME4ybz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MTY1MzU2OTg5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA2MTI0NjA5OTRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
