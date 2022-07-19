let handler = async m => m.reply(`
Coming soon sayang
`.trim()) // Tambah sendiri kalo mau
handler.help = ['paidedit']
handler.tags = ['info']
handler.command = /^paidedit$/i

module.exports = handler
