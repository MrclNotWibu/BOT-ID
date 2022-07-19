let handler = async m => m.reply(`
╭─「 List 」
│ •  Web Bisnis
│ •  Web Portofolio
│ •  Web Shop
╰────

╭─「 Harga 」
│ •  25K
│ •  40K
│ •  20K
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['webonline']
handler.tags = ['info']
handler.command = /^webonline$/i

module.exports = handler
