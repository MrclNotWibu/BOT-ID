let handler = async m => m.reply(`
MrclNotWibu.github.io
`.trim()) // Tambah sendiri kalo mau
handler.help = ['paidedit']
handler.tags = ['myshop']
handler.command = /^paidedit$/i

module.exports = handler
