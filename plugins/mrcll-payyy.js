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
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
