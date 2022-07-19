let handler = async m => m.reply(`
*<====[ PAYMENT ]====>*
┏⫹⫺ *GOPAY* 
┗$ .gopay

┏⫹⫺ *DANA* 
┗$ .dana

┏⫹⫺ *OVO* 
┗$ .ovo

┏⫹⫺ *PULSA TELKOMSEL* 
┗$ .telkomsel

┏⫹⫺ *PULSA INDOSAT* 
┗$ .indosat
`.trim()) // Tambah sendiri kalo mau
handler.help = ['pay']
handler.tags = ['myshop']
handler.command = /^pay$/i

module.exports = handler
