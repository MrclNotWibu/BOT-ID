let handler = async m => m.reply(`
╭─「 List 」
│ •  0% Smpe 100%
╰────

╭─「 Harga 」
│ •  55K
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['achivement']
handler.tags = ['info']
handler.command = /^achivement$/i

module.exports = handler
