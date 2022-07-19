let handler = async m => m.reply(`
Ketik .sewabot
`.trim()) // Tambah sendiri kalo mau
handler.help = ['jbot']
handler.tags = ['info']
handler.command = /^jbot$/i

module.exports = handler
