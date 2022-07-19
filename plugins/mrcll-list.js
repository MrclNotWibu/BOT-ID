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
┗$ .indosat

┏⫹⫺ *PULSA TELKOM* 
┗$ .telkomsel

┏⫹⫺ *OVO* 
┗$ .ovo

┏⫹⫺ *DANA* 
┗$ .dana

┏⫹⫺ *GOPAY* 
┗$ .gopay
`.trim()) // Tambah sendiri kalo mau
handler.help = ['listproduk']
handler.tags = ['database']
handler.command = /^listproduk$/i

module.exports = handler

