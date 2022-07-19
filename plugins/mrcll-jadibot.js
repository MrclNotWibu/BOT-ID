let handler = async m => m.reply(`
Coming soon sayang
`.trim()) // Tambah sendiri kalo mau
handler.help = ['jbot']
handler.tags = ['info']
handler.command = /^jbot$/i

module.exports = handler
