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

*NOTE:* Jika sudah membayar chat https://wa.me/+6281381685954
`.trim()) // Tambah sendiri kalo mau
handler.help = ['pay']
handler.tags = ['info']
handler.command = /^pay$/i

module.exports = handler
