let handler = async m => m.reply(`
Ketik .sewabot
`.trim()) // Tambah sendiri kalo mau
handler.help = ['jbot']
handler.tags = ['myshop']
handler.command = /^jbot$/i

module.exports = handler
