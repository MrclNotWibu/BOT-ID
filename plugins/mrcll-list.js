let handler = async m => m.reply(`
「 MrclL Shop 」

┏⫹⫺ *JASA CMD* 
┗$ .jcmd

┏⫹⫺ *ACHIEVEMENT MC* 
┗$ .achievement 

┏⫹⫺ *WEB ONLINE* 
┗$ .webonline

┏⫹⫺ *PAID EDIT* 
┗$ .paidedit

┏⫹⫺ *SEWABOT* 
┗$ .sewabot

┏⫹⫺ *JADIBOT* 
┗$ .jbot

*PAYMENT:*

┏⫹⫺ *PULSA INDOSAT* 
┗$ .pulsaindosat

┏⫹⫺ *PULSA TELKOM* 
┗$ .pulsatelkom

┏⫹⫺ *OVO* 
┗$ .ovo

┏⫹⫺ *DANA* 
┗$ .dana

┏⫹⫺ *GOPAY* 
┗$ .gopay
`.trim()) // Tambah sendiri kalo mau
handler.help = ['listshop']
handler.tags = ['info']
handler.command = /^listshop$/i

module.exports = handler

