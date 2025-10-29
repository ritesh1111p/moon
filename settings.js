
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUp6ODBDbGV3bXJaZWNUb3pBWk9jM0dHVXhrd2E1aVRHVGZ2Z0ZPTFBXdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkRCUHRXTWpzNm0xU1BVRElid2tSYlNDM1RUUnI2Q1pGb3IweTJrRmZtMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3RmtOcVpmckFWcVZUMSt5cGJBQ1YxWjRxTk9XdWEwZjd6SzdCaEdEcEdvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhbys1MWllM2lWeklxTHdBMGs3UG42K3NTdDMrL0xzODlDZEVZNjRGZ1JVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1PQlYzN2YrZ1NmcTNPUE9USW1QRXRhSGRUT2hqTWt1TldEcWN5c0NwWGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdHbU54TUphd3NXNkVpaDNsRkZrZjBKTFJ1Z204K0Zldlk5cDNYZ3ozVXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY04xWnFiTnFNUURlblJ5VFJXUWVyNzYzNGVvakRYNEZEejd0cittOGtYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0NuNC9jVzRjM2JRSlU2dm42cUw5aWlxWWZZb1hkQjNwTzI5UmttNWF4VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlRUlFTTU5JbnpVdVNjQXFORzZwdHYvcTdMSEI0a3BqaUh0amVNdEF1aTRzQ2JYSmpaZXlKWG1LQ3dDOHY3aWZiTUduSUhseU5qTm1rWnZXQ3R6OGlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODEsImFkdlNlY3JldEtleSI6Ii9GUDlkaE9wY21lWTZzZHVjQmlPL0NJYjEyc1VkN0ptS3VjdzdkbnV0RE09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTY3NzczNjA1NjQ3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDRDMyRDNBREMwRTAxRkE5RTBERjRGNTU1MTczMDAzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjE3MzM4Njl9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk2Nzc3MzYwNTY0N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzFEOUZDMkU0NjQ5M0RFNkQ5NkMzMDY2MTVGNkM0MSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxNzMzODY5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5Njc3NzM2MDU2NDdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNEMzU4NkZEMzNFNjU0MUIwOTZFNTlCQzlEOUFCRTcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MTczMzg3MX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiN2dEbVctZEVROU9TVG1pSkN4YnVtZyIsInBob25lSWQiOiJlMDdhYzY0ZS1lNGU4LTRlYjktODEwYS03YTFhYzg4NmU3MzEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGtBano4YlRMOW0wdE9HK3lwMklpK0R1NnhjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZrWkNNVXdLUUt5Zms0Qm01WE1lMGoxMWVLbz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJNUk1BTFZJTiIsIm1lIjp7ImlkIjoiOTY3NzczNjA1NjQ3OjFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNDI0NDc1NzMyNjY0NDU6MUBsaWQiLCJuYW1lIjoiTW9vbngifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1B2LzJoNFEzZG1IeUFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImlySlZWK0JCK3M3VDBXV3VvbzN1amp0QU42UktHZUJVUUltb0tCNHRTbm89IiwiYWNjb3VudFNpZ25hdHVyZSI6IkhhclZwc1F1S0U0YnBxSlAzT1lIWi9xL0lzby81U0VYN01rT0lnN241cjYwakVOenE0VEtSWUt3a0lUaTAyd3pTeTNTV1NmMXFkMERqaE16ckJpQUFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ4d2doSHp5WGJjS3VFaEpOcGNaWmlSUDloSkF3N1U2VHM3ZUZPYlBRVzFpMitwNnROb3o3S1ZWYnFpaXBZeUN1bExUT0tmS2xlMElTQk1yTVJtSjFoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk2Nzc3MzYwNTY0NzoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllxeVZWZmdRZnJPMDlGbHJxS043bzQ3UURla1NobmdWRUNKcUNnZUxVcDYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MTczMzg2NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDQVoifQ==",
// add your Session Id make sure it starts with lucky~
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "MooN X",
// add bot name here for menu
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 

LINK_WHITELIST: "youtube.com,github.com",

    LINK_WARN_LIMIT: 3, // Number of warnings before action

    LINK_ACTION: "kick", // "kick", "mute", or "none"

        AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

        AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 

        AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 

        AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Just seen ur status 😆*",
// set the auto reply massage on status reply  


       WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups 
   
       ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group

      ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 

      MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 

     MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/4itzeu.jpg",
// add custom menu and mention reply image url

       ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/4itzeu.jpg",
// add img for alive msg

        LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦LUCKY-XD✦ ғʀᴏᴍ Lucky Tech Hub ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/Tomilucky218/Lucky-XD2",
// add alive msg here 


        STICKER_NAME: process.env.STICKER_NAME || "MooN X",
// type sticker pack name 

        CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react  
  
      CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 

          DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 

          OWNER_NUMBER: process.env.OWNER_NUMBER || "967773605647",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "চন্দ্রবিন্দুর চাঁদ",
// add bot owner name

              DESCRIPTION: process.env.DESCRIPTION || "*MooN-X*",
// add bot owner name    

        READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

                 AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
                ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  

            ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 

        AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

              AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 

        ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 

         PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod

        AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing 
  
   READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 

     DEV: process.env.DEV || "918777371471",
//replace with your whatsapp number    
    
    ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 

      ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'inbox/ same if you want to resend deleted message in same chat 

      AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 

version: process.env.version || "0.0.9",

};
