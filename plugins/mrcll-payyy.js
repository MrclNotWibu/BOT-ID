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

*NOTE:* Jika sudah membayar chat 081381685954
`.trim()) // Tambah sendiri kalo mau
handler.help = ['paymemt']
handler.tags = ['info']
handler.command = /^payment$/i

module.exports = handler
