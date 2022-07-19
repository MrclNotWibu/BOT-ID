let handler = async m => m.reply(`
Coming soon sayang
`.trim()) // Tambah sendiri kalo mau
handler.help = ['jcmd']
handler.tags = ['info']
handler.command = /^jcmd$/i

module.exports = handler
