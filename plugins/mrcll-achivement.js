let handler = async m => m.reply(`
Coming soon sayang
`.trim()) // Tambah sendiri kalo mau
handler.help = ['achivement']
handler.tags = ['info']
handler.command = /^achivement$/i

module.exports = handler
