let handler = async m => m.reply(`
Coming soon sayang
`.trim()) // Tambah sendiri kalo mau
handler.help = ['webonline']
handler.tags = ['info']
handler.command = /^webonline$/i

module.exports = handler
